# Type Conversion

Convert between types explicitly or let JavaScript do it implicitly.

## Syntax

```javascript
// Explicit conversion
String(123)       // "123"
Number("42")      // 42
Boolean(1)        // true
parseInt("42px")  // 42
parseFloat("3.14") // 3.14
```

## Key Points

- Explicit (manual) conversion uses `String()`, `Number()`, `Boolean()`, `parseInt()`, `parseFloat()`
- Implicit (automatic) coercion happens with operators like `+`, `==`, `if()`
- `+` with a string converts the other operand to string
- `Number("")` is `0`, `Number(null)` is `0`, `Number(undefined)` is `NaN`
- `parseInt` parses from left until it hits a non-numeric character
- `parseInt` takes an optional radix (base): `parseInt("0xFF", 16)`
- Falsy values: `false`, `0`, `-0`, `""`, `null`, `undefined`, `NaN`

## Examples

```javascript
// To String
String(123);      // "123"
String(true);     // "true"
String(null);     // "null"
String(undefined); // "undefined"
(42).toString();  // "42"
(255).toString(16); // "ff" (hex)

// To Number
Number("42");     // 42
Number("3.14");   // 3.14
Number("");       // 0
Number("hello");  // NaN
Number(true);     // 1
Number(false);    // 0
Number(null);     // 0
Number(undefined); // NaN

// parseInt and parseFloat
parseInt("42px");    // 42
parseInt("3.14");    // 3
parseInt("0xFF", 16); // 255
parseInt("hello");   // NaN
parseFloat("3.14px"); // 3.14
parseFloat("1.2.3");  // 1.2

// To Boolean
Boolean(0);         // false
Boolean("");        // false
Boolean(null);      // false
Boolean(undefined); // false
Boolean(NaN);       // false
Boolean(1);         // true
Boolean("hello");   // true
Boolean([]);        // true (empty array is truthy!)
Boolean({});        // true (empty object is truthy!)

// Quick conversion shortcuts
+"42"       // 42 (unary + converts to number)
+""         // 0
+true       // 1
!!"hello"   // true (double NOT converts to boolean)
!!0         // false
"" + 42     // "42" (concatenation converts to string)
```

## Common Patterns

```javascript
// safely parse user input
let input = "42abc";
let num = parseInt(input, 10); // always pass radix 10
if (isNaN(num)) {
  console.log("Invalid number");
}

// convert array of strings to numbers
let strings = ["1", "2", "3"];
let numbers = strings.map(Number); // [1, 2, 3]

// implicit coercion gotchas
"5" + 3;    // "53" (string wins with +)
"5" - 3;    // 2 (- forces number)
"5" * "2";  // 10
true + true; // 2
[] + [];     // "" (empty string)
{} + [];     // 0 (block + array)
```
