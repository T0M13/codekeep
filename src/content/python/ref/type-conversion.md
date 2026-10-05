# Type Conversion

Converting values from one type to another. Essential when mixing types (like adding a number to user input).

## Conversion Functions

| Function | Converts to | Example | Result |
|----------|------------|---------|--------|
| `int()` | Integer | `int("42")` | `42` |
| `float()` | Float | `float("3.14")` | `3.14` |
| `str()` | String | `str(42)` | `"42"` |
| `bool()` | Boolean | `bool(1)` | `True` |
| `list()` | List | `list("abc")` | `["a","b","c"]` |
| `tuple()` | Tuple | `tuple([1,2])` | `(1, 2)` |
| `set()` | Set | `set([1,1,2])` | `{1, 2}` |

## Examples

```python
# String to number (most common)
age = int(input("Age: "))       # "25" -> 25
price = float(input("Price: ")) # "9.99" -> 9.99

# Number to string
score = 100
message = "Score: " + str(score)

# Float to int (truncates, doesn't round)
print(int(9.9))      # 9
print(int(-3.7))     # -3

# Int to float
print(float(5))      # 5.0

# Boolean conversions
print(bool(0))       # False
print(bool(42))      # True
print(bool(""))      # False
print(bool("hello")) # True
print(bool([]))      # False
print(bool([1]))     # True

# String to list of characters
print(list("hello"))   # ['h', 'e', 'l', 'l', 'o']

# Number in different bases
print(int("FF", 16))    # 255 (hexadecimal)
print(int("1010", 2))   # 10 (binary)
```

## Key Points

- `int("hello")` crashes - the string must look like a number
- `int()` truncates (chops off decimals), it does not round
- Use `try`/`except` to safely handle bad conversions
- Empty and zero values are falsy: `bool(0)`, `bool("")`, `bool([])` are all `False`
- `int()` accepts a second argument for the base: `int("FF", 16)`
