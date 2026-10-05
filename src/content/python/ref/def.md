# def (Defining Functions)

Create a reusable block of code with a name. Call it whenever you need it.

## Syntax

```python
def function_name(parameters):
    """Optional docstring"""
    # function body
    return value    # optional
```

## Examples

```python
# Simple function
def greet():
    print("Hello!")

greet()    # Hello!

# With parameters
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")    # Hello, Alice!

# With default parameters
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")              # Hello, Alice!
greet("Bob", "Hey")         # Hey, Bob!

# Multiple parameters
def add(a, b):
    return a + b

result = add(3, 5)    # 8

# Keyword arguments
def profile(name, age, city):
    print(f"{name}, {age}, {city}")

profile(city="Vienna", name="Alice", age=30)

# Docstring
def calculate_area(radius):
    """Calculate the area of a circle given its radius."""
    return 3.14159 * radius ** 2
```

## Key Points

- Function names use `snake_case`: `calculate_total`, `get_user`
- Parameters with defaults must come **after** those without
- Without `return`, the function returns `None`
- Functions must be defined before they're called
- Keep functions small - each should do one thing
- Add a docstring to explain what the function does
