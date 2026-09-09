# Data Types

JavaScript has 8 data types: 7 primitives and 1 non-primitive.

## Syntax

```javascript
// Primitives
let str = "hello";          // String
let num = 42;               // Number
let bool = true;            // Boolean
let nothing = null;         // Null
let notDefined = undefined; // Undefined
let sym = Symbol("id");     // Symbol
let big = 9007199254740991n; // BigInt

// Non-primitive
let obj = { key: "value" }; // Object
```

## Key Points

- `typeof` returns the type as a string
- `typeof null` returns `"object"` (historical bug)
- `typeof` for functions returns `"function"` (technically objects)
- Numbers are 64-bit floating point (no separate int/float)
- `NaN` is a Number (`typeof NaN === "number"`)
- `undefined` means declared but not assigned; `null` means intentionally empty
- Symbols are unique identifiers
- BigInt handles integers larger than `Number.MAX_SAFE_INTEGER`

## Examples

```javascript
// typeof operator
typeof "hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (bug!)
typeof {}          // "object"
typeof []          // "object"
typeof Symbol()    // "symbol"
typeof 10n         // "bigint"
typeof function(){} // "function"

// checking for null
let val = null;
val === null; // true

// checking for array
Array.isArray([1, 2]); // true
Array.isArray({});      // false

// NaN
typeof NaN;        // "number"
isNaN("hello");    // true
Number.isNaN(NaN); // true (stricter)

// Number limits
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_SAFE_INTEGER; // -9007199254740991

// BigInt
const big = 123456789012345678901234567890n;
typeof big; // "bigint"
// Cannot mix BigInt and Number
// big + 1;  // TypeError
big + 1n;    // works
```

## Common Patterns

```javascript
// type checking
function processValue(val) {
  if (val === null) return "null";
  if (Array.isArray(val)) return "array";
  return typeof val;
}

// default values for undefined
let config = undefined;
let setting = config ?? "default"; // "default"

// checking if a variable exists
if (typeof myVar !== "undefined") {
  // myVar exists
}
```
