# Data Types

Every value in Python has a type that determines what you can do with it.

## The Main Types

| Type | Name | Example | Description |
|------|------|---------|-------------|
| `int` | Integer | `42`, `-7`, `0` | Whole numbers |
| `float` | Float | `3.14`, `-0.5` | Decimal numbers |
| `str` | String | `"hello"`, `'hi'` | Text |
| `bool` | Boolean | `True`, `False` | Yes/No values |
| `NoneType` | None | `None` | No value / empty |
| `list` | List | `[1, 2, 3]` | Ordered, changeable collection |
| `tuple` | Tuple | `(1, 2, 3)` | Ordered, unchangeable collection |
| `dict` | Dictionary | `{"a": 1}` | Key-value pairs |
| `set` | Set | `{1, 2, 3}` | Unordered, unique items |

## Examples

```python
# Check the type of any value
print(type(42))          # <class 'int'>
print(type(3.14))        # <class 'float'>
print(type("hello"))     # <class 'str'>
print(type(True))        # <class 'bool'>
print(type(None))        # <class 'NoneType'>
print(type([1, 2]))      # <class 'list'>

# Type checking
x = 42
print(isinstance(x, int))       # True
print(isinstance(x, (int, float)))  # True (check multiple types)
```

## Key Points

- Python figures out the type automatically - you don't declare it
- Use `type()` to check what type something is
- Use `isinstance()` for type checking in conditions
- Booleans are actually a subtype of integers (`True` is `1`, `False` is `0`)
- `None` is Python's way of saying "no value" or "nothing here"
