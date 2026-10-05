# if / elif / else

Make decisions in your code. Run different blocks based on conditions.

## Syntax

```python
if condition:
    # runs if condition is True
elif other_condition:
    # runs if first was False and this is True
else:
    # runs if all above were False
```

## Examples

```python
# Simple if
age = 20
if age >= 18:
    print("Adult")

# if/else
temperature = 35
if temperature > 30:
    print("Hot!")
else:
    print("Not hot")

# if/elif/else
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

# One-line (ternary)
status = "adult" if age >= 18 else "minor"

# Multiple conditions
if age >= 18 and has_license:
    print("Can drive")

if day in ("Saturday", "Sunday"):
    print("Weekend!")
```

## Key Points

- Conditions are checked top to bottom - first match wins
- `elif` is optional, you can have as many as needed
- `else` is optional and catches everything not matched above
- Indentation (4 spaces) defines what's inside each block
- Use `and`, `or`, `not` to combine conditions
- Empty values are falsy: `if my_list:` is True only if the list has items
