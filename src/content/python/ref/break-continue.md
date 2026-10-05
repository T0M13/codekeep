# break & continue

Control the flow inside loops. `break` exits the loop entirely, `continue` skips to the next iteration.

## Syntax

```python
break       # Exit the loop immediately
continue    # Skip the rest of this iteration, go to next
```

## Examples

```python
# break - stop searching once found
names = ["Alice", "Bob", "Charlie", "Diana"]
for name in names:
    if name == "Charlie":
        print("Found Charlie!")
        break
    print(f"Checking {name}...")
# Output: Checking Alice... Checking Bob... Found Charlie!

# continue - skip unwanted items
numbers = [1, -2, 3, -4, 5, -6]
total = 0
for num in numbers:
    if num < 0:
        continue       # Skip negative numbers
    total += num
print(f"Sum of positives: {total}")    # 9

# break in a while loop
while True:
    command = input("> ")
    if command == "quit":
        break
    print(f"You typed: {command}")

# continue to skip blank lines
lines = ["hello", "", "world", "", "python"]
for line in lines:
    if not line:
        continue
    print(line)
# Output: hello, world, python
```

## break vs continue

| | `break` | `continue` |
|---|---------|------------|
| Does what? | Exits the entire loop | Skips to next iteration |
| Code after it? | Doesn't run (loop ends) | Doesn't run (jumps to top) |
| Common use | Found what you need | Skip unwanted items |

## Key Points

- `break` only exits the **innermost** loop in nested loops
- `continue` jumps to the next iteration of the **innermost** loop
- Overusing `break` and `continue` can make code hard to follow
- A `for`/`else` block's `else` runs only if no `break` occurred
