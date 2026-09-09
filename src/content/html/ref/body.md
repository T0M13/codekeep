# &lt;body&gt;

Contains all the visible content of an HTML document.

## Syntax

```html
<body>
  <h1>Hello World</h1>
  <p>This is visible content.</p>
</body>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `onload` | Script to run when the page finishes loading | `onload="init()"` |
| `onunload` | Script to run when the page is unloaded | `onunload="cleanup()"` |

## Key Points

- Only one `<body>` per document
- Must be the second child of `<html>` (after `<head>`)
- All visible page content goes inside `<body>`
- Supports all global attributes (`class`, `id`, `style`, etc.)
- Legacy attributes like `bgcolor` and `text` are deprecated — use CSS instead

## Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <header>
    <h1>Welcome</h1>
  </header>
  <main>
    <p>This is the main content of the page.</p>
  </main>
  <footer>
    <p>&copy; 2026</p>
  </footer>
</body>
</html>
```
