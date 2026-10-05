# Lists

Ordered, mutable (changeable) collections. The most commonly used data structure in Python.

## Syntax

```python
my_list = [item1, item2, item3]
```

## Common Operations

| Operation | Example | Result |
|-----------|---------|--------|
| Create | `[1, 2, 3]` | `[1, 2, 3]` |
| Access | `lst[0]` | First item |
| Slice | `lst[1:3]` | Items 1-2 |
| Length | `len(lst)` | Number of items |
| Append | `lst.append(4)` | Adds to end |
| Insert | `lst.insert(0, "x")` | Adds at index |
| Remove | `lst.remove("x")` | Removes first match |
| Pop | `lst.pop()` | Removes & returns last |
| Sort | `lst.sort()` | Sorts in place |
| Reverse | `lst.reverse()` | Reverses in place |
| Count | `lst.count(1)` | How many 1s |
| Index | `lst.index("x")` | Position of first "x" |

## Examples

```python
# Create and modify
fruits = ["apple", "banana", "cherry"]
fruits.append("date")           # Add to end
fruits.insert(1, "avocado")     # Insert at position 1
fruits.remove("banana")         # Remove first "banana"
last = fruits.pop()             # Remove and return last item

# Sorting
numbers = [3, 1, 4, 1, 5, 9]
numbers.sort()                  # [1, 1, 3, 4, 5, 9]
numbers.sort(reverse=True)      # [9, 5, 4, 3, 1, 1]

# Checking membership
print("apple" in fruits)        # True

# List comprehension
squares = [x**2 for x in range(5)]    # [0, 1, 4, 9, 16]

# Useful built-ins
print(min(numbers))    # smallest
print(max(numbers))    # largest
print(sum(numbers))    # total
```

## Key Points

- Lists can hold any mix of types: `[1, "two", 3.0, True]`
- Negative indexes count from the end: `lst[-1]` is the last item
- `lst.sort()` changes the list; `sorted(lst)` returns a new one
- Copy with `lst.copy()` or `lst[:]` - plain `=` just creates a reference
- Lists are mutable - you can change items after creation
