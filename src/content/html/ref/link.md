# &lt;link&gt;

Links external resources to the document, most commonly stylesheets and favicons.

## Syntax

```html
<link rel="stylesheet" href="styles.css">
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `rel` | Relationship between document and resource | `rel="stylesheet"` |
| `href` | URL of the linked resource | `href="styles.css"` |
| `type` | MIME type of the resource | `type="text/css"` |
| `media` | Media query for conditional loading | `media="screen and (max-width: 600px)"` |
| `sizes` | Icon sizes (for favicons) | `sizes="32x32"` |
| `crossorigin` | CORS setting for the request | `crossorigin="anonymous"` |

## Key Points

- Self-closing tag (no end tag)
- Must be placed inside `<head>`
- `rel` and `href` are the most important attributes
- `rel="stylesheet"` is the most common use case
- Can load multiple stylesheets with multiple `<link>` tags
- Also used for preloading resources with `rel="preload"`

## Example

```html
<head>
  <!-- Main stylesheet -->
  <link rel="stylesheet" href="styles.css">

  <!-- Favicon -->
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <link rel="icon" href="icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap">

  <!-- Preload a critical resource -->
  <link rel="preload" href="hero.webp" as="image">
</head>
```
