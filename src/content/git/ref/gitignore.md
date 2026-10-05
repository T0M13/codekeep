# .gitignore

A special file that tells Git which files and folders to ignore. Ignored files won't show up in `git status` and won't be committed.

## Syntax

Create a file called `.gitignore` in your repo root:

```bash
touch .gitignore
```

## Examples

```gitignore
# Ignore a specific file
secrets.env

# Ignore a folder
node_modules/
dist/
build/

# Ignore all files with an extension
*.log
*.tmp

# Ignore OS-generated files
.DS_Store
Thumbs.db

# Ignore editor folders
.vscode/
.idea/

# But DON'T ignore this specific file (exception)
!important.log
```

## Pattern Reference

| Pattern | What It Matches |
|---|---|
| `file.txt` | A specific file |
| `*.log` | All `.log` files |
| `folder/` | An entire folder |
| `**/debug` | `debug` in any directory |
| `!file.txt` | Exception — do NOT ignore this |
| `*.py[cod]` | `.pyc`, `.pyo`, `.pyd` files |

## Common .gitignore Templates

```gitignore
# Node.js
node_modules/
.env
dist/

# Python
__pycache__/
*.pyc
venv/

# General
*.log
.DS_Store
Thumbs.db
.env
```

## Key Points

- `.gitignore` must be committed to the repo (it's not ignored itself)
- Only works on untracked files — if a file is already tracked, ignoring it has no effect
- To stop tracking an already-tracked file: `git rm --cached file.txt`
- GitHub has a collection of `.gitignore` templates at github.com/github/gitignore
- You can have `.gitignore` files in subdirectories too — they apply to that directory
- Lines starting with `#` are comments
