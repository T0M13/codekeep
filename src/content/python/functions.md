---
title: Functions
---

# Functions

A function is a reusable block of code that does a specific job. Think of it like a recipe: you define it once, then use it whenever you need it.

## Why Functions?

Without functions, you'd repeat yourself constantly:

```python
# Without functions (bad - repeated code)
print("=" * 30)
print("   WELCOME TO MY APP")
print("=" * 30)

# ... later in your code ...

print("=" * 30)
print("   WELCOME TO MY APP")
print("=" * 30)
```

With a function, define it once, use it anywhere:

```python
def show_banner():
    print("=" * 30)
    print("   WELCOME TO MY APP")
    print("=" * 30)

# Use it whenever you need it
show_banner()
show_banner()
```

## Defining a Function

```python
def greet():
    print("Hello, World!")

# Call (use) the function
greet()    # Hello, World!
```

The structure is:
1. `def` keyword (short for "define")
2. Function name (use `snake_case`)
3. Parentheses `()`
4. Colon `:`
5. Indented code block (the function body)

## Parameters and Arguments

Functions become powerful when you give them input:

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")     # Hello, Alice!
greet("Bob")       # Hello, Bob!
```

`name` is a **parameter** (the variable in the definition). `"Alice"` is an **argument** (the actual value you pass in).

### Multiple Parameters

```python
def introduce(name, age, city):
    print(f"I'm {name}, {age} years old, from {city}")

introduce("Alice", 30, "Vienna")
```

## Return Values

Most functions calculate something and give back a result:

```python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)        # 8

# Use the return value directly
print(add(10, 20))   # 30
```

Without `return`, a function returns `None`:

```python
def greet(name):
    print(f"Hello, {name}!")

result = greet("Alice")
print(result)    # None
```

### Returning Multiple Values

```python
def get_min_max(numbers):
    return min(numbers), max(numbers)

lowest, highest = get_min_max([3, 1, 7, 2, 9])
print(f"Min: {lowest}, Max: {highest}")   # Min: 1, Max: 9
```

## Default Parameters

Give parameters a default value so they're optional:

```python
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")               # Hello, Alice!
greet("Bob", "Hey")          # Hey, Bob!
greet("Charlie", "Howdy")    # Howdy, Charlie!
```

> **Rule:** Parameters with defaults must come after parameters without defaults.

## Keyword Arguments

You can specify which parameter gets which value by name:

```python
def create_profile(name, age, city):
    print(f"{name}, {age}, {city}")

# Positional (order matters)
create_profile("Alice", 30, "Vienna")

# Keyword (order doesn't matter)
create_profile(city="Vienna", name="Alice", age=30)

# Mix (positional first, then keyword)
create_profile("Alice", city="Vienna", age=30)
```

## Variable Number of Arguments

### `*args` - Any Number of Positional Arguments

```python
def add_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(add_all(1, 2))          # 3
print(add_all(1, 2, 3, 4, 5)) # 15
```

### `**kwargs` - Any Number of Keyword Arguments

```python
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=30, city="Vienna")
# name: Alice
# age: 30
# city: Vienna
```

## Scope - Where Variables Live

Variables created inside a function only exist inside that function:

```python
def my_function():
    secret = "You can't see me outside"
    print(secret)    # Works here

my_function()
# print(secret)    # Error! 'secret' doesn't exist out here

# Variables outside a function can be read inside
message = "Hello"

def show_message():
    print(message)    # Works - can read outer variables

show_message()    # Hello
```

> **Best practice:** Don't rely on outer variables inside functions. Pass them as parameters instead. It makes your functions reusable and predictable.

## Docstrings

Document what your function does with a triple-quoted string right after `def`:

```python
def calculate_bmi(weight_kg, height_m):
    """
    Calculate Body Mass Index.

    Args:
        weight_kg: Weight in kilograms
        height_m: Height in meters

    Returns:
        BMI as a float
    """
    return weight_kg / (height_m ** 2)

# You can read the docs with help()
help(calculate_bmi)
```

## Lambda Functions

A lambda is a tiny, one-line function without a name:

```python
# Regular function
def double(x):
    return x * 2

# Same thing as a lambda
double = lambda x: x * 2

print(double(5))    # 10
```

Lambdas are most useful when passing a small function as an argument:

```python
# Sort a list of tuples by the second element
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
students.sort(key=lambda student: student[1])
print(students)
# [('Charlie', 78), ('Alice', 85), ('Bob', 92)]
```

## Practical Examples

### Temperature Converter

```python
def celsius_to_fahrenheit(celsius):
    return celsius * 9/5 + 32

def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9

print(celsius_to_fahrenheit(100))    # 212.0
print(fahrenheit_to_celsius(72))     # 22.22...
```

### Password Validator

```python
def is_valid_password(password):
    if len(password) < 8:
        return False
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    return has_upper and has_lower and has_digit

print(is_valid_password("abc"))          # False
print(is_valid_password("MyPass123"))    # True
```

### Reusable Printer

```python
def print_table(headers, rows):
    # Print headers
    print(" | ".join(headers))
    print("-" * 40)
    # Print each row
    for row in rows:
        print(" | ".join(str(item) for item in row))

print_table(
    ["Name", "Age", "City"],
    [["Alice", 30, "Vienna"], ["Bob", 25, "Berlin"]]
)
```

> **Key takeaway:** Functions are the building blocks of good code. They make your code reusable, readable, and easier to debug. If you find yourself copying and pasting code, that's a sign you should make a function. Keep functions small - each one should do one thing well.
