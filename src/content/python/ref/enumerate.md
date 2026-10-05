# enumerate()

Adds a counter to any iterable. Gives you both the index and the value in a loop, without managing a counter variable yourself.

## Syntax

```python
enumerate(iterable, start=0)
```

## Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `iterable` | The sequence to loop over | required |
| `start` | Starting number for the counter | `0` |

## Examples

```python
# Basic usage
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
# 0: apple
# 1: banana
# 2: cherry

# Start counting from 1
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")
# 1. apple
# 2. banana
# 3. cherry

# Without enumerate (ugly)
for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")

# Find index of an item
for i, fruit in enumerate(fruits):
    if fruit == "banana":
        print(f"Found banana at index {i}")
        break

# With list comprehension
indexed = [(i, v) for i, v in enumerate(["a", "b", "c"])]
# [(0, 'a'), (1, 'b'), (2, 'c')]

# Enumerate a string
for i, char in enumerate("Python"):
    print(f"Position {i}: {char}")

# Create a numbered dict
names = ["Alice", "Bob", "Charlie"]
name_map = {i: name for i, name in enumerate(names, 1)}
# {1: 'Alice', 2: 'Bob', 3: 'Charlie'}
```

## Key Points

- Much cleaner than `for i in range(len(list)):`
- Returns tuples of `(index, value)`
- Use `start=1` for human-friendly numbering (1, 2, 3 instead of 0, 1, 2)
- Works with any iterable: lists, strings, tuples, files, etc.
