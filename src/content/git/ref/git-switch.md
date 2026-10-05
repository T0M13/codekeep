# git switch

Switches between branches. The modern, clearer replacement for `git checkout` (for branch switching only).

## Syntax

```bash
git switch [options] <branch-name>
```

## Examples

```bash
# Switch to an existing branch
git switch main

# Create a new branch and switch to it
git switch -c feature-login

# Switch back to the previous branch
git switch -

# Create a branch from a specific commit
git switch -c hotfix a1b2c3d

# Force switch (discard local changes)
git switch -f main
```

## Common Flags

| Flag | What It Does |
|---|---|
| `-c` | Create a new branch and switch to it |
| `-` | Switch to the previous branch |
| `-f` | Force switch (discard uncommitted changes) |
| `--detach` | Switch to a commit without creating a branch |

## Key Points

- Introduced in Git 2.23 as a clearer alternative to `git checkout`
- Only handles branch switching — for restoring files, use `git restore`
- `git switch -c name` is the same as `git checkout -b name`
- `git switch -` is like "go back" — very handy
- You need to commit or stash changes before switching (unless you use `-f`)
