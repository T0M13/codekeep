# Math Operators

Arithmetic operators for doing math with numbers.

## Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `7 + 3` | `10` |
| `-` | Subtraction | `7 - 3` | `4` |
| `*` | Multiplication | `7 * 3` | `21` |
| `/` | Division | `7 / 2` | `3.5` |
| `//` | Floor Division | `7 // 2` | `3` |
| `%` | Modulo (remainder) | `7 % 3` | `1` |
| `**` | Exponent (power) | `2 ** 3` | `8` |

## Examples

```python
# Basic math
print(10 + 3)     # 13
print(10 - 3)     # 7
print(10 * 3)     # 30
print(10 / 3)     # 3.333...
print(10 // 3)    # 3 (rounds down)
print(10 % 3)     # 1 (remainder)
print(10 ** 3)    # 1000

# Division always returns a float
print(10 / 2)     # 5.0 (not 5)

# Floor division rounds toward negative infinity
print(-7 // 2)    # -4 (not -3)

# Useful modulo patterns
print(15 % 5 == 0)    # True (divisible check)
print(7 % 2 != 0)     # True (odd number check)
print(25 % 24)         # 1 (clock wraparound)

# Assignment shortcuts
x = 10
x += 5     # x = 15
x -= 3     # x = 12
x *= 2     # x = 24
x /= 4     # x = 6.0
```

## Order of Operations

1. `()` Parentheses
2. `**` Exponents
3. `*`, `/`, `//`, `%`
4. `+`, `-`

## Key Points

- `/` always returns a float, even for `10 / 2` (gives `5.0`)
- `//` returns an integer for integer inputs, float for float inputs
- `%` is great for checking divisibility and clock-like wrapping
- Use `()` when order of operations isn't obvious
