# mkdir

Creates a new directory (folder).

## Syntax

```bash
mkdir [options] directory_name
```

## Examples

```bash
# Create a single folder
mkdir my-project

# Create multiple folders at once
mkdir src tests docs

# Create nested folders (parent directories too)
mkdir -p src/components/ui

# Create a folder with spaces in the name
mkdir "my cool project"
```

## Common Flags

| Flag | What It Does |
|---|---|
| `-p` | Create parent directories if they don't exist |
| `-v` | Verbose — print a message for each created directory |

## Key Points

- Without `-p`, the parent folders must already exist
- `mkdir -p a/b/c` creates `a`, `a/b`, and `a/b/c` all at once
- Use hyphens instead of spaces for folder names: `my-project` not `my project`
- Fails silently if the directory already exists (use `-p` to avoid errors)
