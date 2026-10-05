# rm

Removes (deletes) files and directories. **Does not move to trash — deletion is permanent.**

## Syntax

```bash
rm [options] file
```

## Examples

```bash
# Delete a single file
rm old-file.txt

# Delete multiple files
rm file1.txt file2.txt file3.txt

# Delete a folder and everything inside it
rm -r old-project/

# Force delete without confirmation
rm -rf node_modules/

# Ask for confirmation before each deletion
rm -i important-file.txt
```

## Common Flags

| Flag | What It Does |
|---|---|
| `-r` | Recursive — delete directories and their contents |
| `-f` | Force — don't ask for confirmation |
| `-i` | Interactive — ask before each file |
| `-v` | Verbose — show what's being deleted |

## Key Points

- `rm` does NOT use the trash — files are gone forever
- `rm -r` is required for directories (plain `rm` only works on files)
- `rm -rf /` would delete everything on your system — never run this
- Use `rmdir` to delete only empty directories (safer)
- Always double-check the path before running `rm -r`
