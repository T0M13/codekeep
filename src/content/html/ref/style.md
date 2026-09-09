# &lt;style&gt;

Embeds CSS styles directly in the HTML document.

## Syntax

```html
<style>
  body {
    font-family: Arial, sans-serif;
  }
</style>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `media` | Media query for conditional styles | `media="screen and (max-width: 600px)"` |
| `type` | MIME type (defaults to `text/css`) | `type="text/css"` |

## Key Points

- Must be placed inside `<head>` (though browsers tolerate it in `<body>`)
- For large projects, external stylesheets via `<link>` are preferred
- Multiple `<style>` tags are allowed
- Styles apply to the entire document, not just nearby elements
- `type="text/css"` is optional in HTML5 (it is the default)

## Example

```html
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: sans-serif;
      line-height: 1.6;
      color: #333;
    }

    .highlight {
      background-color: yellow;
      padding: 2px 6px;
    }
  </style>
</head>
<body>
  <p>This is <span class="highlight">highlighted</span> text.</p>
</body>
```
