---
title: Conditionals
---

# Conditionals

Conditionals let your program make decisions. It's like a choose-your-own-adventure book - different things happen based on different conditions.

## The `if` Statement

The simplest form: "If this is true, do that."

```python
temperature = 35

if temperature > 30:
    print("It's hot outside!")
    print("Drink lots of water")
```

The code inside the `if` block only runs when the condition is `True`. Notice the colon `:` at the end of the `if` line and the indentation (4 spaces) for the code inside.

## `if` / `else`

"If this is true, do A. Otherwise, do B."

```python
age = 16

if age >= 18:
    print("You can vote!")
else:
    print("You're too young to vote")
    print(f"Wait {18 - age} more years")
```

Output:
```
You're too young to vote
Wait 2 more years
```

## `if` / `elif` / `else`

When you have more than two options, use `elif` (short for "else if"):

```python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade: {grade}")   # Your grade: B
```

Python checks each condition from top to bottom. It runs the **first** one that's True and skips the rest.

> **Important:** The order matters! If you put `score >= 60` first, it would match for a score of 85 too, and you'd get a "D" instead of a "B".

## Real-World Examples

### Login Check

```python
username = input("Username: ")
password = input("Password: ")

if username == "admin" and password == "secret":
    print("Welcome, admin!")
elif username == "admin":
    print("Wrong password!")
else:
    print("User not found")
```

### Weather Advice

```python
temp = 15
is_raining = True

if is_raining:
    print("Take an umbrella!")

if temp < 0:
    print("Bundle up - it's freezing!")
elif temp < 15:
    print("Wear a jacket")
elif temp < 25:
    print("Light layers should be fine")
else:
    print("T-shirt weather!")
```

### Number Classifier

```python
number = int(input("Enter a number: "))

if number > 0:
    print("Positive")
elif number < 0:
    print("Negative")
else:
    print("Zero")

if number % 2 == 0:
    print("Even")
else:
    print("Odd")
```

## Nested Conditionals

You can put `if` statements inside other `if` statements:

```python
has_ticket = True
age = 12

if has_ticket:
    if age >= 18:
        print("Welcome to the show!")
    elif age >= 12:
        print("Welcome! Parental guidance recommended.")
    else:
        print("Sorry, you must be at least 12.")
else:
    print("You need a ticket to enter.")
```

> **Tip:** If your nesting gets deeper than 2-3 levels, consider combining conditions with `and`/`or` instead. Deep nesting is hard to read.

## One-Line If (Ternary)

For simple cases, you can write an `if`/`else` in one line:

```python
age = 20
status = "adult" if age >= 18 else "minor"
print(status)    # adult

# It's the same as:
if age >= 18:
    status = "adult"
else:
    status = "minor"
```

This is great for simple assignments but don't overuse it - readability matters.

## Truthy and Falsy Values

In Python, things other than `True` and `False` can be treated as true or false:

**Falsy (treated as False):**

| Value | Type |
|-------|------|
| `False` | bool |
| `0` | int |
| `0.0` | float |
| `""` | empty string |
| `[]` | empty list |
| `{}` | empty dict |
| `None` | NoneType |

**Everything else is truthy** (treated as True).

```python
name = ""
if name:
    print(f"Hello, {name}")
else:
    print("Name is empty!")    # This runs

items = [1, 2, 3]
if items:
    print(f"You have {len(items)} items")   # This runs

count = 0
if not count:
    print("Count is zero")    # This runs
```

This is a common Python pattern - instead of writing `if len(items) > 0`, you just write `if items`. Much cleaner.

## Multiple Conditions

### Using `and` - all must be true

```python
age = 25
income = 50000
credit_score = 720

if age >= 18 and income >= 30000 and credit_score >= 700:
    print("Loan approved!")
```

### Using `or` - at least one must be true

```python
day = "Saturday"
if day == "Saturday" or day == "Sunday":
    print("It's the weekend!")
```

### Using `in` for cleaner checks

```python
# Instead of multiple or's:
day = "Saturday"
if day in ("Saturday", "Sunday"):
    print("It's the weekend!")

# Works great for checking categories
fruit = "apple"
if fruit in ["apple", "banana", "orange", "grape"]:
    print(f"{fruit} is a fruit we sell")
```

## Common Patterns

### Clamping a Value

```python
# Keep a value within a range
value = 150
if value > 100:
    value = 100
elif value < 0:
    value = 0
print(value)    # 100

# Shorter version using min/max
value = min(150, 100)   # 100
value = max(value, 0)   # stays 100
```

### Safe Division

```python
a = 10
b = 0

if b != 0:
    result = a / b
else:
    result = 0
    print("Can't divide by zero!")
```

> **Key takeaway:** `if`/`elif`/`else` is how programs make decisions. Conditions are checked top-to-bottom, and only the first matching block runs. Use `and`, `or`, and `in` to combine conditions. Remember that empty things (0, "", [], None) are falsy.
