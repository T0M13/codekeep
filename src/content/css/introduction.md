---
title: What is CSS?
---

# What is CSS?

**CSS** (Cascading Style Sheets) controls how HTML elements look on screen. Without CSS, every website would be plain black text on a white background.

## Three Ways to Add CSS

### 1. Inline Styles

```html
<p style="color: blue; font-size: 18px;">Blue text</p>
```

### 2. Internal Stylesheet

```html
<head>
  <style>
    p { color: blue; font-size: 18px; }
  </style>
</head>
```

### 3. External Stylesheet (Best Practice)

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

## CSS Syntax

A CSS rule has a **selector** and a **declaration block**:

```css
selector {
  property: value;
  property: value;
}
```

Example:

```css
h1 {
  color: #0ea5e9;
  font-size: 2rem;
  font-weight: bold;
}
```

## The Cascade

When multiple rules target the same element, CSS uses specificity to decide which wins:

1. `!important` (avoid using this)
2. Inline styles (`style="..."`)
3. ID selectors (`#myId`)
4. Class selectors (`.myClass`)
5. Element selectors (`p`, `div`)

```challenge
@title Style a heading
@description Add a style tag that makes all h1 elements blue (#0ea5e9), 3rem size, and centered.
@language html
@starter <!DOCTYPE html>
<html>
<head>
  <style>
    /* Style the h1 here */

  </style>
</head>
<body>
  <h1>Styled Heading</h1>
</body>
</html>
@expected text-align: center
```
