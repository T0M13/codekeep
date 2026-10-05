# cat

Displays the contents of a file in the terminal. Short for "concatenate."

## Syntax

```bash
cat [options] file
```

## Examples

```bash
# Show contents of a file
cat readme.txt

# Show contents with line numbers
cat -n script.js

# Show multiple files at once
cat header.html body.html footer.html

# Combine files into a new file
cat part1.txt part2.txt > combined.txt

# Append to an existing file
cat extra.txt >> combined.txt
```

## Common Flags

| Flag | What It Does |
|---|---|
| `-n` | Number all lines |
| `-b` | Number only non-empty lines |
| `-s` | Squeeze multiple blank lines into one |

## Key Points

- Best for small files — long files will flood your terminal
- Use `head` or `tail` for large files (first/last lines only)
- Use `less` to scroll through large files page by page
- `>` creates/overwrites a file, `>>` appends to it
- On Windows, use `type` instead of `cat` in Command Prompt
