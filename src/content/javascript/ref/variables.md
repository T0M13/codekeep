# Variables

Declare variables using `var`, `let`, or `const`.

## Syntax

```javascript
var name = "Alice";
let age = 25;
const PI = 3.14159;
```

## Key Points

- `var` is function-scoped, `let` and `const` are block-scoped
- `var` declarations are hoisted (moved to top of scope), `let`/`const` are not accessible before declaration (temporal dead zone)
- `const` cannot be reassigned after declaration
- `const` objects/arrays can still have their contents modified
- `let` and `const` cannot be redeclared in the same scope
- `var` can be redeclared without error

## Examples

```javascript
// var is function-scoped
function example() {
  var x = 10;
  if (true) {
    var x = 20; // same variable!
    console.log(x); // 20
  }
  console.log(x); // 20
}

// let is block-scoped
function example2() {
  let x = 10;
  if (true) {
    let x = 20; // different variable
    console.log(x); // 20
  }
  console.log(x); // 10
}

// const must be initialized
const name = "Alice";
// name = "Bob";  // TypeError: Assignment to constant variable

// const with objects — contents can change
const user = { name: "Alice" };
user.name = "Bob"; // this is fine
// user = {};      // TypeError: Assignment to constant variable

// const with arrays
const nums = [1, 2, 3];
nums.push(4); // fine
// nums = [];  // TypeError
```

## Common Patterns

```javascript
// use const by default
const maxRetries = 3;
const API_URL = "https://api.example.com";

// use let when value will change
let count = 0;
count++;

// loop counters use let
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// avoid var in modern code
```
