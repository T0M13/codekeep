---
title: Loops
---

# Loops

Loops repeat code until a condition is met.

## for Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}
```

## for...of (Iterating Values)

Best for arrays and iterable objects:

```javascript
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// With index using entries()
for (const [i, color] of colors.entries()) {
  console.log(`${i}: ${color}`);
}
```

## for...in (Iterating Keys)

Best for objects:

```javascript
const user = { name: "Alice", age: 25, role: "admin" };
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

## while Loop

```javascript
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
```

## do...while Loop

Runs at least once:

```javascript
let input;
do {
  input = "yes"; // In reality, this would be user input
} while (input !== "yes");
```

## break & continue

```javascript
// break — exit the loop
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);  // 0, 1, 2, 3, 4
}

// continue — skip to next iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);  // 0, 1, 3, 4
}
```

## Common Patterns

```javascript
// Sum an array
let sum = 0;
for (const num of [1, 2, 3, 4, 5]) {
  sum += num;
}
console.log(sum);  // 15

// Find first match
const users = ["Alice", "Bob", "Charlie"];
let found = null;
for (const user of users) {
  if (user.startsWith("B")) {
    found = user;
    break;
  }
}
```

```challenge
@title FizzBuzz
@description Loop from 1 to 15. For multiples of 3 log "Fizz", multiples of 5 log "Buzz", multiples of both log "FizzBuzz", otherwise log the number.
@language javascript
@starter // FizzBuzz from 1 to 15

@expected FizzBuzz
```
