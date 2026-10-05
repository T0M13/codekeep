---
title: Loops
---

# Loops

Loops let you repeat code without writing it over and over. Imagine you need to say hello to 100 people - you wouldn't write 100 print statements. You'd use a loop.

## The `for` Loop

A `for` loop goes through a collection of items, one at a time:

```python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(f"I like {fruit}")
```

Output:
```
I like apple
I like banana
I like cherry
```

Think of it as: "For each fruit in my list of fruits, print a message."

## `range()` - Looping a Specific Number of Times

`range()` generates a sequence of numbers. It's the most common way to loop a set number of times:

```python
# range(5) gives you 0, 1, 2, 3, 4
for i in range(5):
    print(i)

# range(start, stop)
for i in range(1, 6):
    print(i)          # 1, 2, 3, 4, 5

# range(start, stop, step)
for i in range(0, 10, 2):
    print(i)          # 0, 2, 4, 6, 8

# Counting backwards
for i in range(5, 0, -1):
    print(i)          # 5, 4, 3, 2, 1
```

| `range()` Call | Numbers Generated |
|----------------|-------------------|
| `range(5)` | 0, 1, 2, 3, 4 |
| `range(1, 5)` | 1, 2, 3, 4 |
| `range(0, 10, 2)` | 0, 2, 4, 6, 8 |
| `range(10, 0, -1)` | 10, 9, 8, ..., 1 |

> **Note:** The stop number is never included. `range(1, 5)` gives 1-4, not 1-5.

## Looping Through Strings

Strings are just sequences of characters, so you can loop through them:

```python
for letter in "Python":
    print(letter)
# P, y, t, h, o, n (each on its own line)
```

## The `while` Loop

A `while` loop keeps going as long as a condition is `True`. It's like saying "keep doing this until..."

```python
count = 0
while count < 5:
    print(f"Count is {count}")
    count += 1    # Don't forget this!
```

Output:
```
Count is 0
Count is 1
Count is 2
Count is 3
Count is 4
```

> **Warning:** If you forget to update the condition variable (like `count += 1`), the loop runs forever. This is called an **infinite loop**. If it happens, press Ctrl+C to stop your program.

### When to Use `while` vs `for`

| Use `for` when... | Use `while` when... |
|-------------------|---------------------|
| You know how many times to loop | You don't know when to stop |
| You're going through a collection | You're waiting for a condition |
| You're counting from A to B | You need user input validation |

```python
# while is perfect for input validation
password = ""
while password != "secret":
    password = input("Enter password: ")
print("Access granted!")

# or for a game loop
import random
number = random.randint(1, 10)
guess = 0
while guess != number:
    guess = int(input("Guess (1-10): "))
    if guess < number:
        print("Too low!")
    elif guess > number:
        print("Too high!")
print("You got it!")
```

## `break` - Exit the Loop Early

`break` immediately stops the loop:

```python
for i in range(100):
    if i == 5:
        break           # Stop right here
    print(i)
# Prints: 0, 1, 2, 3, 4

# Practical example: search for something
names = ["Alice", "Bob", "Charlie", "Diana"]
search = "Charlie"

for name in names:
    if name == search:
        print(f"Found {search}!")
        break
```

## `continue` - Skip to the Next Iteration

`continue` skips the rest of the current iteration and jumps to the next one:

```python
for i in range(10):
    if i % 2 == 0:
        continue        # Skip even numbers
    print(i)
# Prints: 1, 3, 5, 7, 9

# Practical: skip invalid data
scores = [85, -1, 92, 0, 78, -5, 95]
total = 0
count = 0
for score in scores:
    if score <= 0:
        continue        # Skip invalid scores
    total += score
    count += 1
print(f"Average: {total / count}")    # Average of valid scores
```

## `else` on Loops

Python has a unique feature: you can add `else` to a loop. The `else` block runs when the loop finishes normally (without `break`):

```python
# Search example
numbers = [1, 3, 5, 7, 9]

for num in numbers:
    if num % 2 == 0:
        print(f"Found an even number: {num}")
        break
else:
    print("No even numbers found")   # This runs
```

## Nested Loops

Loops inside loops. The inner loop runs completely for each iteration of the outer loop:

```python
# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i * j}")
    print("---")
```

Output:
```
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
---
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
---
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
---
```

## `enumerate()` - Get Index and Value

Often you want both the position and the value:

```python
fruits = ["apple", "banana", "cherry"]

# Without enumerate (clunky)
for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")

# With enumerate (clean)
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# Start counting from 1
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")
# 1. apple
# 2. banana
# 3. cherry
```

## Common Loop Patterns

### Accumulator

```python
# Sum all numbers
numbers = [10, 20, 30, 40, 50]
total = 0
for num in numbers:
    total += num
print(f"Sum: {total}")    # 150
```

### Building a New List

```python
# Double every number
numbers = [1, 2, 3, 4, 5]
doubled = []
for num in numbers:
    doubled.append(num * 2)
print(doubled)    # [2, 4, 6, 8, 10]
```

### Finding the Maximum

```python
scores = [72, 88, 95, 63, 81]
highest = scores[0]
for score in scores:
    if score > highest:
        highest = score
print(f"Highest: {highest}")    # 95
```

> **Key takeaway:** Use `for` when you know what to loop over (a list, a range, a string). Use `while` when you're waiting for something to happen. `break` exits early, `continue` skips ahead. And `enumerate()` is your best friend when you need both the index and the value.
