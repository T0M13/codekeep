---
title: Reading & Writing Files
---

# Reading & Writing Files

Programs often need to save data or read data from files. Whether it's a config file, a log, or saved game data, file handling is an essential skill.

## Opening Files

Use the `open()` function to work with files. The second argument is the **mode**:

| Mode | Meaning | Creates file? |
|------|---------|---------------|
| `"r"` | Read (default) | No - file must exist |
| `"w"` | Write (overwrites everything) | Yes |
| `"a"` | Append (adds to the end) | Yes |
| `"r+"` | Read and write | No - file must exist |

## The `with` Statement (Best Practice)

Always use `with` when working with files. It automatically closes the file when you're done, even if an error occurs:

```python
with open("hello.txt", "w") as file:
    file.write("Hello, World!")
# File is automatically closed here
```

Without `with`, you'd have to remember to close it manually:

```python
# Don't do this - use 'with' instead
file = open("hello.txt", "w")
file.write("Hello, World!")
file.close()    # Easy to forget!
```

## Writing Files

### Write Mode (`"w"`) - Overwrites Everything

```python
with open("diary.txt", "w") as file:
    file.write("Dear Diary,\n")
    file.write("Today was a good day.\n")
    file.write("I learned Python!\n")
```

> **Warning:** `"w"` mode erases the file's contents before writing. If the file existed before, everything in it is gone.

### Append Mode (`"a"`) - Adds to the End

```python
with open("log.txt", "a") as file:
    file.write("2025-01-15: Server started\n")
    file.write("2025-01-15: User logged in\n")
```

Append mode adds new content at the end without erasing what's already there.

### Writing Multiple Lines

```python
lines = [
    "Line 1: Hello\n",
    "Line 2: World\n",
    "Line 3: Python\n"
]

with open("output.txt", "w") as file:
    file.writelines(lines)
```

## Reading Files

### Read the Entire File

```python
with open("diary.txt", "r") as file:
    content = file.read()
    print(content)
```

### Read Line by Line

```python
# Read all lines into a list
with open("diary.txt", "r") as file:
    lines = file.readlines()
    for line in lines:
        print(line.strip())    # strip() removes the \n at the end

# Better: loop directly (memory efficient for large files)
with open("diary.txt", "r") as file:
    for line in file:
        print(line.strip())
```

### Read a Single Line

```python
with open("diary.txt", "r") as file:
    first_line = file.readline()
    second_line = file.readline()
    print(first_line.strip())
    print(second_line.strip())
```

## Practical Examples

### Save and Load Settings

```python
# Save settings
settings = {
    "username": "Alice",
    "theme": "dark",
    "font_size": 14
}

with open("settings.txt", "w") as file:
    for key, value in settings.items():
        file.write(f"{key}={value}\n")

# Load settings
loaded_settings = {}
with open("settings.txt", "r") as file:
    for line in file:
        line = line.strip()
        if "=" in line:
            key, value = line.split("=", 1)
            loaded_settings[key] = value

print(loaded_settings)
# {"username": "Alice", "theme": "dark", "font_size": "14"}
```

### Simple CSV Reader

```python
# Write a CSV file
with open("students.csv", "w") as file:
    file.write("Name,Age,Grade\n")
    file.write("Alice,20,A\n")
    file.write("Bob,22,B\n")
    file.write("Charlie,21,A\n")

# Read and parse it
students = []
with open("students.csv", "r") as file:
    headers = file.readline().strip().split(",")
    for line in file:
        values = line.strip().split(",")
        student = dict(zip(headers, values))
        students.append(student)

for s in students:
    print(f"{s['Name']} is {s['Age']} years old with grade {s['Grade']}")
```

### Log File

```python
from datetime import datetime

def log(message):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open("app.log", "a") as file:
        file.write(f"[{timestamp}] {message}\n")

log("Application started")
log("User logged in")
log("Data saved successfully")
```

## Working with JSON Files

JSON is the most common format for structured data. Python has a built-in `json` module:

```python
import json

# Save data as JSON
user = {
    "name": "Alice",
    "age": 30,
    "hobbies": ["reading", "coding", "hiking"],
    "address": {
        "city": "Vienna",
        "country": "Austria"
    }
}

with open("user.json", "w") as file:
    json.dump(user, file, indent=2)    # indent makes it pretty

# Load data from JSON
with open("user.json", "r") as file:
    loaded_user = json.load(file)

print(loaded_user["name"])              # Alice
print(loaded_user["hobbies"][0])        # reading
print(loaded_user["address"]["city"])   # Vienna
```

## Checking if a File Exists

```python
import os

if os.path.exists("data.txt"):
    print("File exists!")
    with open("data.txt", "r") as file:
        print(file.read())
else:
    print("File not found")

# Check if it's a file (not a directory)
print(os.path.isfile("data.txt"))

# Get file size
print(os.path.getsize("data.txt"))    # Size in bytes
```

## File Paths

```python
import os

# Join paths safely (works on any OS)
path = os.path.join("documents", "reports", "2025", "january.txt")
print(path)    # documents/reports/2025/january.txt (on Linux/Mac)

# Get parts of a path
print(os.path.basename("/home/user/file.txt"))    # file.txt
print(os.path.dirname("/home/user/file.txt"))     # /home/user
print(os.path.splitext("report.pdf"))             # ('report', '.pdf')

# Current working directory
print(os.getcwd())

# List files in a directory
for filename in os.listdir("."):
    print(filename)
```

## Handling Errors

Files can fail to open (missing, no permission, etc.). Use `try`/`except`:

```python
try:
    with open("missing_file.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("Sorry, that file doesn't exist!")
except PermissionError:
    print("You don't have permission to read that file!")
```

## Character Encoding

If your file has special characters (accents, emojis, non-English text), specify the encoding:

```python
# Write with UTF-8 encoding
with open("greetings.txt", "w", encoding="utf-8") as file:
    file.write("Hello! Hallo! Szia! Bonjour!\n")

# Read with UTF-8 encoding
with open("greetings.txt", "r", encoding="utf-8") as file:
    print(file.read())
```

> **Tip:** Always use `encoding="utf-8"` unless you have a specific reason not to. It handles virtually every character in every language.

> **Key takeaway:** Always use `with open(...) as file:` for safe file handling. Use `"r"` to read, `"w"` to write (overwrites!), and `"a"` to append. For structured data, use JSON. And always handle the possibility that a file might not exist.
