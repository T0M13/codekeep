# mv

Moves files and directories. Also used to rename them.

## Syntax

```bash
mv [options] source destination
```

## Examples

```bash
# Rename a file
mv old-name.txt new-name.txt

# Move a file into a folder
mv report.txt documents/

# Move multiple files into a folder
mv file1.txt file2.txt archive/

# Rename a folder
mv old-project new-project

# Move and rename at the same time
mv src/old.js lib/new.js

# Ask before overwriting
mv -i file.txt existing-file.txt
```

## Common Flags

| Flag | What It Does |
|---|---|
| `-i` | Interactive — ask before overwriting |
| `-v` | Verbose — show what's being moved |
| `-n` | Don't overwrite existing files |
| `-f` | Force — overwrite without asking |

## Key Points

- `mv` does double duty: moving AND renaming
- If the destination is a directory, the file is moved into it
- If the destination is a filename, the file is renamed
- Unlike `cp`, `mv` doesn't need `-r` for directories
- Git recognizes renames: `git mv` does the same thing plus stages the change
