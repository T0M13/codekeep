---
title: Lists & Tuples
---

# Lists & Tuples

Lists and tuples are collections - they let you store multiple items in a single variable. Think of a list as a shopping list, and a tuple as a read-only record.

## Creating Lists

A list is an ordered collection of items inside square brackets:

```python
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = ["Alice", 30, True, 3.14]    # Different types - no problem
empty = []
```

## Accessing Items

Items have positions (indexes) starting from 0:

```python
colors = ["red", "green", "blue", "yellow"]

print(colors[0])     # red (first)
print(colors[2])     # blue (third)
print(colors[-1])    # yellow (last)
print(colors[-2])    # blue (second from end)
```

## Slicing Lists

Grab a portion of a list with `[start:end]`:

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(numbers[2:5])     # [2, 3, 4]
print(numbers[:3])      # [0, 1, 2] (first 3)
print(numbers[7:])      # [7, 8, 9] (from index 7 on)
print(numbers[::2])     # [0, 2, 4, 6, 8] (every other)
print(numbers[::-1])    # [9, 8, 7, ..., 0] (reversed)
```

## Modifying Lists

Lists are **mutable** - you can change them after creation:

```python
fruits = ["apple", "banana", "cherry"]

# Change an item
fruits[1] = "blueberry"
print(fruits)    # ["apple", "blueberry", "cherry"]

# Add to the end
fruits.append("date")
print(fruits)    # ["apple", "blueberry", "cherry", "date"]

# Insert at a specific position
fruits.insert(1, "avocado")
print(fruits)    # ["apple", "avocado", "blueberry", "cherry", "date"]

# Add multiple items
fruits.extend(["elderberry", "fig"])
```

## Removing Items

```python
fruits = ["apple", "banana", "cherry", "banana", "date"]

# Remove by value (first occurrence only)
fruits.remove("banana")
print(fruits)    # ["apple", "cherry", "banana", "date"]

# Remove by index and get the value back
removed = fruits.pop(1)
print(removed)   # cherry

# Remove last item
last = fruits.pop()
print(last)      # date

# Delete by index (no return value)
del fruits[0]

# Clear everything
fruits.clear()
```

## Common List Operations

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]

print(len(numbers))      # 8 (length)
print(min(numbers))      # 1 (smallest)
print(max(numbers))      # 9 (largest)
print(sum(numbers))      # 31 (total)
print(numbers.count(1))  # 2 (how many 1s)
print(numbers.index(5))  # 4 (position of first 5)
print(5 in numbers)      # True (membership check)
```

## Sorting

```python
numbers = [3, 1, 4, 1, 5, 9]

# Sort in place (changes the original list)
numbers.sort()
print(numbers)           # [1, 1, 3, 4, 5, 9]

numbers.sort(reverse=True)
print(numbers)           # [9, 5, 4, 3, 1, 1]

# Create a new sorted list (original unchanged)
original = [3, 1, 4, 1, 5]
ordered = sorted(original)
print(original)          # [3, 1, 4, 1, 5] (unchanged)
print(ordered)           # [1, 1, 3, 4, 5]

# Sort strings
names = ["Charlie", "Alice", "Bob"]
names.sort()
print(names)             # ["Alice", "Bob", "Charlie"]
```

## Looping Through Lists

```python
colors = ["red", "green", "blue"]

# Simple loop
for color in colors:
    print(color)

# With index
for i, color in enumerate(colors):
    print(f"{i}: {color}")

# Loop with condition
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = []
for num in numbers:
    if num % 2 == 0:
        evens.append(num)
print(evens)    # [2, 4, 6, 8, 10]
```

## List Comprehensions

A compact way to create lists. It's like a loop and a condition in one line:

```python
# The long way
squares = []
for x in range(10):
    squares.append(x ** 2)

# List comprehension (same result, one line)
squares = [x ** 2 for x in range(10)]
print(squares)    # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With a condition
evens = [x for x in range(20) if x % 2 == 0]
print(evens)    # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Transform items
names = ["alice", "bob", "charlie"]
upper_names = [name.upper() for name in names]
print(upper_names)    # ["ALICE", "BOB", "CHARLIE"]
```

> **Read it like English:** "Give me `x squared` `for each x in range(10)` `if x is even`"

## Copying Lists

Be careful when copying lists - assignment doesn't create a copy:

```python
# This does NOT copy - both variables point to the same list
original = [1, 2, 3]
not_a_copy = original
not_a_copy.append(4)
print(original)        # [1, 2, 3, 4] - original changed too!

# Actual copies
copy1 = original.copy()
copy2 = original[:]
copy3 = list(original)
```

## Tuples

A tuple is like a list, but you **can't change it** after creation. Use parentheses `()` instead of brackets `[]`:

```python
coordinates = (10, 20)
rgb_red = (255, 0, 0)
person = ("Alice", 30, "Vienna")

# Access items the same way
print(person[0])     # Alice
print(person[-1])    # Vienna

# But you CAN'T modify them
# person[0] = "Bob"  # Error! Tuples are immutable
```

### When to Use Tuples Instead of Lists

| Use a List when... | Use a Tuple when... |
|--------------------|---------------------|
| Items will change | Data should stay fixed |
| Order might change | Representing a record/row |
| You need to add/remove items | Returning multiple values from a function |
| Shopping list, to-do list | Coordinates, RGB colors, database rows |

### Tuple Unpacking

```python
# Assign tuple values to separate variables
point = (3, 7)
x, y = point
print(f"x={x}, y={y}")    # x=3, y=7

# Works with functions
def get_user():
    return "Alice", 30, "Vienna"

name, age, city = get_user()
print(name)    # Alice

# Swap variables using tuple unpacking
a, b = 1, 2
a, b = b, a    # a=2, b=1
```

## Nested Lists (2D Lists)

Lists can contain other lists - useful for grids, tables, matrices:

```python
# A 3x3 grid
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(grid[0])       # [1, 2, 3] (first row)
print(grid[1][2])    # 6 (second row, third column)

# Loop through a 2D list
for row in grid:
    for item in row:
        print(item, end=" ")
    print()
# 1 2 3
# 4 5 6
# 7 8 9
```

> **Key takeaway:** Lists are your go-to collection for ordered, changeable data. Use `append()` to add, `remove()` or `pop()` to delete, and list comprehensions for quick transformations. Tuples are for data that shouldn't change. Master these two and you can handle most data in Python.
