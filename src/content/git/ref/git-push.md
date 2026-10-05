# git push

Uploads your local commits to a remote repository. Sends your work to GitHub (or other hosting).

## Syntax

```bash
git push [remote] [branch]
```

## Examples

```bash
# Push current branch to origin
git push

# Push main branch to origin
git push origin main

# Push and set up tracking (first push of a new branch)
git push -u origin feature-login

# Push all branches
git push --all

# Push tags
git push --tags

# Force push (overwrites remote — use carefully!)
git push --force

# Safer force push (fails if someone else pushed first)
git push --force-with-lease

# Delete a remote branch
git push origin --delete feature-old
```

## Common Flags

| Flag | What It Does |
|---|---|
| `-u` | Set upstream tracking (only needed once per branch) |
| `--all` | Push all branches |
| `--tags` | Push all tags |
| `--force` | Overwrite remote history (dangerous) |
| `--force-with-lease` | Force push, but safely |
| `--delete` | Delete a remote branch |

## Key Points

- After `git push -u origin branch`, future pushes just need `git push`
- Never force push to `main` on a shared repo — it rewrites history for everyone
- `--force-with-lease` is the safe alternative to `--force`
- You can only push commits, not uncommitted changes
- If the remote has new commits you don't have, push will be rejected — pull first
