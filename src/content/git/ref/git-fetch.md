# git fetch

Downloads changes from a remote repository without merging them. Lets you see what's new before incorporating it.

## Syntax

```bash
git fetch [remote] [branch]
```

## Examples

```bash
# Fetch all branches from origin
git fetch

# Fetch from a specific remote
git fetch origin

# Fetch a specific branch
git fetch origin main

# Fetch all remotes
git fetch --all

# Fetch and prune deleted remote branches
git fetch --prune
```

## Common Flags

| Flag | What It Does |
|---|---|
| `--all` | Fetch from all remotes |
| `--prune` | Remove local references to deleted remote branches |
| `--dry-run` | Show what would be fetched without doing it |

## Fetch vs Pull

| Command | Downloads | Merges |
|---|---|---|
| `git fetch` | Yes | No |
| `git pull` | Yes | Yes |

## Key Points

- Fetch is safe — it never changes your working files
- After fetching, review with `git log origin/main` before merging
- Then merge manually: `git merge origin/main`
- `git pull` = `git fetch` + `git merge` in one step
- Use fetch when you want to review changes before merging
- `--prune` cleans up stale remote branch references
