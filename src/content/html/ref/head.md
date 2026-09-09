# &lt;head&gt;

Container for metadata about the HTML document. Not displayed on the page.

## Syntax

```html
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| None specific | The `<head>` element has no unique attributes | — |

## Key Points

- Must be the first child of `<html>`
- Contains `<title>`, `<meta>`, `<link>`, `<style>`, and `<script>` elements
- Only one `<head>` per document
- The `<title>` element is required inside `<head>`
- Content inside `<head>` is not rendered on the page

## Example

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <link rel="stylesheet" href="styles.css">
  <script src="app.js" defer></script>
</head>
<body>
  <p>Page content here</p>
</body>
</html>
```
