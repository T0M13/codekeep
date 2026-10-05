# git reset

Moves the current branch pointer backward, undoing commits. Has three modes with different levels of destruction.

## Syntax

```bash
git reset [mode] [commit]
```

## Examples

```bash
# Undo last commit, keep changes staged
git reset --soft HEAD~1

# Undo last commit, keep changes unstaged (default)
git reset HEAD~1

# Undo last commit AND discard all changes
git reset --hard HEAD~1

# Undo last 3 commits
git reset --hard HEAD~3

# Reset to a specific commit
git reset --hard a1b2c3d

# Unstage a file (without undoing changes)
git reset HEAD file.txt
```

## The Three Modes

| Mode | Commit | Staging Area | Working Directory |
|---|---|---|---|
| `--soft` | Undone | Kept | Kept |
| `--mixed` (default) | Undone | Cleared | Kept |
| `--hard` | Undone | Cleared | Cleared |

## Key Points

- `--soft` is the gentlest — your changes are ready to recommit
- `--mixed` is the default — changes become unstaged modifications
- `--hard` is destructive — all changes are permanently deleted
- `HEAD~1` means "one commit back", `HEAD~3` means "three commits back"
- **Never reset commits that have been pushed** — use `git revert` instead
- If you reset too far, `git reflog` can help you find the lost commits
