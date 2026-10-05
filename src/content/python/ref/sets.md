# Sets

Unordered collections of **unique** items. Automatically removes duplicates. Great for membership testing and set operations.

## Syntax

```python
my_set = {item1, item2, item3}
empty_set = set()    # NOT {} (that's an empty dict)
```

## Common Operations

| Operation | Example | Description |
|-----------|---------|-------------|
| Add | `s.add(item)` | Add one item |
| Remove | `s.remove(item)` | Remove (error if missing) |
| Discard | `s.discard(item)` | Remove (no error if missing) |
| Pop | `s.pop()` | Remove and return arbitrary item |
| Union | `a \| b` | Items in either set |
| Intersection | `a & b` | Items in both sets |
| Difference | `a - b` | Items in a but not b |
| Symmetric diff | `a ^ b` | Items in one but not both |

## Examples

```python
# Remove duplicates
names = ["Alice", "Bob", "Alice", "Charlie", "Bob"]
unique = set(names)       # {"Alice", "Bob", "Charlie"}
unique_list = list(unique)

# Membership testing (very fast)
valid = {"admin", "editor", "viewer"}
role = "admin"
if role in valid:
    print("Valid role!")

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)     # {1, 2, 3, 4, 5, 6} (union)
print(a & b)     # {3, 4} (intersection)
print(a - b)     # {1, 2} (difference)
print(a ^ b)     # {1, 2, 5, 6} (symmetric difference)

# Subset / superset
print({1, 2} <= {1, 2, 3})    # True (subset)
print({1, 2, 3} >= {1, 2})    # True (superset)

# Set comprehension
evens = {x for x in range(20) if x % 2 == 0}
```

## Key Points

- Sets are **unordered** - no indexing, no slicing
- Items must be **immutable** (strings, numbers, tuples - not lists or dicts)
- `in` checks are much faster with sets than with lists
- Use `set()` for an empty set, not `{}` (which creates an empty dict)
- Sets are perfect for removing duplicates and comparing groups
