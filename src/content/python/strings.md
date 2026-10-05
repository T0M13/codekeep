---
title: Working with Strings
---

# Working with Strings

A string is just text. Anything between quotes is a string - a name, a sentence, even a single character.

## Creating Strings

You can use single quotes, double quotes, or triple quotes:

```python
# Single or double - both work the same
name = 'Alice'
greeting = "Hello, World!"

# Use one type to include the other
message = "It's a beautiful day"
quote = 'She said "hello"'

# Triple quotes for multi-line text
poem = """Roses are red,
Violets are blue,
Python is awesome,
And so are you."""
```

## String Length

Use `len()` to count characters:

```python
word = "Python"
print(len(word))    # 6

empty = ""
print(len(empty))   # 0
```

## Accessing Characters

Every character in a string has a position (called an **index**), starting from 0:

```python
word = "Python"
#       P y t h o n
#       0 1 2 3 4 5

print(word[0])     # P (first character)
print(word[1])     # y
print(word[5])     # n (last character)
print(word[-1])    # n (negative = count from the end)
print(word[-2])    # o
```

> **Why start at 0?** Think of the index as "how far from the start." The first character is 0 steps from the start.

## Slicing - Getting Parts of a String

You can grab a chunk of a string using `[start:end]`:

```python
text = "Hello, World!"

print(text[0:5])     # Hello (characters 0 through 4)
print(text[7:12])    # World
print(text[:5])      # Hello (start from 0 if omitted)
print(text[7:])      # World! (go to end if omitted)
print(text[-6:])     # orld! (last 6 characters... wait)
print(text[-6:-1])   # orld  (skip the last one)
```

The end index is **not included**. `text[0:5]` gives characters at positions 0, 1, 2, 3, 4.

## String Methods

Strings come with built-in tools called **methods**. Here are the most useful ones:

### Changing Case

```python
name = "alice smith"

print(name.upper())       # ALICE SMITH
print(name.lower())       # alice smith
print(name.title())       # Alice Smith
print(name.capitalize())  # Alice smith
```

### Searching

```python
text = "I love Python programming"

print(text.find("Python"))      # 7 (position where "Python" starts)
print(text.find("Java"))        # -1 (not found)
print("Python" in text)         # True
print(text.count("o"))          # 2 (appears twice)
print(text.startswith("I"))     # True
print(text.endswith("ing"))     # True
```

### Cleaning Up

```python
messy = "   Hello, World!   "

print(messy.strip())       # "Hello, World!" (removes spaces from both sides)
print(messy.lstrip())      # "Hello, World!   " (left side only)
print(messy.rstrip())      # "   Hello, World!" (right side only)
```

### Replacing

```python
text = "I like cats. Cats are great."

print(text.replace("cats", "dogs"))    # I like dogs. Cats are great.
print(text.replace("cats", "dogs", 1)) # Replace only first occurrence
```

### Splitting and Joining

```python
# Split a string into a list
sentence = "Python is awesome"
words = sentence.split()           # ["Python", "is", "awesome"]

csv_data = "Alice,Bob,Charlie"
names = csv_data.split(",")        # ["Alice", "Bob", "Charlie"]

# Join a list into a string
words = ["Python", "is", "awesome"]
sentence = " ".join(words)         # "Python is awesome"
dash_version = "-".join(words)     # "Python-is-awesome"
```

## String Formatting

There are several ways to build strings with variables. The modern way is **f-strings**:

### F-Strings (Best Way)

```python
name = "Alice"
age = 30

# Put variables directly in the string
print(f"My name is {name} and I'm {age} years old")

# You can put any expression inside {}
print(f"Next year I'll be {age + 1}")
print(f"Name in caps: {name.upper()}")

# Formatting numbers
price = 49.99
print(f"Total: ${price:.2f}")     # Total: $49.99

pi = 3.14159265
print(f"Pi is approximately {pi:.2f}")  # Pi is approximately 3.14
```

### The .format() Method (Older Way)

```python
print("Hello, {}!".format("Alice"))
print("{} is {} years old".format("Bob", 25))
```

### Concatenation (Simple But Limited)

```python
name = "Alice"
print("Hello, " + name + "!")     # Works but gets messy with numbers
```

## Escape Characters

Some characters are special and need a backslash `\` to include them:

| Escape | Meaning | Example Output |
|--------|---------|----------------|
| `\n` | New line | Line 1 (newline) Line 2 |
| `\t` | Tab | Column1 (tab) Column2 |
| `\\` | Backslash | C:\Users |
| `\'` | Single quote | It\'s |
| `\"` | Double quote | She said \"hi\" |

```python
print("Line 1\nLine 2")
# Line 1
# Line 2

print("Name\tAge")
# Name    Age

# Raw strings ignore escape characters (useful for file paths)
path = r"C:\Users\Alice\Documents"
print(path)    # C:\Users\Alice\Documents
```

## String Multiplication

You can repeat a string:

```python
print("Ha" * 3)        # HaHaHa
print("-" * 40)         # ----------------------------------------
```

## Strings are Immutable

You can't change a string after creating it. You can only create a new one:

```python
name = "Alice"
# name[0] = "B"     # Error! Can't modify strings

# Instead, create a new string
name = "B" + name[1:]   # "Blice"
```

## Useful String Checks

```python
"hello123".isalnum()      # True (letters and numbers only)
"hello".isalpha()         # True (letters only)
"12345".isdigit()         # True (digits only)
"hello".islower()         # True
"HELLO".isupper()         # True
"   ".isspace()           # True (whitespace only)
```

> **Key takeaway:** Strings are everywhere in programming. Master f-strings for formatting, `.split()` and `.join()` for converting between strings and lists, and slicing for grabbing parts of text. These three skills cover 90% of string work.
