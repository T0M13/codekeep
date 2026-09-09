# Functions

Reusable blocks of code that perform a task.

## Syntax

```javascript
// Function declaration
function greet(name) {
  return "Hello, " + name;
}

// Function expression
const greet = function(name) {
  return "Hello, " + name;
};
```

## Key Points

- Declarations are hoisted (can be called before they appear in code)
- Expressions are **not** hoisted
- Functions without a `return` statement return `undefined`
- Parameters without arguments receive `undefined`
- Functions are objects and can be assigned to variables, passed as arguments, etc.

## Examples

```javascript
// declaration (hoisted)
sayHi(); // works!
function sayHi() {
  console.log("Hi");
}

// expression (NOT hoisted)
// greet(); // ReferenceError
const greet = function(name) {
  return `Hello, ${name}`;
};
greet("Alice"); // "Hello, Alice"

// default parameters
function createUser(name, role = "user") {
  return { name, role };
}
createUser("Alice");          // { name: "Alice", role: "user" }
createUser("Bob", "admin");   // { name: "Bob", role: "admin" }

// rest parameters (...args)
function sum(...numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}
sum(1, 2, 3, 4); // 10

// multiple return values (via array/object)
function getMinMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
}
const { min, max } = getMinMax([3, 1, 4, 1, 5]);

// functions as arguments
function doTwice(fn) {
  fn();
  fn();
}
doTwice(() => console.log("Hi")); // "Hi" "Hi"

// immediately invoked (IIFE)
(function() {
  console.log("Runs immediately");
})();
```

## Common Patterns

```javascript
// guard clause
function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

// factory function
function createCounter(start = 0) {
  let count = start;
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    getCount()  { return count; }
  };
}
const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2

// named function expression (useful for recursion)
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};
```
