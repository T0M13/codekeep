# If...Else

Conditional statements execute code based on a condition.

## Syntax

```javascript
if (condition) {
  // runs if condition is true
} else if (anotherCondition) {
  // runs if first is false and this is true
} else {
  // runs if all conditions are false
}
```

## Key Points

- Condition is converted to boolean (truthy/falsy)
- Falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`
- Everything else is truthy (including `[]`, `{}`, `"0"`)
- Curly braces are optional for single statements, but always recommended
- The ternary operator `? :` is a shorthand for simple if/else

## Examples

```javascript
// basic if
let age = 20;
if (age >= 18) {
  console.log("Adult");
}

// if...else
let score = 45;
if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// if...else if...else
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}

// ternary operator (shorthand)
let status = age >= 18 ? "adult" : "minor";

// nested ternary (use sparingly)
let msg = score >= 90 ? "Excellent"
        : score >= 50 ? "Pass"
        : "Fail";

// truthy/falsy checks
let name = "";
if (name) {
  console.log("Has name");
} else {
  console.log("No name"); // this runs
}

// checking for null/undefined
let user = null;
if (user) {
  console.log(user.name); // skipped safely
}
```

## Common Patterns

```javascript
// guard clause — return early instead of nesting
function processUser(user) {
  if (!user) return;
  if (!user.email) return;
  // main logic here
  sendEmail(user.email);
}

// assign with condition
let greeting;
if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

// one-liner ternary for assignment
let fee = isMember ? "$2.00" : "$10.00";

// logical AND as short if
isLoggedIn && showDashboard();
```
