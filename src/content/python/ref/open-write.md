# Writing Files

Create or modify files with Python.

## Syntax

```python
with open(filename, mode) as file:
    file.write(text)
```

## Write Modes

| Mode | What It Does | Creates File? |
|------|-------------|---------------|
| `"w"` | Write (overwrites everything) | Yes |
| `"a"` | Append (adds to end) | Yes |
| `"x"` | Create (fails if exists) | Yes |
| `"r+"` | Read + Write | No |

## Examples

```python
# Write (creates or overwrites)
with open("output.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("Second line\n")

# Append (adds to end)
with open("log.txt", "a") as file:
    file.write("New log entry\n")

# Write multiple lines at once
lines = ["Line 1\n", "Line 2\n", "Line 3\n"]
with open("output.txt", "w") as file:
    file.writelines(lines)

# Write with encoding
with open("output.txt", "w", encoding="utf-8") as file:
    file.write("Special chars: Szia!\n")

# Write JSON
import json
data = {"name": "Alice", "age": 30}
with open("data.json", "w") as file:
    json.dump(data, file, indent=2)

# Safe write (don't overwrite existing)
try:
    with open("important.txt", "x") as file:
        file.write("This only works if file doesn't exist")
except FileExistsError:
    print("File already exists!")
```

## Key Points

- `"w"` mode **erases the file first** - be careful with existing files
- `"a"` mode is safe - it only adds to the end
- `write()` doesn't add newlines automatically - include `\n` yourself
- `writelines()` takes a list of strings (also no auto-newlines)
- Always use `with` for automatic file closing
- Use `encoding="utf-8"` for files with non-ASCII characters
