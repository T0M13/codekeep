#!/bin/bash
# CodeKeep smoke tests — run after every deploy
# Tests: pages load, security headers, sandbox, navigation data, challenge starters

BASE="http://localhost:3400"
PASS=0
FAIL=0

ok()   { PASS=$((PASS+1)); echo "  OK  $1"; }
fail() { FAIL=$((FAIL+1)); echo "  FAIL $1"; }

echo "=== CodeKeep Smoke Tests ==="
echo ""

# 1. Container health
echo "[Container]"
STATUS=$(docker inspect codekeep --format '{{.State.Status}}' 2>/dev/null)
RESTARTS=$(docker inspect codekeep --format '{{.RestartCount}}' 2>/dev/null)
[ "$STATUS" = "running" ] && ok "container running" || fail "container not running ($STATUS)"
[ "$RESTARTS" = "0" ] && ok "zero restarts" || fail "restart count: $RESTARTS"

# 2. Pages return 200
echo ""
echo "[Pages]"
for path in / /learn /learn/html /learn/html/introduction /learn/html/elements /learn/css/flexbox /learn/javascript/variables /playground /reference /tests /login; do
  CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BASE$path")
  [ "$CODE" = "200" ] && ok "$path → $CODE" || fail "$path → $CODE"
done

# 3. Security headers
echo ""
echo "[Security Headers]"
HEADERS=$(curl -sI "$BASE/")
echo "$HEADERS" | grep -qi "x-frame-options: DENY" && ok "X-Frame-Options: DENY" || fail "X-Frame-Options missing"
echo "$HEADERS" | grep -qi "x-content-type-options: nosniff" && ok "X-Content-Type-Options: nosniff" || fail "X-Content-Type-Options missing"
echo "$HEADERS" | grep -qi "content-security-policy:" && ok "CSP header present" || fail "CSP header missing"
echo "$HEADERS" | grep -qi "frame-ancestors 'none'" && ok "CSP frame-ancestors 'none'" || fail "CSP frame-ancestors missing"
echo "$HEADERS" | grep -qi "permissions-policy:" && ok "Permissions-Policy present" || fail "Permissions-Policy missing"

# 4. Sandbox attributes in source code (iframes are conditionally rendered on Run click)
echo ""
echo "[Sandbox Security]"
COMPONENT="/home/tomiapps/codekeep/src/lib/components/CodePlayground.svelte"
PLAYGROUND_PAGE="/home/tomiapps/codekeep/src/routes/playground/+page.svelte"
grep -q 'sandbox="allow-scripts"' "$COMPONENT" && ok "CodePlayground: sandbox=allow-scripts" || fail "CodePlayground: sandbox missing"
grep -q 'allow-same-origin' "$COMPONENT" && fail "DANGER: allow-same-origin in CodePlayground!" || ok "CodePlayground: no allow-same-origin"
grep -q 'sandbox="allow-scripts"' "$PLAYGROUND_PAGE" && ok "Playground page: sandbox=allow-scripts" || fail "Playground page: sandbox missing"
grep -q 'allow-same-origin' "$PLAYGROUND_PAGE" && fail "DANGER: allow-same-origin in Playground!" || ok "Playground page: no allow-same-origin"

# 5. Inner CSP in JS iframe (source code check)
grep -q "default-src 'none'" "$COMPONENT" && ok "inner CSP in CodePlayground JS sandbox" || fail "inner CSP missing in CodePlayground"
grep -q "default-src 'none'" "$PLAYGROUND_PAGE" && ok "inner CSP in Playground JS sandbox" || fail "inner CSP missing in Playground"

# 6. Registration closed
echo ""
echo "[Auth]"
REG=$(curl -s -X POST "$BASE/api/auth/register" -H "Content-Type: application/json" -d '{"username":"hacker","email":"h@h.com","password":"test123"}')
echo "$REG" | grep -q "closed" && ok "registration closed" || fail "registration NOT closed: $REG"

# 7. Sidebar rendered on lesson pages
echo ""
echo "[Navigation]"
LESSON_PAGE=$(curl -s "$BASE/learn/html/introduction")
echo "$LESSON_PAGE" | grep -q '<aside' && ok "sidebar <aside> rendered" || fail "sidebar missing"
echo "$LESSON_PAGE" | grep -q '/learn/html/elements' && ok "sidebar links to other lessons" || fail "sidebar lesson links missing"
# Server load passes allLessons
grep -q 'allLessons' /home/tomiapps/codekeep/src/routes/learn/\[topic\]/\[lesson\]/+page.server.js && ok "server passes allLessons" || fail "server missing allLessons"

# 8. Reactive navigation — check that lesson pages have $derived data (not const destructure)
echo ""
echo "[Reactivity]"
grep -q '$derived(data.topic)' /home/tomiapps/codekeep/src/routes/learn/\[topic\]/\[lesson\]/+page.svelte && ok "lesson page uses \$derived" || fail "lesson page still uses const destructure"
grep -q '$derived(data.topic)' /home/tomiapps/codekeep/src/routes/learn/\[topic\]/+page.svelte && ok "topic page uses \$derived" || fail "topic page still uses const destructure"

# 9. Playground reset on prop change
grep -q 'editorCode = code' /home/tomiapps/codekeep/src/lib/components/CodePlayground.svelte && ok "playground resets on prop change" || fail "playground doesn't reset on navigation"

# 10. tick() before iframe src
grep -q 'await tick()' /home/tomiapps/codekeep/src/lib/components/CodePlayground.svelte && ok "tick() before iframe.src" || fail "missing tick() — first Run click will fail"

# 11. Challenge starters have real code (not just comments)
echo ""
echo "[Challenge Content]"
STARTERS_WITH_ONLY_COMMENTS=0
for f in /home/tomiapps/codekeep/src/content/html/*.md /home/tomiapps/codekeep/src/content/css/*.md /home/tomiapps/codekeep/src/content/javascript/*.md; do
  [ -f "$f" ] || continue
  # Extract starter blocks and check they have more than just comments
  STARTERS=$(sed -n '/@starter/,/^@/{ /@starter/d; /^@/d; p; }' "$f" 2>/dev/null)
  if [ -n "$STARTERS" ]; then
    # Strip comments and whitespace, check if anything remains
    REAL_CODE=$(echo "$STARTERS" | sed 's/<!--.*-->//g; s|//.*||g; s|/\*.*\*/||g' | tr -d '[:space:]')
    if [ -z "$REAL_CODE" ]; then
      STARTERS_WITH_ONLY_COMMENTS=$((STARTERS_WITH_ONLY_COMMENTS+1))
      fail "$(basename $f): starter is comment-only"
    fi
  fi
done
[ "$STARTERS_WITH_ONLY_COMMENTS" = "0" ] && ok "all starters have real code"

# 12. Network jail
echo ""
echo "[Network Jail]"
JAIL_ACTIVE=$(sudo iptables -L DOCKER-USER -n 2>/dev/null | grep -c "DROP.*172\.29")
[ "$JAIL_ACTIVE" -ge 1 ] && ok "iptables jail rule active" || fail "iptables jail rule missing"

echo ""
echo "=== Results: $PASS passed, $FAIL failed ==="
[ "$FAIL" = "0" ] && exit 0 || exit 1
