# &lt;script&gt;

Embeds or references JavaScript code in the document.

## Syntax

```html
<!-- External script -->
<script src="app.js"></script>

<!-- Inline script -->
<script>
  console.log("Hello World");
</script>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `src` | URL of an external script file | `src="app.js"` |
| `defer` | Execute after HTML is parsed (order preserved) | `defer` |
| `async` | Execute as soon as downloaded (no order guarantee) | `async` |
| `type` | Script type | `type="module"` |
| `crossorigin` | CORS setting | `crossorigin="anonymous"` |
| `nomodule` | Fallback for browsers that don't support modules | `nomodule` |

## Key Points

- Place before `</body>` or use `defer`/`async` in `<head>` to avoid blocking rendering
- `defer` — downloads in parallel, executes after parsing, preserves order
- `async` — downloads in parallel, executes immediately when ready, no order guarantee
- `type="module"` — treats the script as an ES module (deferred by default)
- The `<script>` tag must have a closing tag — it is not self-closing
- If `src` is set, any inline content is ignored

## Example

```html
<head>
  <!-- Deferred external script (recommended) -->
  <script src="app.js" defer></script>

  <!-- Async script (e.g., analytics) -->
  <script src="analytics.js" async></script>

  <!-- ES module -->
  <script type="module" src="main.js"></script>
</head>
<body>
  <h1>My Page</h1>

  <!-- Inline script at end of body -->
  <script>
    document.querySelector("h1").addEventListener("click", () => {
      alert("Clicked!");
    });
  </script>
</body>
```
