---
title: What is Python?
---

# What is Python?

Python is one of the most popular programming languages in the world. It was created in 1991 by Guido van Rossum, and he named it after the comedy group Monty Python (not the snake).

## Why Learn Python?

Think of programming languages like tools in a toolbox. Some tools are specialized (like a soldering iron), while others are useful for almost everything (like a Swiss Army knife). Python is the Swiss Army knife.

People use Python for:

| Field | What Python Does |
|-------|-----------------|
| Web Development | Powers websites (Instagram, Spotify, Pinterest) |
| Data Science | Analyzes huge amounts of data |
| AI / Machine Learning | Teaches computers to learn patterns |
| Automation | Automates boring repetitive tasks |
| Game Development | Creates simple games and prototypes |
| Science | Processes research data, simulations |

## Why Python is Great for Beginners

Python reads almost like English. Compare these examples:

**Python:**
```python
if age >= 18:
    print("You can vote!")
```

**Java (same thing):**
```java
if (age >= 18) {
    System.out.println("You can vote!");
}
```

See how Python is cleaner? No curly braces `{}`, no semicolons `;`, no `System.out.println`. Just plain, readable code.

## Your First Python Program

Every programmer starts here:

```python
print("Hello, World!")
```

That's it. One line. It displays `Hello, World!` on the screen.

Let's do something more interesting:

```python
name = "Alice"
print("Hello, " + name + "!")
```

Output:
```
Hello, Alice!
```

You just stored a name in a **variable** and used it in a sentence. That's programming.

## How Python Works

When you write Python code, here's what happens:

1. You write code in a `.py` file (like `hello.py`)
2. Python reads your code line by line, top to bottom
3. It translates each line into instructions the computer understands
4. The computer runs those instructions

This is different from languages like C or Java, which need to be "compiled" (translated all at once) before running. Python is an **interpreted** language - it translates and runs one line at a time.

## Python is Indentation-Based

Most languages use curly braces `{}` to group code together. Python uses **indentation** (spaces at the beginning of a line).

```python
if it_is_raining:
    print("Take an umbrella")
    print("Wear a raincoat")

print("Have a nice day")
```

The two indented lines only run if it's raining. The last line always runs. The spaces matter - they tell Python which code belongs together.

> **Tip:** Always use 4 spaces for indentation. Most code editors do this automatically when you press Tab.

## Comments - Notes to Yourself

You can leave notes in your code that Python ignores:

```python
# This is a comment - Python skips this line
print("This runs")  # Comments can go at the end too

# You can use comments to explain tricky code
# or to temporarily disable a line:
# print("This won't run")
```

## Quick Math

Python works as a calculator right out of the box:

```python
print(2 + 3)       # 5
print(10 - 4)      # 6
print(3 * 7)       # 21
print(15 / 4)      # 3.75
print(15 // 4)     # 3 (whole number division)
print(2 ** 10)     # 1024 (2 to the power of 10)
```

## Getting User Input

You can ask the user to type something:

```python
name = input("What's your name? ")
print("Nice to meet you, " + name + "!")
```

When this runs, it waits for the user to type something and press Enter. Whatever they type gets stored in the `name` variable.

## What You'll Learn Next

In the upcoming lessons, you'll learn:

- How to store and work with different types of data
- How to make your program make decisions
- How to repeat actions automatically
- How to organize code into reusable pieces
- How to work with collections of data
- How to read and write files

> **Key takeaway:** Python is beginner-friendly, powerful, and used everywhere. If you can only learn one programming language, Python is a great choice.
