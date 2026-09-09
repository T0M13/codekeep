---
title: Arrays
---

# Arrays

Arrays are ordered lists of values. They're one of the most-used data structures in JavaScript.

## Creating Arrays

```javascript
const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, null];
const empty = [];
```

## Accessing & Modifying

```javascript
const arr = ["a", "b", "c", "d"];

arr[0]           // "a" (first item)
arr[arr.length - 1]  // "d" (last item)
arr[1] = "B";    // Change second item
arr.length       // 4
```

## Adding & Removing

```javascript
const arr = [1, 2, 3];

arr.push(4);        // Add to end → [1,2,3,4]
arr.pop();          // Remove from end → [1,2,3]
arr.unshift(0);     // Add to start → [0,1,2,3]
arr.shift();        // Remove from start → [1,2,3]
arr.splice(1, 1);   // Remove 1 item at index 1 → [1,3]
```

## Essential Methods

### map — Transform every item

```javascript
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
// [2, 4, 6, 8]
```

### filter — Keep items that match

```javascript
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(n => n % 2 === 0);
// [2, 4, 6]
```

### reduce — Combine into single value

```javascript
const nums = [1, 2, 3, 4];
const sum = nums.reduce((total, n) => total + n, 0);
// 10
```

### find — First match

```javascript
const users = [{name: "Alice", age: 25}, {name: "Bob", age: 30}];
const user = users.find(u => u.name === "Bob");
// {name: "Bob", age: 30}
```

### some / every — Test conditions

```javascript
const nums = [1, 2, 3, 4, 5];
nums.some(n => n > 4);   // true (at least one)
nums.every(n => n > 0);  // true (all of them)
```

### forEach — Loop without returning

```javascript
["a", "b", "c"].forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
```

## Spread & Destructuring

```javascript
// Spread
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b];  // [1, 2, 3, 4]
const copy = [...a];            // [1, 2] (shallow copy)

// Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]
```

## Chaining Methods

```javascript
const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .filter(n => n % 2 === 0)  // [2, 4, 6, 8, 10]
  .map(n => n * n)            // [4, 16, 36, 64, 100]
  .reduce((sum, n) => sum + n, 0);  // 220
```

```challenge
@title Array methods
@description Given an array of numbers, use filter to get only numbers > 5, then map to double them, then log the result.
@language javascript
@starter const numbers = [2, 4, 6, 8, 10, 12];

const result = numbers
  .filter(n => n > 5)
  .map(n => /* double n here */);

console.log(result);

@expected 12,16,20,24
```
