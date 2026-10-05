# grep

Searches for text patterns inside files. Like Ctrl+F for the terminal.

## Syntax

```bash
grep [options] "pattern" file
```

## Examples

```bash
# Search for a word in a file
grep "error" log.txt

# Case-insensitive search
grep -i "error" log.txt

# Search recursively in all files in a directory
grep -r "TODO" src/

# Show line numbers
grep -n "function" app.js

# Show only filenames that contain the match
grep -l "import" src/*.js

# Count the number of matches
grep -c "error" log.txt

# Search for an exact word (not partial matches)
grep -w "main" script.py

# Invert: show lines that DON'T match
grep -v "debug" log.txt
```

## Common Flags

| Flag | What It Does |
|---|---|
| `-i` | Case-insensitive |
| `-r` | Recursive (search subdirectories) |
| `-n` | Show line numbers |
| `-l` | Show only filenames |
| `-c` | Count matches |
| `-w` | Match whole words only |
| `-v` | Invert (show non-matching lines) |

## Key Points

- Extremely useful for finding where something is used in a project
- Combine with pipes: `cat log.txt | grep "error"`
- Supports regex patterns: `grep "^import" file.js` (lines starting with "import")
- `grep -r "TODO" .` searches everything in the current folder — great for finding TODOs
- On Windows, use `findstr` in Command Prompt or `Select-String` in PowerShell
