# git revert

Creates a new commit that undoes the changes from a previous commit. The safe way to undo pushed commits.

## Syntax

```bash
git revert <commit>
```

## Examples

```bash
# Revert the last commit
git revert HEAD

# Revert a specific commit by hash
git revert a1b2c3d

# Revert without auto-committing (so you can edit the message)
git revert --no-commit a1b2c3d

# Revert multiple commits
git revert HEAD~3..HEAD

# Abort a revert in progress
git revert --abort
```

## Common Flags

| Flag | What It Does |
|---|---|
| `--no-commit` | Apply the revert but don't commit yet |
| `--abort` | Cancel a revert in progress |
| `-m 1` | Specify parent for merge commit reverts |

## Revert vs Reset

| | `git revert` | `git reset` |
|---|---|---|
| Creates new commit | Yes | No |
| Safe for pushed code | Yes | No |
| Rewrites history | No | Yes |
| Keeps the bad commit in history | Yes | No |

## Key Points

- Revert is safe — it doesn't rewrite history, it adds to it
- The original commit stays in history, but a new commit undoes its effects
- Always use revert (not reset) for commits that have been pushed
- May cause conflicts if later commits depend on the reverted changes
- Use `--no-commit` to combine multiple reverts into one commit
