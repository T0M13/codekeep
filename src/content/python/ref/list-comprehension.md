# List Comprehension

A compact, one-line way to create lists. Combines a loop and optional condition into a single expression.

## Syntax

```python
[expression for item in iterable]
[expression for item in iterable if condition]
```

## Examples

```python
# Basic - transform each item
squares = [x**2 for x in range(6)]
# [0, 1, 4, 9, 16, 25]

# With condition - filter items
evens = [x for x in range(10) if x % 2 == 0]
# [0, 2, 4, 6, 8]

# Transform strings
names = ["alice", "bob", "charlie"]
upper = [name.upper() for name in names]
# ["ALICE", "BOB", "CHARLIE"]

# Filter and transform
words = ["hello", "", "world", "", "python"]
non_empty = [w.title() for w in words if w]
# ["Hello", "World", "Python"]

# With if/else (note: no 'if' after 'for')
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
# ["even", "odd", "even", "odd", "even"]

# Flatten nested lists
matrix = [[1, 2], [3, 4], [5, 6]]
flat = [num for row in matrix for num in row]
# [1, 2, 3, 4, 5, 6]

# Dict comprehension
squares = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Set comprehension
unique_lengths = {len(word) for word in ["hi", "hello", "hey"]}
# {2, 3, 5}

# Equivalent for-loop
# squares = []
# for x in range(6):
#     squares.append(x**2)
```

## Key Points

- Read it as: "give me `expression` `for each item` `if condition`"
- More readable and faster than the equivalent `for` loop + `append`
- Don't overdo it - if it's hard to read, use a regular loop
- Works for dicts too: `{k: v for k, v in items}`
- Works for sets too: `{expression for item in iterable}`
- `if` after `for` = filter. `if/else` before `for` = transform.
