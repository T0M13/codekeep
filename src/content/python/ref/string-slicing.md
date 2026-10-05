# String Slicing

Extract parts of a string using index ranges. Works the same way on lists and tuples.

## Syntax

```python
string[start:stop]        # from start to stop-1
string[start:stop:step]   # with step size
```

## Index Reference

```
 P   y   t   h   o   n
 0   1   2   3   4   5    (positive indexes)
-6  -5  -4  -3  -2  -1    (negative indexes)
```

## Examples

```python
text = "Python"

# Basic slicing
text[0:3]      # "Pyt" (index 0, 1, 2)
text[2:5]      # "tho"
text[:3]       # "Pyt" (from start)
text[3:]       # "hon" (to end)
text[:]        # "Python" (full copy)

# Negative indexes
text[-3:]      # "hon" (last 3)
text[:-2]      # "Pyth" (everything except last 2)
text[-4:-1]    # "tho"

# With step
text[::2]      # "Pto" (every other character)
text[1::2]     # "yhn"
text[::-1]     # "nohtyP" (reversed)
text[::-2]     # "nhy" (reversed, every other)

# Practical examples
url = "https://example.com/page"
protocol = url[:5]        # "https"
domain = url[8:19]        # "example.com"

filename = "report_2025.pdf"
name = filename[:-4]      # "report_2025"
ext = filename[-3:]       # "pdf"
```

## Key Points

- The `stop` index is **not included** in the result
- Omitting `start` defaults to `0` (beginning)
- Omitting `stop` defaults to end of string
- Negative indexes count from the end (`-1` is last character)
- Step of `-1` reverses the string
- Slicing never raises an error, even with out-of-range indexes
