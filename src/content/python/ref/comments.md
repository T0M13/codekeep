# Comments

Notes in your code that Python ignores. Comments explain what your code does and why.

## Syntax

```python
# This is a single-line comment

"""
This is a multi-line comment
(technically a multi-line string, but commonly used as a comment)
"""
```

## Examples

```python
# Calculate the area of a circle
radius = 5
area = 3.14159 * radius ** 2    # pi * r squared

# You can comment out code to disable it temporarily
# print("This won't run")
print("This will run")

# TODO: add error handling here
# FIXME: this breaks with negative numbers

"""
This function calculates compound interest.
It uses the formula: A = P(1 + r/n)^(nt)
Written by: Alice, 2025-01-15
"""
def compound_interest(principal, rate, time):
    return principal * (1 + rate) ** time
```

## Key Points

- Use `#` for single-line comments
- Everything after `#` on that line is ignored by Python
- Triple-quoted strings (`"""..."""`) work as multi-line comments
- Good comments explain **why**, not **what** (the code shows what)
- Don't over-comment obvious code: `x = 5  # set x to 5` is useless
