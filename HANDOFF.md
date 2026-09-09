# CodeKeep handoff - 2026-09-09

## Current status

CodeKeep is live at <https://codekeep.tamas-illes.com>.

The deployed routes were smoke-tested successfully:

- `/`
- `/reference`
- `/reference/html/main`
- `/reference/css/display`
- `/reference/javascript/async-await`
- `/tests`
- `/tests/html`

The local production build passes with `npm run build`. Existing Svelte 5 state-capture warnings remain in older lesson, profile, and playground components; they do not fail the build.

## Product work completed

Claude started the W3Schools-style reference area and generated partial HTML, CSS, and JavaScript Markdown content. That work was preserved and completed into a deployable feature.

- Added Reference to the main navigation.
- Added a reference landing page that lists only topics with available content and shows entry counts.
- Added categorized, persistent reference navigation with an active item, sidebar filtering, mobile drawer, breadcrumbs, and previous/next links.
- Topic routes now use server redirects instead of HTML refresh markup.
- Reference pages show one focused entry with explanations, syntax, examples, differences, and pitfalls.
- There are currently 64 reference entries: 25 HTML, 26 CSS, and 13 JavaScript.
- Added Tests to the main navigation.
- Added one-question-at-a-time HTML, CSS, and JavaScript tests with five questions per topic.
- Quiz answers are checked server-side. Correct answers award 50 XP once per account/question through the existing progress tables.
- Quiz feedback links back to the relevant reference entry.

W3Schools was used only as an interaction/content-structure reference. Code and article wording are original.

## Deployment and isolation

The host-only Compose file is `/opt/stacks/codekeep.yml`. Persistent data remains at `/opt/appdata/codekeep/data`.

The deployment is split into two containers:

- `codekeep`: Node 24 LTS, UID/GID 1000, read-only root, all capabilities dropped, `no-new-privileges`, default Docker seccomp/AppArmor, 256 MB memory, 1 CPU, 64 PID limit. It has no published port and only joins `stacks_codekeep_jail`.
- `codekeep-gateway`: minimal Nginx, UID/GID 101, read-only root, all capabilities dropped, `no-new-privileges`, 32 MB memory, 0.25 CPU, 16 PID limit. It owns host port 3400 and has no database, application source, or secrets.

`stacks_codekeep_jail` uses `internal: true` plus Docker 29's isolated IPv4 gateway mode. Runtime checks confirmed the app has no default gateway and an outbound HTTP attempt is blocked. The app's only writable host mount is its own SQLite data. Reference content is mounted read-only.

The JWT signing secret was rotated and the Compose file permission changed from 664 to 600. Existing browser sessions were invalidated; accounts and progress were preserved.

## Approaches tried

Publishing port 3400 directly from the app on the isolated-gateway network blocked both egress and ingress, returning HTTP 000. The final design keeps the app on that strict network and uses the separate gateway for ingress.

The first Node 24 image build failed because `better-sqlite3` needed native tools on Alpine. The Docker builder now installs Python, Make, and G++; the runtime build tools are removed after installation.

The first gateway start failed because Nginx tried to create temp directories on its read-only filesystem. All Nginx temp paths now point to the 10 MB no-exec tmpfs.

Compose reports unrelated stack services as orphans because many services share the `stacks` Compose project. Never use `--remove-orphans` for CodeKeep.

## Security boundary and next step

This is a strongly hardened container deployment for a normal web application, and CodeKeep does not execute playground code on the server. It is not an absolute hostile-code sandbox because Docker containers share the host kernel and the gateway necessarily accepts network traffic.

For a stronger boundary, move these two containers into a dedicated VM or microVM with its own kernel, place it in a DMZ/VLAN, and enforce firewall rules that deny VM-initiated traffic to the server and home LAN. Kata Containers, gVisor, or Firecracker are alternatives, but a dedicated VM plus network policy is simpler to reason about on this homelab.

## Useful commands

```bash
npm run build
docker compose -f /opt/stacks/codekeep.yml up -d --build codekeep codekeep-gateway
docker ps --filter name=codekeep
docker logs --tail 100 codekeep
docker logs --tail 100 codekeep-gateway
curl --max-time 5 -I http://127.0.0.1:3400/reference
```

A reusable Codex skill is installed at `/home/tomiapps/.codex/skills/codekeep/SKILL.md`.
