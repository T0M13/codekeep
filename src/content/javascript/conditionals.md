---
title: Conditionals
---

# Conditionals

Conditionals let your code make decisions based on conditions.

## if / else if / else

```javascript
const temp = 25;

if (temp > 30) {
  console.log("It's hot!");
} else if (temp > 20) {
  console.log("It's nice.");
} else if (temp > 10) {
  console.log("It's cool.");
} else {
  console.log("It's cold!");
}
```

## switch

Best for checking one variable against many values:

```javascript
const day = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Unknown day");
}
```

> Don't forget `break`! Without it, execution falls through to the next case.

## Truthy & Falsy

In JavaScript, values have a "truthiness":

**Falsy values** (evaluate to false):
```javascript
false, 0, -0, 0n, "", null, undefined, NaN
```

**Everything else is truthy**, including:
```javascript
"0", " ", [], {}, "false"  // All truthy!
```

```javascript
const name = "";
if (name) {
  console.log(`Hello, ${name}`);
} else {
  console.log("No name provided");  // This runs
}
```

## Guard Clauses

Instead of deep nesting, return early:

```javascript
// Nested (harder to read)
function processUser(user) {
  if (user) {
    if (user.active) {
      if (user.age >= 18) {
        return `Welcome, ${user.name}`;
      }
    }
  }
  return "Access denied";
}

// Guard clauses (cleaner)
function processUser(user) {
  if (!user) return "Access denied";
  if (!user.active) return "Access denied";
  if (user.age < 18) return "Access denied";
  return `Welcome, ${user.name}`;
}
```

```challenge
@title Grade calculator
@description Write a function `getGrade(score)` that returns: "A" for 90+, "B" for 80+, "C" for 70+, "D" for 60+, "F" otherwise. Log getGrade(85).
@language javascript
@starter function getGrade(score) {
  if (score >= 90) return "A";
  // Add more conditions for "B", "C", "D"
  // What should the default return be?
}

console.log(getGrade(85));
@expected B
```
