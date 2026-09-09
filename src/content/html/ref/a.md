# &lt;a&gt;

Creates a hyperlink to another page, file, location, or URL.

## Syntax

```html
<a href="https://example.com">Visit Example</a>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `href` | URL the link points to | `href="/about"` |
| `target` | Where to open the link | `target="_blank"` |
| `rel` | Relationship to the linked page | `rel="noopener noreferrer"` |
| `download` | Download the file instead of navigating | `download="file.pdf"` |
| `title` | Tooltip text on hover | `title="Go to About page"` |

## Key Points

- `href` is required for the link to be functional
- `target="_blank"` opens in a new tab — always pair with `rel="noopener noreferrer"` for security
- `href="#id"` links to an element on the same page (anchor link)
- `href="mailto:user@example.com"` creates an email link
- `href="tel:+1234567890"` creates a phone link
- Links without `href` are not focusable or clickable
- An inline element by default

## Example

```html
<!-- External link (new tab) -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Visit Example
</a>

<!-- Internal link -->
<a href="/about">About Us</a>

<!-- Anchor link to section on same page -->
<a href="#contact">Jump to Contact</a>

<!-- Email link -->
<a href="mailto:hello@example.com">Email Us</a>

<!-- Download link -->
<a href="/files/report.pdf" download>Download Report</a>
```
