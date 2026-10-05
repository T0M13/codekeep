# lambda

A small, anonymous (unnamed) function defined in a single line. Best for short, simple operations.

## Syntax

```python
lambda parameters: expression
```

The expression is automatically returned - no `return` keyword needed.

## Examples

```python
# Basic lambda
double = lambda x: x * 2
print(double(5))    # 10

# Multiple parameters
add = lambda a, b: a + b
print(add(3, 5))    # 8

# Equivalent regular function
def double(x):
    return x * 2

# Sorting with lambda (most common use)
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
students.sort(key=lambda s: s[1])
print(students)    # sorted by score

# Sort strings by length
words = ["banana", "pie", "strawberry", "kiwi"]
words.sort(key=lambda w: len(w))
print(words)    # ['pie', 'kiwi', 'banana', 'strawberry']

# With map()
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)    # [1, 4, 9, 16, 25]

# With filter()
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)    # [2, 4, 6, 8, 10]

# Conditional expression in lambda
classify = lambda x: "even" if x % 2 == 0 else "odd"
print(classify(7))    # odd
```

## Key Points

- Lambdas can only contain a **single expression** (no statements, no loops)
- The result of the expression is automatically returned
- Most useful as a `key` argument for `sort()`, `sorted()`, `min()`, `max()`
- If a lambda is complex, use a regular `def` function instead
- List comprehensions are usually preferred over `map()` + `lambda`
