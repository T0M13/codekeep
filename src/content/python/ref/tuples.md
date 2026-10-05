# Tuples

Ordered, immutable (unchangeable) collections. Like lists, but you can't modify them after creation.

## Syntax

```python
my_tuple = (item1, item2, item3)
single = (42,)     # Note the comma - without it, it's just a number in parentheses
```

## Examples

```python
# Creating tuples
coordinates = (10, 20)
rgb = (255, 128, 0)
person = ("Alice", 30, "Vienna")

# Access items (same as lists)
print(person[0])      # Alice
print(person[-1])     # Vienna

# Slicing works too
print(person[0:2])    # ("Alice", 30)

# Unpacking
name, age, city = person
print(name)           # Alice

x, y = coordinates
print(x, y)           # 10 20

# Swap variables
a, b = 1, 2
a, b = b, a           # a=2, b=1

# Tuples in functions (return multiple values)
def get_dimensions():
    return 1920, 1080

width, height = get_dimensions()

# Tuple methods
numbers = (1, 2, 3, 2, 1)
print(numbers.count(2))    # 2
print(numbers.index(3))    # 2

# Convert between list and tuple
my_list = list((1, 2, 3))      # tuple -> list
my_tuple = tuple([1, 2, 3])    # list -> tuple
```

## Lists vs Tuples

| Feature | List | Tuple |
|---------|------|-------|
| Syntax | `[1, 2, 3]` | `(1, 2, 3)` |
| Mutable? | Yes | No |
| Use case | Data that changes | Fixed records |
| Speed | Slightly slower | Slightly faster |
| As dict key? | No | Yes |

## Key Points

- Tuples can't be changed: no `append`, `remove`, `sort`, or item assignment
- A single-item tuple needs a trailing comma: `(42,)` not `(42)`
- Tuples can be used as dictionary keys (lists cannot)
- Returning multiple values from a function creates a tuple
- Use tuples for data that shouldn't change (coordinates, RGB colors, database rows)
