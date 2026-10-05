# ls

Lists the files and folders in the current directory.

## Syntax

```bash
ls [options] [directory]
```

## Examples

```bash
# List files in current directory
ls

# Detailed list with sizes and dates
ls -l

# Show hidden files too
ls -a

# Combine: detailed + hidden
ls -la

# List a specific folder
ls /home/user/projects

# Sort by modification time (newest first)
ls -lt

# Human-readable file sizes
ls -lh
```

## Common Flags

| Flag | What It Does |
|---|---|
| `-l` | Long format (permissions, size, date) |
| `-a` | Show hidden files (those starting with `.`) |
| `-h` | Human-readable sizes (KB, MB, GB) |
| `-t` | Sort by time (newest first) |
| `-r` | Reverse the sort order |
| `-R` | List subdirectories recursively |

## Key Points

- Hidden files start with a dot (`.gitignore`, `.env`)
- On Windows Command Prompt, use `dir` instead
- PowerShell supports both `ls` and `dir`
- `ls -la` is the most commonly used combo
