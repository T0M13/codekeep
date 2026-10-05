# git branch

Lists, creates, and deletes branches.

## Syntax

```bash
git branch [options] [branch-name]
```

## Examples

```bash
# List all local branches
git branch

# List all branches (local + remote)
git branch -a

# Create a new branch
git branch feature-login

# Delete a merged branch
git branch -d feature-login

# Force delete an unmerged branch
git branch -D experimental

# Rename the current branch
git branch -m new-name

# Rename a specific branch
git branch -m old-name new-name

# Show which branches contain a specific commit
git branch --contains a1b2c3d
```

## Common Flags

| Flag | What It Does |
|---|---|
| `-a` | Show all branches (local + remote) |
| `-d` | Delete a branch (only if merged) |
| `-D` | Force delete a branch |
| `-m` | Rename a branch |
| `-v` | Show last commit on each branch |
| `-r` | Show only remote branches |

## Key Points

- Creating a branch does NOT switch to it — use `git switch` for that
- `git branch -d` is safe — it only deletes if the branch has been merged
- `git branch -D` is the "I know what I'm doing" version
- The `*` in the output marks your current branch
- Branch names can't have spaces — use hyphens: `my-feature`
