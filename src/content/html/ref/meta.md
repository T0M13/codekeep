# &lt;meta&gt;

Provides metadata about the HTML document — character set, viewport, description, and more.

## Syntax

```html
<meta charset="UTF-8">
<meta name="description" content="A short page description">
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `charset` | Character encoding for the document | `charset="UTF-8"` |
| `name` | Name of the metadata | `name="viewport"` |
| `content` | Value of the metadata | `content="width=device-width"` |
| `http-equiv` | HTTP header simulation | `http-equiv="refresh"` |
| `property` | Used for Open Graph / social media tags | `property="og:title"` |

## Key Points

- Self-closing tag (no end tag)
- `charset="UTF-8"` should always be the first element in `<head>`
- The viewport meta tag is essential for responsive design
- `name="description"` is used by search engines in results
- Open Graph (`og:`) tags control how links appear on social media
- Multiple `<meta>` tags are allowed and common

## Example

```html
<head>
  <!-- Character encoding -->
  <meta charset="UTF-8">

  <!-- Responsive viewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO description -->
  <meta name="description" content="Learn HTML with interactive lessons">

  <!-- Open Graph tags for social sharing -->
  <meta property="og:title" content="CodeKeep">
  <meta property="og:description" content="Learn coding the fun way">
  <meta property="og:image" content="https://example.com/preview.png">
  <meta property="og:type" content="website">

  <!-- Prevent search indexing (optional) -->
  <meta name="robots" content="noindex, nofollow">
</head>
```
