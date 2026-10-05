# while Loop

Repeats code as long as a condition is True. Use when you don't know how many times to loop.

## Syntax

```python
while condition:
    # code to repeat
    # make sure the condition eventually becomes False!
```

## Examples

```python
# Basic countdown
count = 5
while count > 0:
    print(count)
    count -= 1
print("Go!")

# User input validation
password = ""
while password != "secret":
    password = input("Password: ")
print("Access granted!")

# Running total
total = 0
while True:
    value = input("Enter number (or 'quit'): ")
    if value == "quit":
        break
    total += int(value)
print(f"Total: {total}")

# while/else
attempts = 3
while attempts > 0:
    guess = input("Guess: ")
    if guess == "python":
        print("Correct!")
        break
    attempts -= 1
else:
    print("Out of attempts!")  # Runs only if loop ended normally
```

## Key Points

- Always make sure the condition will eventually become `False`, or use `break`
- `while True:` creates an infinite loop - use `break` to exit
- Use `while` when you don't know how many iterations you need
- Use `for` instead when iterating over a known sequence
- Forgetting to update the condition variable causes an infinite loop (Ctrl+C to stop)
