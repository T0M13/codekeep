# range()

Generates a sequence of numbers. The most common way to loop a specific number of times.

## Syntax

```python
range(stop)                # 0 to stop-1
range(start, stop)         # start to stop-1
range(start, stop, step)   # start to stop-1, counting by step
```

## Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `start` | Starting number (inclusive) | `0` |
| `stop` | End number (exclusive - NOT included) | required |
| `step` | Increment between numbers | `1` |

## Examples

```python
# Basic range
list(range(5))          # [0, 1, 2, 3, 4]
list(range(1, 6))       # [1, 2, 3, 4, 5]
list(range(0, 10, 2))   # [0, 2, 4, 6, 8]
list(range(10, 0, -1))  # [10, 9, 8, ..., 1]
list(range(5, 0, -1))   # [5, 4, 3, 2, 1]

# In a for loop (most common use)
for i in range(5):
    print(i)            # 0, 1, 2, 3, 4

# Countdown
for i in range(3, 0, -1):
    print(i)
print("Go!")            # 3, 2, 1, Go!

# Generate even numbers
evens = list(range(0, 20, 2))
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Loop N times
for _ in range(3):     # _ means "I don't need the variable"
    print("Hello!")

# Check if number is in range
if 5 in range(1, 10):
    print("5 is between 1 and 9")

# Length of a range
print(len(range(100)))    # 100
```

## Key Points

- The `stop` value is **never included**: `range(5)` gives 0-4, not 0-5
- `range()` is memory efficient - it doesn't create all numbers at once
- Use `list(range(...))` if you need an actual list
- Use a negative `step` to count backwards
- `range(0)` and `range(5, 5)` are empty (no iterations)
- Use `_` as the variable name when you don't need the counter value
