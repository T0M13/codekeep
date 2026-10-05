# Dictionaries

Unordered collections of key-value pairs. Look up values by their key, like a real dictionary.

## Syntax

```python
my_dict = {"key1": value1, "key2": value2}
```

## Common Operations

| Operation | Example | Description |
|-----------|---------|-------------|
| Access | `d["key"]` | Get value (crashes if missing) |
| Safe access | `d.get("key", default)` | Get value or default |
| Set | `d["key"] = value` | Add or update |
| Delete | `del d["key"]` | Remove a key |
| Pop | `d.pop("key")` | Remove and return value |
| Keys | `d.keys()` | All keys |
| Values | `d.values()` | All values |
| Items | `d.items()` | All key-value pairs |
| Check | `"key" in d` | True if key exists |
| Merge | `d.update(other)` | Add/overwrite from other dict |
| Length | `len(d)` | Number of key-value pairs |

## Examples

```python
person = {"name": "Alice", "age": 30}

# Access
print(person["name"])              # Alice
print(person.get("phone", "N/A")) # N/A

# Modify
person["age"] = 31                 # Update
person["city"] = "Vienna"          # Add new

# Loop
for key, value in person.items():
    print(f"{key}: {value}")

# Dict comprehension
squares = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Nested dicts
users = {
    "alice": {"age": 30, "city": "Vienna"},
    "bob": {"age": 25, "city": "Berlin"}
}
print(users["alice"]["city"])    # Vienna
```

## Key Points

- Keys must be immutable (strings, numbers, tuples) and unique
- Values can be anything, including other dicts and lists
- Use `.get()` to avoid crashes when a key might not exist
- Dicts preserve insertion order (Python 3.7+)
- Dict comprehensions: `{k: v for k, v in items}`
