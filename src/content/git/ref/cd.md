# cd

Changes the current directory. Think of it as "go to this folder."

## Syntax

```bash
cd [directory]
```

## Examples

```bash
# Go to home folder
cd ~

# Go into a folder
cd projects

# Go up one level
cd ..

# Go up two levels
cd ../..

# Go to a specific path
cd /home/user/documents

# Go back to the previous directory
cd -
```

## Key Points

- `cd` alone goes to your home directory
- `cd ..` goes up one level
- `cd -` goes back to the previous directory
- Tab completion works: type part of the name and press Tab
- Use quotes for folder names with spaces: `cd "my project"`
- Works the same on Windows, Mac, and Linux
