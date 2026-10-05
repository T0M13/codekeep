# touch

Creates an empty file or updates the timestamp of an existing file.

## Syntax

```bash
touch filename
```

## Examples

```bash
# Create a new empty file
touch index.html

# Create multiple files at once
touch index.html style.css app.js

# Update the timestamp of an existing file (without changing contents)
touch existing-file.txt

# Create a file in a specific directory
touch src/components/Header.js
```

## Key Points

- If the file doesn't exist, `touch` creates an empty one
- If the file already exists, `touch` updates its "last modified" time without changing contents
- Does not add any content — the file is 0 bytes
- On Windows Command Prompt, use `echo. > filename` to create an empty file
- PowerShell uses `New-Item filename` or `ni filename`
- The parent directory must exist (use `mkdir -p` first if needed)
