# For...Of

Iterate over values of arrays, strings, and other iterables.

## Syntax

```javascript
for (const element of iterable) {
  // code
}
```

## Key Points

- Iterates over **values** (not keys/indices)
- Works with arrays, strings, Maps, Sets, NodeLists, arguments, generators
- Does **not** work with plain objects (use `for...in` or `Object.keys()` instead)
- You can use `let` or `const` for the loop variable
- Supports `break` and `continue`

## Examples

```javascript
// array
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit); // "apple", "banana", "cherry"
}

// string (iterates characters)
for (const char of "Hello") {
  console.log(char); // "H", "e", "l", "l", "o"
}

// with index using entries()
const colors = ["red", "green", "blue"];
for (const [index, color] of colors.entries()) {
  console.log(`${index}: ${color}`);
}

// Set
const uniqueNums = new Set([1, 2, 3, 2, 1]);
for (const num of uniqueNums) {
  console.log(num); // 1, 2, 3
}

// Map
const userMap = new Map([
  ["name", "Alice"],
  ["age", 25]
]);
for (const [key, value] of userMap) {
  console.log(`${key}: ${value}`);
}

// break and continue
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  if (num === 2) continue; // skip 2
  if (num === 4) break;    // stop at 4
  console.log(num);        // 1, 3
}

// NodeList (from DOM)
const items = document.querySelectorAll("li");
for (const item of items) {
  item.classList.add("highlight");
}
```

## Common Patterns

```javascript
// sum an array
const prices = [9.99, 14.50, 3.25];
let total = 0;
for (const price of prices) {
  total += price;
}

// find first match
let found = null;
for (const item of items) {
  if (item.status === "active") {
    found = item;
    break;
  }
}

// iterate over arguments
function logAll() {
  for (const arg of arguments) {
    console.log(arg);
  }
}

// async iteration
async function readLines(stream) {
  for await (const line of stream) {
    console.log(line);
  }
}
```
