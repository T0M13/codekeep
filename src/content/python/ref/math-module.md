# math Module

Python's built-in module for advanced math operations. Import it with `import math`.

## Common Functions

| Function | Description | Example | Result |
|----------|-------------|---------|--------|
| `math.sqrt(x)` | Square root | `math.sqrt(16)` | `4.0` |
| `math.floor(x)` | Round down | `math.floor(3.7)` | `3` |
| `math.ceil(x)` | Round up | `math.ceil(3.2)` | `4` |
| `math.pow(x, y)` | x to the power y | `math.pow(2, 3)` | `8.0` |
| `math.abs()` | Absolute value | `abs(-5)` | `5` |
| `math.log(x)` | Natural log | `math.log(2.718)` | `~1.0` |
| `math.log10(x)` | Base-10 log | `math.log10(100)` | `2.0` |

## Constants

| Constant | Value |
|----------|-------|
| `math.pi` | `3.141592653589793` |
| `math.e` | `2.718281828459045` |
| `math.inf` | Positive infinity |

## Examples

```python
import math

# Square root
print(math.sqrt(144))     # 12.0

# Rounding
print(math.floor(3.9))    # 3
print(math.ceil(3.1))     # 4
print(round(3.5))         # 4 (built-in, not math module)
print(round(3.14159, 2))  # 3.14

# Trigonometry
angle = math.radians(90)
print(math.sin(angle))    # 1.0
print(math.cos(angle))    # ~0.0

# Useful functions
print(math.gcd(12, 8))    # 4 (greatest common divisor)
print(math.factorial(5))  # 120 (5! = 5*4*3*2*1)
```

## Key Points

- `abs()` is a built-in - no import needed
- `round()` is a built-in - no import needed
- `math.sqrt()` is the same as `** 0.5` but more readable
- Use `math.inf` when you need a value larger than any number
