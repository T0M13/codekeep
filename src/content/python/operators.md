---
title: Operators
---

# Operators

Operators are symbols that tell Python to do something with values. Think of them as verbs - they perform actions.

## Arithmetic Operators

These do math. Nothing surprising here:

```python
a = 10
b = 3

print(a + b)     # 13  (addition)
print(a - b)     # 7   (subtraction)
print(a * b)     # 30  (multiplication)
print(a / b)     # 3.3333...  (division - always returns a float)
print(a // b)    # 3   (floor division - rounds down to whole number)
print(a % b)     # 1   (modulo - remainder after division)
print(a ** b)    # 1000 (exponent - 10 to the power of 3)
```

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `7 + 3` | `10` |
| `-` | Subtraction | `7 - 3` | `4` |
| `*` | Multiplication | `7 * 3` | `21` |
| `/` | Division | `7 / 3` | `2.333...` |
| `//` | Floor Division | `7 // 3` | `2` |
| `%` | Modulo | `7 % 3` | `1` |
| `**` | Exponent | `2 ** 3` | `8` |

### When is Modulo Useful?

The `%` operator gives you the remainder. It's more useful than you'd think:

```python
# Check if a number is even or odd
number = 7
if number % 2 == 0:
    print("Even")
else:
    print("Odd")       # This runs

# Check if a number is divisible by another
if 15 % 5 == 0:
    print("15 is divisible by 5")   # Yes!

# Wrap around (like a clock)
hour = 25
actual_hour = hour % 24    # 1 (25 hours wraps to 1)
```

## Assignment Operators

These are shortcuts for updating a variable:

```python
x = 10       # Assign 10 to x

x += 5       # Same as: x = x + 5  -> x is now 15
x -= 3       # Same as: x = x - 3  -> x is now 12
x *= 2       # Same as: x = x * 2  -> x is now 24
x /= 4       # Same as: x = x / 4  -> x is now 6.0
x //= 2      # Same as: x = x // 2 -> x is now 3.0
x %= 2       # Same as: x = x % 2  -> x is now 1.0
x **= 3      # Same as: x = x ** 3 -> x is now 1.0
```

> **Tip:** `+=` is by far the most common. You'll use it all the time for counters and accumulators.

## Comparison Operators

These compare two values and return `True` or `False`:

```python
a = 10
b = 20

print(a == b)    # False  (equal to?)
print(a != b)    # True   (not equal to?)
print(a > b)     # False  (greater than?)
print(a < b)     # True   (less than?)
print(a >= b)    # False  (greater than or equal to?)
print(a <= b)    # True   (less than or equal to?)
```

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `==` | Equal to | `5 == 5` | `True` |
| `!=` | Not equal to | `5 != 3` | `True` |
| `>` | Greater than | `5 > 3` | `True` |
| `<` | Less than | `5 < 3` | `False` |
| `>=` | Greater or equal | `5 >= 5` | `True` |
| `<=` | Less or equal | `5 <= 3` | `False` |

> **Common mistake:** `=` is assignment (puts a value in a variable). `==` is comparison (checks if two things are equal). Mixing these up is one of the most common beginner bugs.

## Logical Operators

These combine True/False values. Think of them as "and", "or", "not" in everyday language:

```python
age = 25
has_license = True

# AND - both must be true
can_drive = age >= 18 and has_license    # True

# OR - at least one must be true
is_weekend = False
is_holiday = True
day_off = is_weekend or is_holiday       # True

# NOT - flips True to False and vice versa
is_raining = False
go_outside = not is_raining              # True
```

### Truth Table

| A | B | `A and B` | `A or B` | `not A` |
|---|---|-----------|----------|---------|
| True | True | True | True | False |
| True | False | False | True | False |
| False | True | False | True | True |
| False | False | False | False | True |

### Practical Examples

```python
# Password check
username = "admin"
password = "secret123"
if username == "admin" and password == "secret123":
    print("Access granted")

# Age range check
age = 25
if age >= 13 and age <= 19:
    print("Teenager")
elif age >= 20 and age <= 29:
    print("Twenties")    # This runs

# Multiple conditions
temp = 22
if temp < 0 or temp > 40:
    print("Extreme weather!")
else:
    print("Normal temperature")    # This runs
```

## Membership Operators

Check if something is inside a collection:

```python
# in - checks if value exists in a sequence
fruits = ["apple", "banana", "cherry"]
print("banana" in fruits)       # True
print("grape" in fruits)        # False

# not in - opposite
print("grape" not in fruits)    # True

# Works with strings too
text = "Hello, World!"
print("World" in text)          # True
print("world" in text)          # False (case-sensitive!)
```

## Identity Operators

Check if two variables point to the exact same object in memory:

```python
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)     # True (same values)
print(a is b)     # False (different objects in memory)
print(a is c)     # True (c points to the same object as a)

# Most common use: checking for None
result = None
if result is None:
    print("No result yet")
```

> **Rule of thumb:** Use `==` to compare values. Use `is` only with `None`.

## Order of Operations

Python follows math rules (PEMDAS/BODMAS), plus some extras:

1. `()` Parentheses
2. `**` Exponents
3. `*`, `/`, `//`, `%` Multiplication, Division, Floor Div, Modulo
4. `+`, `-` Addition, Subtraction
5. `==`, `!=`, `<`, `>`, `<=`, `>=` Comparisons
6. `not`
7. `and`
8. `or`

```python
# Without parentheses
result = 2 + 3 * 4       # 14 (multiplication first)

# With parentheses
result = (2 + 3) * 4     # 20 (parentheses first)

# When in doubt, use parentheses to make it clear
is_valid = (age >= 18) and (has_id or has_passport)
```

> **Key takeaway:** You use arithmetic operators for math, comparison operators for checking conditions, and logical operators for combining conditions. When you're not sure about the order, add parentheses - it makes your code clearer too.
