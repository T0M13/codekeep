---
title: Operators
---

# Operators

Operators perform operations on values and variables.

## Arithmetic

```javascript
5 + 3    // 8  (addition)
10 - 4   // 6  (subtraction)
3 * 4    // 12 (multiplication)
10 / 3   // 3.333... (division)
10 % 3   // 1  (remainder/modulo)
2 ** 3   // 8  (exponentiation)
```

## Assignment

```javascript
let x = 10;
x += 5;   // x = 15
x -= 3;   // x = 12
x *= 2;   // x = 24
x /= 4;   // x = 6
x %= 4;   // x = 2
x++;      // x = 3 (increment)
x--;      // x = 2 (decrement)
```

## Comparison

```javascript
5 == "5"    // true  (loose equality — converts types!)
5 === "5"   // false (strict equality — no conversion)
5 != "5"    // false
5 !== "5"   // true
5 > 3       // true
5 >= 5      // true
3 < 5       // true
3 <= 3      // true
```

> **Always use `===` and `!==`** to avoid confusing type coercion bugs.

## Logical

```javascript
true && true    // true  (AND — both must be true)
true || false   // true  (OR — at least one true)
!true           // false (NOT — flips the value)

// Short-circuit evaluation
const name = user && user.name;       // Safe access
const value = input || "default";     // Fallback value

// Nullish coalescing
const val = null ?? "fallback";  // "fallback"
const val2 = 0 ?? "fallback";   // 0 (only null/undefined trigger ??)
```

## Optional Chaining

```javascript
const user = { address: { city: "Vienna" } };
user.address?.city       // "Vienna"
user.phone?.number       // undefined (no error!)
user.getName?.()         // undefined (safe method call)
```

## Ternary Operator

```javascript
const age = 20;
const status = age >= 18 ? "adult" : "minor";
// "adult"
```

```challenge
@title Operator practice
@description Create a variable `score` = 85. Use a ternary to set `grade` to "Pass" if score >= 60, else "Fail". Log the grade.
@language javascript
@starter const score = 85;
// Use ternary to set grade
// Log the result

@expected Pass
```
