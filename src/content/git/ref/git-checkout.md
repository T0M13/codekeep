# git checkout

Switches branches or restores files. This is the older, multi-purpose command — newer versions of Git split its duties into `git switch` and `git restore`.

## Syntax

```bash
git checkout [options] <branch-or-file>
```

## Examples

```bash
# Switch to an existing branch
git checkout main

# Create a new branch and switch to it
git checkout -b feature-navbar

# Discard changes to a file (restore to last commit)
git checkout -- index.html

# Check out a specific commit (detached HEAD)
git checkout a1b2c3d

# Check out a file from another branch
git checkout main -- config.js
```

## Common Flags

| Flag | What It Does |
|---|---|
| `-b` | Create a new branch and switch to it |
| `--` | Separates branch names from file paths |

## Key Points

- `git checkout` does two very different things: switch branches AND restore files
- For switching branches, prefer `git switch` (clearer intent)
- For restoring files, prefer `git restore` (clearer intent)
- `git checkout -b name` = `git switch -c name`
- `git checkout -- file` = `git restore file`
- Still widely used and works perfectly — you'll see it everywhere in tutorials
