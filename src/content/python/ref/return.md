# return

Sends a value back from a function to the code that called it. Also ends the function immediately.

## Syntax

```python
def function_name():
    return value
```

## Examples

```python
# Return a single value
def add(a, b):
    return a + b

result = add(3, 5)
print(result)    # 8

# Return multiple values (as a tuple)
def min_max(numbers):
    return min(numbers), max(numbers)

lowest, highest = min_max([3, 1, 7, 2, 9])
print(lowest, highest)    # 1 9

# Return ends the function immediately
def check_age(age):
    if age < 0:
        return "Invalid age"
    if age >= 18:
        return "Adult"
    return "Minor"

# No return = returns None
def greet(name):
    print(f"Hello, {name}!")

result = greet("Alice")
print(result)    # None

# Return a boolean
def is_even(n):
    return n % 2 == 0

if is_even(4):
    print("It's even!")

# Return a list
def get_evens(numbers):
    return [n for n in numbers if n % 2 == 0]
```

## Key Points

- `return` immediately exits the function - code after it won't run
- You can return any type: numbers, strings, lists, dicts, booleans
- Returning multiple values creates a tuple: `return a, b`
- A function without `return` (or with bare `return`) returns `None`
- Use `return` for values you need later; use `print()` just for display
