---
title: Functions
---

# Functions

Functions are reusable blocks of code. They're fundamental to JavaScript.

## Function Declaration

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));  // "Hello, Alice!"
```

## Function Expression

```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};
```

## Arrow Functions (Modern)

```javascript
// Full syntax
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Short syntax (single expression)
const greet = (name) => `Hello, ${name}!`;

// Single parameter (parentheses optional)
const double = n => n * 2;

// No parameters
const sayHi = () => "Hi!";
```

## Parameters & Arguments

```javascript
// Default parameters
function greet(name = "World") {
  return `Hello, ${name}!`;
}
greet();        // "Hello, World!"
greet("Alice"); // "Hello, Alice!"

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4);  // 10
```

## Scope

```javascript
const global = "I'm global";

function outer() {
  const outerVar = "I'm in outer";

  function inner() {
    const innerVar = "I'm in inner";
    console.log(global);    // Accessible
    console.log(outerVar);  // Accessible
    console.log(innerVar);  // Accessible
  }

  inner();
  // console.log(innerVar); // ERROR: not accessible
}
```

## Higher-Order Functions

Functions that take or return other functions:

```javascript
// Takes a function
function doTwice(fn) {
  fn();
  fn();
}
doTwice(() => console.log("Hello!"));

// Returns a function
function multiplier(factor) {
  return (n) => n * factor;
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5));  // 10
console.log(triple(5));  // 15
```

## Callback Pattern

```javascript
function fetchData(callback) {
  // Simulate async operation
  setTimeout(() => {
    callback("Data loaded!");
  }, 1000);
}

fetchData((result) => {
  console.log(result);  // "Data loaded!" (after 1 second)
});
```

```challenge
@title Write a function
@description Create an arrow function called `capitalize` that takes a string and returns it with the first letter uppercase and the rest lowercase. Test it with console.log.
@language javascript
@starter const capitalize = (str) => {
  const first = str[0].toUpperCase();
  const rest = str.slice(1); // What method makes this lowercase?
  return first + rest;
};

console.log(capitalize("hello"));
console.log(capitalize("WORLD"));
@expected Hello
```
