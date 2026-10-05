# *args and **kwargs

Accept a variable number of arguments in a function. `*args` collects extra positional arguments, `**kwargs` collects extra keyword arguments.

## Syntax

```python
def function(*args, **kwargs):
    # args is a tuple of positional arguments
    # kwargs is a dict of keyword arguments
```

## Examples

```python
# *args - any number of positional arguments
def add_all(*numbers):
    return sum(numbers)

print(add_all(1, 2))           # 3
print(add_all(1, 2, 3, 4, 5)) # 15

# Loop through args
def print_all(*args):
    for item in args:
        print(item)

print_all("apple", "banana", "cherry")

# **kwargs - any number of keyword arguments
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=30, city="Vienna")
# name: Alice
# age: 30
# city: Vienna

# Mixing regular params, *args, and **kwargs
def func(required, *args, **kwargs):
    print(f"Required: {required}")
    print(f"Extra args: {args}")
    print(f"Extra kwargs: {kwargs}")

func("hello", 1, 2, 3, color="red", size=10)
# Required: hello
# Extra args: (1, 2, 3)
# Extra kwargs: {'color': 'red', 'size': 10}

# Unpacking with * and **
def greet(name, age):
    print(f"{name} is {age}")

data = ["Alice", 30]
greet(*data)              # Unpack list as positional args

data = {"name": "Alice", "age": 30}
greet(**data)             # Unpack dict as keyword args
```

## Key Points

- `*args` is a **tuple** of extra positional arguments
- `**kwargs` is a **dict** of extra keyword arguments
- The names `args` and `kwargs` are conventions - any name works (`*items`, `**options`)
- Order must be: regular params, `*args`, keyword-only params, `**kwargs`
- Use `*` to unpack a list/tuple into arguments: `func(*my_list)`
- Use `**` to unpack a dict into keyword arguments: `func(**my_dict)`
