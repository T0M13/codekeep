# print()

Displays output to the screen. The most basic way to see what your code is doing.

## Syntax

```python
print(value1, value2, ..., sep=' ', end='\n')
```

## Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `value` | What to display | required |
| `sep` | Separator between values | `' '` (space) |
| `end` | What to add at the end | `'\n'` (new line) |

## Examples

```python
# Basic usage
print("Hello, World!")

# Multiple values
print("Name:", "Alice", "Age:", 30)
# Output: Name: Alice Age: 30

# Custom separator
print("2025", "01", "15", sep="-")
# Output: 2025-01-15

# Custom ending (no newline)
print("Loading", end="...")
print("Done!")
# Output: Loading...Done!

# Print an empty line
print()
```

## Key Points

- You can print any data type - strings, numbers, lists, dicts
- Use f-strings for cleaner formatting: `print(f"Hello {name}")`
- `print()` with no arguments prints an empty line
- Multiple values are separated by spaces by default
