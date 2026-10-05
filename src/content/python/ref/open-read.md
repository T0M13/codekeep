# Reading Files

Open and read data from files on your computer.

## Syntax

```python
with open(filename, "r") as file:
    content = file.read()
```

## Read Methods

| Method | What It Does | Returns |
|--------|-------------|---------|
| `.read()` | Read entire file | One big string |
| `.readline()` | Read one line | String (with `\n`) |
| `.readlines()` | Read all lines | List of strings |

## Examples

```python
# Read entire file
with open("data.txt", "r") as file:
    content = file.read()
    print(content)

# Read line by line (memory efficient)
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())    # strip() removes \n

# Read all lines into a list
with open("data.txt", "r") as file:
    lines = file.readlines()
    print(lines)    # ["line1\n", "line2\n", ...]

# Read first N lines
with open("data.txt", "r") as file:
    first_line = file.readline()
    second_line = file.readline()

# Read with encoding
with open("data.txt", "r", encoding="utf-8") as file:
    content = file.read()

# Check if file exists before reading
import os
if os.path.exists("data.txt"):
    with open("data.txt", "r") as file:
        print(file.read())

# Handle missing file
try:
    with open("missing.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File not found!")
```

## Key Points

- Always use `with` - it automatically closes the file
- `"r"` mode is the default, so `open("file.txt")` also works
- Loop over the file object directly for memory-efficient line-by-line reading
- Use `encoding="utf-8"` for files with special characters
- `strip()` removes the trailing newline from each line
