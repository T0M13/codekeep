---
title: What is HTML?
---

# What is HTML?

**HTML** (HyperText Markup Language) is the standard language for creating web pages. Every website you visit is built with HTML at its core.

HTML describes the **structure** of a web page using a series of elements. These elements tell the browser how to display the content.

## Your First HTML Page

Every HTML page has a basic structure:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first web page.</p>
</body>
</html>
```

Let's break it down:

- `<!DOCTYPE html>` — Tells the browser this is an HTML5 document
- `<html>` — The root element that wraps everything
- `<head>` — Contains metadata (title, styles, scripts)
- `<title>` — Sets the browser tab title
- `<body>` — Contains all visible content

> HTML elements are the building blocks. You'll use them for everything — text, images, links, forms, and more.

## Key Concepts

| Concept | Description |
|---------|-------------|
| Element | A complete tag with content: `<p>text</p>` |
| Tag | The markup syntax: `<p>` (opening) and `</p>` (closing) |
| Attribute | Extra info on an element: `<a href="url">` |
| Nesting | Elements inside elements: `<div><p>text</p></div>` |

## Try It Yourself

```challenge
@title Create a heading
@description Write an HTML page with an h1 heading that says "Hello, CodeKeep!" and a paragraph below it.
@language html
@starter <!DOCTYPE html>
<html>
<body>
  <h1>Replace this text</h1>
  <p></p>
</body>
</html>
@expected hello, codekeep!
```
