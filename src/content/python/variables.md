---
title: Variables & Data Types
---

# Variables & Data Types

## What is a Variable?

A variable is like a labeled box. You put something inside the box, and the label tells you what's in it.

```python
age = 25
name = "Alice"
is_student = True
```

Here, `age` is a box containing the number 25. `name` holds the text "Alice". `is_student` holds True (yes).

## Creating Variables

In Python, you create a variable simply by giving it a name and a value:

```python
message = "Hello"
count = 42
price = 9.99
```

No special keywords needed. Python figures out the type automatically.

## Naming Rules

| Rule | Good | Bad |
|------|------|-----|
| Must start with a letter or underscore | `name`, `_count` | `2name`, `@price` |
| Can contain letters, numbers, underscores | `player_1`, `total_score` | `my-var`, `my var` |
| Case-sensitive | `Name` and `name` are different | |
| Can't use Python keywords | `my_class` | `class`, `if`, `for` |

> **Convention:** Python programmers use `snake_case` for variable names - all lowercase with underscores between words. Like `first_name`, `total_price`, `is_valid`.

## Data Types

Every value in Python has a type. Think of it like this: the number 5 and the text "5" are different things, even though they look similar.

### The Main Types

```python
# Integer (int) - whole numbers
age = 25
temperature = -10
population = 8000000

# Float - decimal numbers
price = 19.99
pi = 3.14159
percentage = 0.75

# String (str) - text
name = "Alice"
greeting = 'Hello there'
empty = ""

# Boolean (bool) - True or False
is_active = True
game_over = False

# NoneType - means "nothing" or "no value"
result = None
```

## Checking the Type

Use `type()` to find out what type a value is:

```python
print(type(42))          # <class 'int'>
print(type(3.14))        # <class 'float'>
print(type("hello"))     # <class 'str'>
print(type(True))        # <class 'bool'>
print(type(None))        # <class 'NoneType'>
```

## Changing Types (Type Conversion)

Sometimes you need to convert between types. Imagine someone types "25" - that's text, not a number. You can't do math with text.

```python
# String to integer
age_text = "25"
age_number = int(age_text)    # Now it's the number 25

# String to float
price_text = "19.99"
price = float(price_text)     # Now it's 19.99

# Number to string
score = 100
score_text = str(score)       # Now it's "100"

# Float to integer (drops the decimal part)
value = int(9.7)              # 9 (not rounded - just chopped)
```

> **Watch out:** `int("hello")` will crash your program. You can only convert strings that actually look like numbers.

## Working with Variables

Variables can be updated and used in expressions:

```python
# Updating a variable
score = 0
score = score + 10    # score is now 10
score += 5            # shorthand: score is now 15

# Using variables together
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
print(full_name)      # John Doe

# Math with variables
width = 10
height = 5
area = width * height
print(area)           # 50
```

## Multiple Assignment

Python lets you assign multiple variables at once:

```python
# Assign different values
x, y, z = 1, 2, 3

# Assign the same value
a = b = c = 0

# Swap two variables (super handy!)
x, y = y, x    # x is now 2, y is now 1
```

## Constants

Python doesn't have true constants (values that can't change), but there's a convention: use ALL_CAPS for values that shouldn't be changed.

```python
MAX_SPEED = 120
PI = 3.14159
DATABASE_URL = "localhost:5432"

# Nothing stops you from changing these, but other programmers
# will understand they shouldn't be modified
```

## Common Mistakes

```python
# Mistake 1: Using a variable before creating it
print(username)    # Error! 'username' doesn't exist yet

# Mistake 2: Forgetting quotes around strings
name = Alice       # Error! Python thinks Alice is a variable
name = "Alice"     # Correct

# Mistake 3: Mixing types without converting
age = 25
print("I am " + age)           # Error! Can't add string + int
print("I am " + str(age))      # Works: "I am 25"
print(f"I am {age}")           # Even better (f-string)
```

> **Key takeaway:** Variables store data. Python has a few basic types: integers, floats, strings, booleans, and None. You can convert between them when needed. Name your variables clearly so your code reads like a story.
