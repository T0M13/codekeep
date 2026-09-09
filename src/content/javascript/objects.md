---
title: Objects
---

# Objects

Objects store data as key-value pairs. They're the backbone of JavaScript.

## Creating Objects

```javascript
const user = {
  name: "Alice",
  age: 25,
  isAdmin: true,
  hobbies: ["reading", "coding"],
  address: {
    city: "Vienna",
    country: "Austria"
  }
};
```

## Accessing Properties

```javascript
// Dot notation
user.name          // "Alice"
user.address.city  // "Vienna"

// Bracket notation (for dynamic keys)
user["name"]       // "Alice"
const key = "age";
user[key]          // 25
```

## Modifying Objects

```javascript
user.age = 26;              // Update
user.email = "a@b.com";     // Add new property
delete user.isAdmin;        // Remove property
```

## Object Methods

```javascript
const calculator = {
  value: 0,
  add(n) {
    this.value += n;
    return this;  // Enable chaining
  },
  result() {
    return this.value;
  }
};

calculator.add(5).add(3).result();  // 8
```

## Useful Static Methods

```javascript
const obj = { a: 1, b: 2, c: 3 };

Object.keys(obj)     // ["a", "b", "c"]
Object.values(obj)   // [1, 2, 3]
Object.entries(obj)  // [["a",1], ["b",2], ["c",3]]

// Check if key exists
"a" in obj           // true
obj.hasOwnProperty("a")  // true
```

## Destructuring

```javascript
const { name, age } = user;
console.log(name);  // "Alice"

// With renaming
const { name: userName } = user;

// With defaults
const { role = "user" } = user;

// Nested
const { address: { city } } = user;
```

## Spread Operator

```javascript
// Copy
const copy = { ...user };

// Merge
const updated = { ...user, age: 26, email: "new@email.com" };

// Shallow only! Nested objects are still referenced
```

## Optional Chaining

```javascript
const config = {};
config.database?.host      // undefined (no error)
config.getPort?.()         // undefined (safe method call)
```

```challenge
@title Object practice
@description Create a `person` object with name, age, and a greet() method that returns "Hi, I'm [name]!". Destructure the name, then log the greeting.
@language javascript
@starter // Create person object with greet method
// Destructure name
// Log the greeting

@expected Hi, I'm
```
