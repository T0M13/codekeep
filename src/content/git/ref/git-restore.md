# git restore

Discards changes in the working directory or unstages files. The modern replacement for parts of `git checkout`.

## Syntax

```bash
git restore [options] <file>
```

## Examples

```bash
# Discard changes to a file (revert to last commit)
git restore index.html

# Discard all changes in the working directory
git restore .

# Unstage a file (remove from staging area)
git restore --staged index.html

# Unstage all files
git restore --staged .

# Restore a file from a specific commit
git restore --source=a1b2c3d index.html

# Restore a file from another branch
git restore --source=main config.js
```

## Common Flags

| Flag | What It Does |
|---|---|
| `--staged` | Unstage a file (move from staging area back to working directory) |
| `--source` | Restore from a specific commit or branch |
| `--worktree` | Restore the working directory file (default) |

## Key Points

- Without `--staged`: discards working directory changes (destructive!)
- With `--staged`: just unstages the file, changes remain in working directory
- Introduced in Git 2.23 alongside `git switch`
- Replaces `git checkout -- file` (discard changes) and `git reset HEAD file` (unstage)
- Discarded changes are gone forever — there's no undo
- `--source` lets you grab a file from any point in history
