---
title: Variables & Data Types
---

# Variables & Data Types

Variables store data that your program can use and manipulate.

## Declaring Variables

```javascript
let name = "Alice";       // Can be reassigned
const age = 25;           // Cannot be reassigned
var old = "avoid this";   // Old way, function-scoped (avoid)
```

> **Rule of thumb:** Use `const` by default. Use `let` only when you need to reassign.

## Data Types

### Primitive Types

```javascript
// String
const greeting = "Hello";
const name = 'World';
const template = `Hello, ${name}!`;  // Template literal

// Number (integers and decimals)
const count = 42;
const price = 19.99;

// Boolean
const isActive = true;
const isDeleted = false;

// Undefined
let value;  // undefined (declared but no value)

// Null
const empty = null;  // Intentionally empty

// BigInt (very large numbers)
const huge = 9007199254740991n;

// Symbol (unique identifier)
const id = Symbol("id");
```

### typeof Operator

```javascript
typeof "hello"    // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof null       // "object" (this is a known JS quirk!)
typeof []         // "object"
typeof {}         // "object"
```

## String Methods

```javascript
const str = "Hello, World!";

str.length          // 13
str.toUpperCase()   // "HELLO, WORLD!"
str.toLowerCase()   // "hello, world!"
str.includes("World")  // true
str.startsWith("Hello") // true
str.slice(0, 5)     // "Hello"
str.split(", ")     // ["Hello", "World!"]
str.trim()          // Removes whitespace from both ends
str.replace("World", "JS")  // "Hello, JS!"
```

## Template Literals

```javascript
const name = "CodeKeep";
const year = 2026;

// String concatenation (old way)
const old = "Welcome to " + name + " in " + year;

// Template literals (modern way)
const modern = `Welcome to ${name} in ${year}`;
const multiline = `
  This is
  a multiline
  string
`;
```

## Type Conversion

```javascript
// To string
String(42)        // "42"
(42).toString()   // "42"

// To number
Number("42")      // 42
parseInt("42px")  // 42
parseFloat("3.14") // 3.14
+"42"             // 42 (unary plus trick)

// To boolean
Boolean(0)        // false
Boolean("")       // false
Boolean(null)     // false
Boolean("hello")  // true
Boolean(42)       // true
```

```challenge
@title Variable practice
@description Create a const `name` with your name, a let `score` starting at 0, then increment score by 10. Log both using a template literal: "Name has Score points"
@language javascript
@starter // Create name and score variables
// Increment score by 10
// Log: "[name] has [score] points"

@expected points
```
