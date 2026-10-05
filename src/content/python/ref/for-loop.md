# for Loop

Iterate over a sequence (list, string, range, etc.), running code once for each item.

## Syntax

```python
for variable in sequence:
    # code to run for each item
```

## Examples

```python
# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Loop through a string
for char in "Python":
    print(char)

# Loop with range
for i in range(5):
    print(i)          # 0, 1, 2, 3, 4

for i in range(1, 6):
    print(i)          # 1, 2, 3, 4, 5

for i in range(0, 10, 2):
    print(i)          # 0, 2, 4, 6, 8

# Loop with enumerate (index + value)
colors = ["red", "green", "blue"]
for i, color in enumerate(colors):
    print(f"{i}: {color}")

# Loop through a dictionary
person = {"name": "Alice", "age": 30}
for key, value in person.items():
    print(f"{key}: {value}")

# for/else (else runs if loop completes without break)
for num in [1, 3, 5]:
    if num % 2 == 0:
        print("Found even!")
        break
else:
    print("No evens found")
```

## Key Points

- `for` loops are best when you know what you're iterating over
- Use `range()` when you need a counter
- Use `enumerate()` when you need both index and value
- The loop variable (`fruit`, `i`, etc.) is created automatically
- You can nest `for` loops inside each other
