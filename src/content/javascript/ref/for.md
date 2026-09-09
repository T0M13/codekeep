# For Loop

Repeat code a specific number of times.

## Syntax

```javascript
for (initialization; condition; update) {
  // code to repeat
}
```

## Key Points

- Three parts: initialization (runs once), condition (checked before each iteration), update (runs after each iteration)
- Any of the three parts can be omitted (but semicolons are required)
- `break` exits the loop entirely
- `continue` skips to the next iteration
- Use `let` in initialization to scope the variable to the loop

## Examples

```javascript
// basic for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// counting backwards
for (let i = 10; i > 0; i--) {
  console.log(i); // 10, 9, 8, ... 1
}

// step by 2
for (let i = 0; i <= 10; i += 2) {
  console.log(i); // 0, 2, 4, 6, 8, 10
}

// iterating over an array
let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// break — exit loop early
for (let i = 0; i < 100; i++) {
  if (i === 5) break;
  console.log(i); // 0, 1, 2, 3, 4
}

// continue — skip iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0, 1, 3, 4
}

// nested loops
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    console.log(`${row},${col}`);
  }
}

// labeled break (exit outer loop)
outer:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log(i, j);
  }
}
```

## Common Patterns

```javascript
// loop through array in reverse
let arr = [1, 2, 3, 4, 5];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]); // 5, 4, 3, 2, 1
}

// find first match
let users = ["Alice", "Bob", "Charlie"];
let found = null;
for (let i = 0; i < users.length; i++) {
  if (users[i] === "Bob") {
    found = users[i];
    break;
  }
}

// build a string
let result = "";
for (let i = 1; i <= 5; i++) {
  result += i + " ";
}
console.log(result.trim()); // "1 2 3 4 5"
```
