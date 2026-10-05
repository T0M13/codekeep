# zip()

Combines multiple iterables element-by-element, like a zipper. Pairs up the first items, then the second items, and so on.

## Syntax

```python
zip(iterable1, iterable2, ...)
```

## Examples

```python
# Pair two lists
names = ["Alice", "Bob", "Charlie"]
ages = [30, 25, 35]

for name, age in zip(names, ages):
    print(f"{name} is {age}")
# Alice is 30
# Bob is 25
# Charlie is 35

# Create a dictionary from two lists
keys = ["name", "age", "city"]
values = ["Alice", 30, "Vienna"]
person = dict(zip(keys, values))
print(person)    # {"name": "Alice", "age": 30, "city": "Vienna"}

# Three or more iterables
first = ["Alice", "Bob"]
last = ["Smith", "Jones"]
ages = [30, 25]

for f, l, a in zip(first, last, ages):
    print(f"{f} {l}, age {a}")

# Unequal lengths - stops at the shortest
short = [1, 2]
long = [10, 20, 30, 40]
print(list(zip(short, long)))    # [(1, 10), (2, 20)]

# Unzip (reverse a zip)
pairs = [("Alice", 30), ("Bob", 25), ("Charlie", 35)]
names, ages = zip(*pairs)
print(names)    # ("Alice", "Bob", "Charlie")
print(ages)     # (30, 25, 35)

# Parallel iteration with enumerate
names = ["Alice", "Bob", "Charlie"]
scores = [85, 92, 78]

for i, (name, score) in enumerate(zip(names, scores), 1):
    print(f"{i}. {name}: {score}")
```

## Key Points

- `zip()` stops at the **shortest** iterable
- Returns an iterator (wrap in `list()` to see all pairs)
- Great for creating dicts from two lists: `dict(zip(keys, values))`
- `zip(*pairs)` unzips (transposes) a list of tuples
- You can zip any number of iterables together
