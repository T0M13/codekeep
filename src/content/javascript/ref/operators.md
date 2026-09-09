# Operators

Arithmetic, comparison, logical, and special operators.

## Syntax

```javascript
// Arithmetic
a + b    // addition
a - b    // subtraction
a * b    // multiplication
a / b    // division
a % b    // modulus (remainder)
a ** b   // exponentiation

// Comparison
a == b   // equal (loose, with type coercion)
a === b  // strict equal (no coercion)
a != b   // not equal (loose)
a !== b  // strict not equal
a > b    // greater than
a < b    // less than
a >= b   // greater than or equal
a <= b   // less than or equal

// Logical
a && b   // AND
a || b   // OR
!a       // NOT

// Special
a ? b : c    // ternary
a ?? b       // nullish coalescing
a?.b         // optional chaining
```

## Key Points

- `==` converts types before comparing; `===` does not
- Always prefer `===` over `==` to avoid unexpected coercion
- `&&` returns the first falsy value, or the last value if all truthy
- `||` returns the first truthy value, or the last value if all falsy
- `??` returns the right side only if left is `null` or `undefined` (not `0` or `""`)
- `||` treats `0`, `""`, `false`, `null`, `undefined`, `NaN` as falsy

## Examples

```javascript
// == vs ===
"5" == 5;    // true (coerces string to number)
"5" === 5;   // false (different types)
null == undefined;  // true
null === undefined; // false
0 == false;  // true
0 === false; // false

// Arithmetic
10 % 3;      // 1
2 ** 10;     // 1024

// Increment / Decrement
let x = 5;
x++;  // x is now 6 (returns 5)
++x;  // x is now 7 (returns 7)

// Assignment operators
let a = 10;
a += 5;  // a = 15
a -= 3;  // a = 12
a *= 2;  // a = 24
a /= 4;  // a = 6
a ??= 7; // a stays 6 (not null/undefined)

// Ternary
let age = 20;
let status = age >= 18 ? "adult" : "minor"; // "adult"

// Nullish coalescing (??)
let val1 = 0 ?? "default";     // 0 (0 is not null/undefined)
let val2 = 0 || "default";     // "default" (0 is falsy)
let val3 = null ?? "default";  // "default"
let val4 = undefined ?? "fallback"; // "fallback"

// Optional chaining
let user = { address: { city: "Vienna" } };
user?.address?.city;    // "Vienna"
user?.phone?.number;    // undefined (no error)
user?.getName?.();      // undefined (safe method call)
```

## Common Patterns

```javascript
// short-circuit evaluation
let isAdmin = user && user.role === "admin";

// default values with ||
let name = inputName || "Anonymous";

// default values with ?? (safer for 0 and "")
let count = inputCount ?? 0;

// toggle boolean
let active = true;
active = !active; // false

// chained ternary (use sparingly)
let grade = score >= 90 ? "A"
          : score >= 80 ? "B"
          : score >= 70 ? "C"
          : "F";
```
