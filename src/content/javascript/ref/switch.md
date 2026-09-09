# Switch

Evaluate an expression and run the matching case block.

## Syntax

```javascript
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // code if no case matches
}
```

## Key Points

- Uses strict comparison (`===`) to match cases
- `break` stops execution; without it, code "falls through" to the next case
- `default` is optional and runs when no case matches
- `default` can be placed anywhere, but conventionally goes last
- Multiple cases can share the same code block (fall-through)

## Examples

```javascript
// basic switch
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Almost weekend");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek");
}

// fall-through (no break)
let num = 2;
switch (num) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");   // runs
  case 3:
    console.log("Three"); // also runs (fall-through!)
    break;
  case 4:
    console.log("Four");  // stopped by break above
}

// grouped cases
let fruit = "apple";
switch (fruit) {
  case "apple":
  case "pear":
  case "cherry":
    console.log("Temperate fruit");
    break;
  case "banana":
  case "mango":
    console.log("Tropical fruit");
    break;
}

// switch with return in a function
function getColor(status) {
  switch (status) {
    case "success": return "green";
    case "warning": return "yellow";
    case "error":   return "red";
    default:        return "gray";
  }
}
```

## Common Patterns

```javascript
// switch vs object lookup
// instead of a long switch:
function getDayName(num) {
  const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
  };
  return days[num] ?? "Invalid";
}

// switch(true) for range checks
let score = 85;
switch (true) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 80:
    console.log("B"); // runs
    break;
  case score >= 70:
    console.log("C");
    break;
  default:
    console.log("F");
}
```
