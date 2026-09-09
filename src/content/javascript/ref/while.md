# While Loop

Repeat code as long as a condition is true.

## Syntax

```javascript
// while — checks condition before each iteration
while (condition) {
  // code
}

// do...while — runs at least once, checks after
do {
  // code
} while (condition);
```

## Key Points

- `while` checks the condition first; may never run
- `do...while` runs the body first, then checks; always runs at least once
- Make sure the condition eventually becomes false to avoid infinite loops
- `break` and `continue` work the same as in `for` loops

## Examples

```javascript
// basic while
let count = 0;
while (count < 5) {
  console.log(count); // 0, 1, 2, 3, 4
  count++;
}

// do...while (runs at least once)
let input;
do {
  input = prompt("Enter 'yes':");
} while (input !== "yes");

// while with break
let i = 0;
while (true) {
  if (i >= 5) break;
  console.log(i);
  i++;
}

// while with continue
let n = 0;
while (n < 10) {
  n++;
  if (n % 2 === 0) continue;
  console.log(n); // 1, 3, 5, 7, 9
}

// difference: while vs do...while
let x = 10;

while (x < 5) {
  console.log("while:", x); // never runs
}

do {
  console.log("do-while:", x); // runs once: 10
} while (x < 5);
```

## Common Patterns

```javascript
// process until condition met
let total = 0;
let num = 1;
while (total < 100) {
  total += num;
  num++;
}
console.log(`Sum reached ${total} after ${num - 1} numbers`);

// read through a data structure
let node = linkedList.head;
while (node !== null) {
  console.log(node.value);
  node = node.next;
}

// countdown
let seconds = 5;
while (seconds > 0) {
  console.log(seconds);
  seconds--;
}
console.log("Go!");

// wait for valid input
let value;
do {
  value = parseInt(prompt("Enter a number 1-10:"));
} while (isNaN(value) || value < 1 || value > 10);
```
