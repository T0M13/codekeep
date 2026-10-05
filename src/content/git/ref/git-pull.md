# git pull

Downloads changes from a remote repository and merges them into your current branch. Combines `git fetch` + `git merge`.

## Syntax

```bash
git pull [remote] [branch]
```

## Examples

```bash
# Pull latest changes for current branch
git pull

# Pull from a specific remote and branch
git pull origin main

# Pull and rebase instead of merge
git pull --rebase

# Pull a specific branch
git pull origin feature-branch
```

## Common Flags

| Flag | What It Does |
|---|---|
| `--rebase` | Rebase instead of merge (cleaner history) |
| `--no-commit` | Fetch and merge but don't auto-commit |
| `--ff-only` | Only pull if it can fast-forward |

## What Happens

1. `git fetch` — downloads new commits from the remote
2. `git merge` — merges them into your current branch

If there are conflicts, you resolve them just like any merge.

## Key Points

- `git pull` is the most common way to get updates
- Always pull before starting new work
- If you get merge conflicts, resolve them, then `git add .` and `git commit`
- `--rebase` gives a cleaner, linear history (preferred by many teams)
- `git pull` only affects the branch you're currently on
