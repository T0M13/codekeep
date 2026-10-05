# String Methods

Built-in functions you can call on any string. Strings are immutable, so these always return a **new** string.

## Most Used Methods

| Method | What It Does | Example | Result |
|--------|-------------|---------|--------|
| `.upper()` | All uppercase | `"hello".upper()` | `"HELLO"` |
| `.lower()` | All lowercase | `"HELLO".lower()` | `"hello"` |
| `.title()` | Capitalize each word | `"hello world".title()` | `"Hello World"` |
| `.strip()` | Remove whitespace from ends | `" hi ".strip()` | `"hi"` |
| `.replace(a, b)` | Replace a with b | `"cat".replace("c","b")` | `"bat"` |
| `.split(sep)` | Split into list | `"a,b,c".split(",")` | `["a","b","c"]` |
| `.join(list)` | Join list into string | `"-".join(["a","b"])` | `"a-b"` |
| `.find(sub)` | Find position of substring | `"hello".find("ll")` | `2` |
| `.count(sub)` | Count occurrences | `"banana".count("a")` | `3` |
| `.startswith(s)` | Check start | `"hello".startswith("he")` | `True` |
| `.endswith(s)` | Check end | `"hello".endswith("lo")` | `True` |

## Examples

```python
text = "  Hello, World!  "

# Cleaning
clean = text.strip()              # "Hello, World!"
clean = text.lstrip()             # "Hello, World!  "
clean = text.rstrip()             # "  Hello, World!"

# Searching
pos = "Python is great".find("is")    # 7
exists = "Python" in "I love Python"  # True

# Checking content
"hello123".isalnum()     # True (letters + numbers)
"hello".isalpha()        # True (letters only)
"12345".isdigit()        # True (digits only)
"hello".islower()        # True
```

## Key Points

- String methods never change the original - they return a new string
- `.find()` returns `-1` if not found (doesn't crash)
- Use `in` for simple existence checks: `"x" in "text"`
- `.split()` with no arguments splits on any whitespace
