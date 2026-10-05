# git cherry-pick

Copies a specific commit from one branch and applies it to your current branch. Like picking one cherry off a tree instead of taking the whole branch.

## Syntax

```bash
git cherry-pick <commit-hash>
```

## Examples

```bash
# Apply a specific commit to current branch
git cherry-pick a1b2c3d

# Cherry-pick without committing (just stage the changes)
git cherry-pick --no-commit a1b2c3d

# Cherry-pick multiple commits
git cherry-pick a1b2c3d f4e5d6c

# Cherry-pick a range of commits
git cherry-pick a1b2c3d..f4e5d6c

# Abort a cherry-pick in progress
git cherry-pick --abort

# Continue after resolving conflicts
git cherry-pick --continue
```

## Common Flags

| Flag | What It Does |
|---|---|
| `--no-commit` | Apply changes without committing |
| `--abort` | Cancel the cherry-pick |
| `--continue` | Continue after conflict resolution |
| `-x` | Add a note saying where the commit came from |

## Key Points

- Creates a new commit with the same changes but a different hash
- Useful for applying a bug fix from one branch to another
- The original commit stays on its branch — cherry-pick copies, not moves
- Can cause conflicts if the code has diverged
- Use sparingly — merging branches is usually better for bringing in changes
- `-x` appends "(cherry picked from commit ...)" to the message
