# f-strings

Formatted string literals. The easiest way to put variables and expressions inside strings. Available since Python 3.6.

## Syntax

```python
f"text {expression} more text"
```

Put an `f` before the opening quote, then use `{}` to embed any Python expression.

## Examples

```python
# Variables
name = "Alice"
age = 30
print(f"My name is {name} and I'm {age}")

# Expressions
print(f"Next year: {age + 1}")
print(f"Name uppercase: {name.upper()}")
print(f"2 + 2 = {2 + 2}")

# Number formatting
pi = 3.14159265
print(f"Pi: {pi:.2f}")           # Pi: 3.14 (2 decimal places)
print(f"Pi: {pi:.4f}")           # Pi: 3.1416

price = 49.9
print(f"Price: ${price:.2f}")    # Price: $49.90

big = 1000000
print(f"Population: {big:,}")    # Population: 1,000,000

# Padding and alignment
word = "hi"
print(f"{word:<10}")    # "hi        " (left align, 10 chars)
print(f"{word:>10}")    # "        hi" (right align)
print(f"{word:^10}")    # "    hi    " (center)

# Percentage
ratio = 0.756
print(f"Score: {ratio:.1%}")     # Score: 75.6%
```

## Format Specifiers

| Spec | Meaning | Example | Result |
|------|---------|---------|--------|
| `:.2f` | 2 decimal places | `f"{3.1:.2f}"` | `3.10` |
| `:,` | Thousands separator | `f"{1000:,}"` | `1,000` |
| `:.1%` | Percentage | `f"{0.75:.1%}"` | `75.0%` |
| `:<10` | Left align, width 10 | `f"{'hi':<10}"` | `hi________` |
| `:>10` | Right align, width 10 | `f"{'hi':>10}"` | `________hi` |
| `:^10` | Center, width 10 | `f"{'hi':^10}"` | `____hi____` |

## Key Points

- Always put `f` or `F` before the string
- Any valid Python expression works inside `{}`
- Use `{{` and `}}` to include literal curly braces: `f"{{hello}}"` prints `{hello}`
- f-strings are faster than `.format()` and `%` formatting
