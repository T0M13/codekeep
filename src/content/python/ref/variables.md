# Variables

Named containers that store values. You create a variable by assigning a value to a name.

## Syntax

```python
variable_name = value
```

## Examples

```python
# Creating variables
name = "Alice"
age = 30
price = 9.99
is_active = True

# Updating variables
age = 31
age += 1       # age is now 32

# Multiple assignment
x, y, z = 1, 2, 3
a = b = c = 0

# Swapping
x, y = y, x

# Constants (convention: ALL_CAPS)
MAX_SPEED = 120
PI = 3.14159
```

## Naming Rules

| Rule | Valid | Invalid |
|------|-------|---------|
| Start with letter or `_` | `name`, `_count` | `2name` |
| Letters, numbers, underscores | `player_1` | `my-var` |
| Case-sensitive | `Name` != `name` | |
| No Python keywords | `my_class` | `class`, `if` |

## Key Points

- Python uses `snake_case` by convention: `first_name`, `total_score`
- Variables are created on first assignment - no declaration needed
- Type is determined automatically from the value
- Use ALL_CAPS for constants: `MAX_SIZE = 100`
- Variable names should be descriptive: `user_age` beats `x`
