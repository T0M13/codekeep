# input()

Reads text input from the user. The program pauses and waits for the user to type something and press Enter.

## Syntax

```python
result = input(prompt)
```

## Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `prompt` | Text shown to the user before they type | `''` (nothing) |

## Examples

```python
# Basic usage
name = input("What's your name? ")
print(f"Hello, {name}!")

# input() always returns a string
age = input("How old are you? ")
print(type(age))    # <class 'str'>

# Convert to number for math
age = int(input("How old are you? "))
next_year = age + 1
print(f"Next year you'll be {next_year}")

# Convert to float
price = float(input("Enter price: "))
```

## Key Points

- `input()` always returns a **string**, even if the user types a number
- Use `int()` or `float()` to convert the result to a number
- If the user types something that can't be converted, your program will crash - use `try`/`except` to handle this
- The prompt string is optional but recommended for user-friendliness
