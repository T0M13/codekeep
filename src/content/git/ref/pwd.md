# pwd

Prints the full path of the current working directory. Shows you exactly where you are.

## Syntax

```bash
pwd
```

## Examples

```bash
# Where am I?
pwd
# Output: /home/alex/projects/my-website

# Use it to confirm you're in the right place before running commands
pwd
cd ..
pwd
# Output: /home/alex/projects
```

## Key Points

- No flags or arguments needed — just type `pwd`
- Always shows the absolute (full) path
- Useful before running destructive commands like `rm -r`
- On Windows Command Prompt, use `cd` (with no arguments) to see current directory
