---
title: Dictionaries
---

# Dictionaries

A dictionary stores data as **key-value pairs**. Think of it like a real dictionary: you look up a word (the key) and get its definition (the value). Or think of a contact list: the name is the key, the phone number is the value.

## Creating Dictionaries

```python
# A simple dictionary
person = {
    "name": "Alice",
    "age": 30,
    "city": "Vienna"
}

# Also valid on one line
scores = {"math": 95, "science": 87, "english": 91}

# Empty dictionary
empty = {}
```

## Accessing Values

Use the key in square brackets or the `.get()` method:

```python
person = {"name": "Alice", "age": 30, "city": "Vienna"}

# Square brackets
print(person["name"])     # Alice
print(person["age"])      # 30

# .get() - safer, returns None instead of crashing
print(person.get("name"))        # Alice
print(person.get("phone"))       # None (key doesn't exist)
print(person.get("phone", "N/A"))  # N/A (custom default)
```

> **Tip:** Use `.get()` when you're not sure if a key exists. `person["phone"]` would crash your program if "phone" isn't in the dictionary.

## Adding and Updating

```python
person = {"name": "Alice", "age": 30}

# Add a new key-value pair
person["city"] = "Vienna"
person["email"] = "alice@example.com"

# Update an existing value
person["age"] = 31

print(person)
# {"name": "Alice", "age": 31, "city": "Vienna", "email": "alice@example.com"}

# Update multiple values at once
person.update({"age": 32, "phone": "555-1234"})
```

## Removing Items

```python
person = {"name": "Alice", "age": 30, "city": "Vienna"}

# Remove by key and get the value
age = person.pop("age")
print(age)        # 30
print(person)     # {"name": "Alice", "city": "Vienna"}

# Remove by key (no return value)
del person["city"]

# Remove and get the last inserted item
last = person.popitem()

# Clear everything
person.clear()
```

## Checking if a Key Exists

```python
person = {"name": "Alice", "age": 30}

# Check for a key
print("name" in person)      # True
print("phone" in person)     # False
print("phone" not in person) # True

# Common pattern
if "email" in person:
    print(person["email"])
else:
    print("No email on file")
```

## Looping Through Dictionaries

```python
person = {"name": "Alice", "age": 30, "city": "Vienna"}

# Loop through keys (default)
for key in person:
    print(key)          # name, age, city

# Loop through values
for value in person.values():
    print(value)        # Alice, 30, Vienna

# Loop through both keys and values
for key, value in person.items():
    print(f"{key}: {value}")
# name: Alice
# age: 30
# city: Vienna
```

## Dictionary Methods

| Method | What It Does | Example |
|--------|-------------|---------|
| `.get(key, default)` | Get value safely | `d.get("x", 0)` |
| `.keys()` | All keys | `list(d.keys())` |
| `.values()` | All values | `list(d.values())` |
| `.items()` | All key-value pairs | `list(d.items())` |
| `.update(other)` | Merge another dict in | `d.update({"x": 1})` |
| `.pop(key)` | Remove and return value | `d.pop("x")` |
| `.clear()` | Remove everything | `d.clear()` |
| `.copy()` | Shallow copy | `d2 = d.copy()` |

## Practical Examples

### Word Counter

```python
text = "the cat sat on the mat the cat"
word_count = {}

for word in text.split():
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

print(word_count)
# {"the": 3, "cat": 2, "sat": 1, "on": 1, "mat": 1}
```

A shorter version using `.get()`:

```python
for word in text.split():
    word_count[word] = word_count.get(word, 0) + 1
```

### Student Grades

```python
grades = {
    "Alice": [90, 85, 92],
    "Bob": [78, 82, 80],
    "Charlie": [95, 88, 91]
}

for student, scores in grades.items():
    average = sum(scores) / len(scores)
    print(f"{student}: {average:.1f}")
# Alice: 89.0
# Bob: 80.0
# Charlie: 91.3
```

### Config / Settings

```python
config = {
    "debug": False,
    "max_retries": 3,
    "timeout": 30,
    "database": {
        "host": "localhost",
        "port": 5432,
        "name": "myapp"
    }
}

# Access nested values
db_host = config["database"]["host"]
print(db_host)    # localhost
```

## Nested Dictionaries

Dictionaries can contain other dictionaries:

```python
users = {
    "alice": {
        "name": "Alice Smith",
        "age": 30,
        "hobbies": ["reading", "coding"]
    },
    "bob": {
        "name": "Bob Jones",
        "age": 25,
        "hobbies": ["gaming", "cooking"]
    }
}

print(users["alice"]["name"])         # Alice Smith
print(users["bob"]["hobbies"][0])     # gaming
```

## Dictionary Comprehensions

Like list comprehensions, but for dictionaries:

```python
# Create a dictionary of squares
squares = {x: x**2 for x in range(6)}
print(squares)    # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Filter a dictionary
scores = {"Alice": 85, "Bob": 62, "Charlie": 91, "Diana": 58}
passing = {name: score for name, score in scores.items() if score >= 70}
print(passing)    # {"Alice": 85, "Charlie": 91}

# Swap keys and values
original = {"a": 1, "b": 2, "c": 3}
flipped = {v: k for k, v in original.items()}
print(flipped)    # {1: "a", 2: "b", 3: "c"}
```

## Sets (Bonus)

A set is an unordered collection with **no duplicates**. Think of it as a bag where each item can only appear once:

```python
# Creating sets
colors = {"red", "green", "blue"}
numbers = set([1, 2, 2, 3, 3, 3])
print(numbers)    # {1, 2, 3} (duplicates removed)

# Useful for removing duplicates
names = ["Alice", "Bob", "Alice", "Charlie", "Bob"]
unique = list(set(names))
print(unique)    # ["Alice", "Bob", "Charlie"] (order may vary)

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)     # {1, 2, 3, 4, 5, 6} (union - all items)
print(a & b)     # {3, 4} (intersection - items in both)
print(a - b)     # {1, 2} (difference - in a but not b)
```

> **Key takeaway:** Dictionaries are perfect for storing related data with meaningful keys. Use them for configs, lookups, counters, and any time you need to associate one thing with another. They're one of the most-used data structures in Python - learn them well.
