# git add

Stages changes for the next commit. Tells Git "include these changes in my next save."

## Syntax

```bash
git add <file(s)>
```

## Examples

```bash
# Stage a single file
git add index.html

# Stage multiple files
git add index.html style.css app.js

# Stage everything in the current directory
git add .

# Stage all changes everywhere in the repo
git add -A

# Stage all files matching a pattern
git add *.css

# Stage all files in a folder
git add src/

# Interactively choose parts of files to stage
git add -p
```

## Common Flags

| Flag | What It Does |
|---|---|
| `.` | Stage everything in current directory and below |
| `-A` | Stage all changes in the entire repo |
| `-p` | Patch mode — stage parts of files interactively |
| `-u` | Stage only modified and deleted files (not new ones) |

## Key Points

- `git add` does NOT save changes — it prepares them for `git commit`
- Think of it as putting items on the checkout counter
- `git add .` is the most common usage
- You can stage files multiple times before committing
- Use `git restore --staged file` to unstage
- New files must be added before Git will track them
