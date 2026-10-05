# cp

Copies files and directories.

## Syntax

```bash
cp [options] source destination
```

## Examples

```bash
# Copy a file
cp original.txt backup.txt

# Copy a file into a folder
cp report.txt documents/

# Copy multiple files into a folder
cp file1.txt file2.txt documents/

# Copy an entire folder (recursive)
cp -r my-project my-project-backup

# Copy and preserve permissions/timestamps
cp -p important.conf important.conf.bak

# Copy with verbose output
cp -v file.txt backup/
```

## Common Flags

| Flag | What It Does |
|---|---|
| `-r` | Recursive — required for copying directories |
| `-i` | Interactive — ask before overwriting |
| `-v` | Verbose — show what's being copied |
| `-p` | Preserve file attributes (timestamps, permissions) |
| `-n` | Don't overwrite existing files |

## Key Points

- Without `-r`, you can only copy files, not folders
- If the destination is a directory, the file is copied into it
- If the destination is a filename, the file is copied and renamed
- Overwrites existing files without warning unless you use `-i`
