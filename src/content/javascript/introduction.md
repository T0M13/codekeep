---
title: What is JavaScript?
---

# What is JavaScript?

**JavaScript** (JS) is the programming language of the web. While HTML provides structure and CSS handles styling, JavaScript makes pages **interactive**.

## What Can JavaScript Do?

- Respond to user actions (clicks, typing, scrolling)
- Change HTML content and styles dynamically
- Validate forms before submission
- Fetch data from servers (APIs)
- Build full applications (frontend and backend)

## Adding JavaScript to HTML

### Inline (in HTML)
```html
<button onclick="alert('Hello!')">Click me</button>
```

### Internal (script tag)
```html
<script>
  console.log("Hello from JavaScript!");
</script>
```

### External (best practice)
```html
<script src="script.js"></script>
```

> Place `<script>` tags at the end of `<body>` or use `defer`:
> ```html
> <script src="script.js" defer></script>
> ```

## Console

The developer console is your best friend for learning JS:

```javascript
console.log("Hello, World!");     // Output text
console.warn("Warning!");         // Yellow warning
console.error("Error!");          // Red error
console.table([1, 2, 3]);        // Display as table
```

Open it with `F12` or `Ctrl+Shift+J` in your browser.

## Comments

```javascript
// Single line comment

/* Multi-line
   comment */
```

```challenge
@title Hello World
@description Write JavaScript that logs "Hello, CodeKeep!" to the console.
@language javascript
@starter console.log(/* your message here */);

@expected hello, codekeep!
```
