# with Statement

A clean way to work with resources (files, connections, etc.) that need to be properly closed when done. Guarantees cleanup even if an error occurs.

## Syntax

```python
with expression as variable:
    # use variable
# resource is automatically cleaned up here
```

## Examples

```python
# File handling (most common use)
with open("data.txt", "r") as file:
    content = file.read()
    print(content)
# File is automatically closed here, even if an error occurred

# Without 'with' (don't do this)
file = open("data.txt", "r")
try:
    content = file.read()
finally:
    file.close()    # Must remember to close!

# Multiple files at once
with open("input.txt", "r") as infile, open("output.txt", "w") as outfile:
    for line in infile:
        outfile.write(line.upper())

# Nested with (also valid)
with open("file1.txt", "r") as f1:
    with open("file2.txt", "w") as f2:
        f2.write(f1.read())

# Read, process, write pattern
with open("names.txt", "r") as file:
    names = [line.strip() for line in file]

with open("sorted_names.txt", "w") as file:
    for name in sorted(names):
        file.write(name + "\n")
```

## Key Points

- `with` automatically calls `.close()` when the block ends
- Works even if an exception (error) is raised inside the block
- Primarily used for file handling, but also works with database connections, locks, etc.
- Always prefer `with open(...)` over manual `open()` + `close()`
- You can open multiple resources in one `with` statement using commas
