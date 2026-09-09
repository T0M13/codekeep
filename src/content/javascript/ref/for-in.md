# For...In

Iterate over the enumerable property keys of an object.

## Syntax

```javascript
for (const key in object) {
  // code
}
```

## Key Points

- Iterates over **keys** (property names), not values
- Includes inherited enumerable properties from the prototype chain
- Use `hasOwnProperty()` or `Object.hasOwn()` to filter inherited props
- **Do not use on arrays** — order is not guaranteed, and it iterates all enumerable properties (including non-index ones)
- For arrays, use `for...of`, `forEach`, or a regular `for` loop instead

## Examples

```javascript
// basic object iteration
const user = { name: "Alice", age: 25, city: "Vienna" };
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
// "name: Alice"
// "age: 25"
// "city: Vienna"

// inherited properties problem
function Animal(name) {
  this.name = name;
}
Animal.prototype.type = "animal";

const dog = new Animal("Rex");
for (const key in dog) {
  console.log(key); // "name", "type" (includes prototype!)
}

// filter with hasOwn
for (const key in dog) {
  if (Object.hasOwn(dog, key)) {
    console.log(key); // only "name"
  }
}

// why NOT to use on arrays
const arr = [10, 20, 30];
arr.customProp = "oops";

for (const key in arr) {
  console.log(key); // "0", "1", "2", "customProp"
  // keys are strings, not numbers
  // includes non-index properties
}

// correct way for arrays
for (const value of arr) {
  console.log(value); // 10, 20, 30 (no customProp)
}
```

## Common Patterns

```javascript
// copy own properties
const source = { a: 1, b: 2, c: 3 };
const copy = {};
for (const key in source) {
  if (Object.hasOwn(source, key)) {
    copy[key] = source[key];
  }
}

// check if object has any properties
function isEmpty(obj) {
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) return false;
  }
  return true;
}

// better alternatives to for...in
const obj = { a: 1, b: 2, c: 3 };

// Object.keys — own keys only
Object.keys(obj).forEach(key => console.log(key));

// Object.entries — own key-value pairs
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
```
