# &lt;blockquote&gt;

Represents a section quoted from another source.

## Syntax

```html
<blockquote cite="https://source-url.com">
  <p>Quoted text goes here.</p>
</blockquote>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `cite` | URL of the quote source | `cite="https://example.com/article"` |

## Key Points

- Block-level element — browsers typically indent it
- Use `cite` attribute for the source URL (not visible to users)
- For visible attribution, add it as text outside the `<blockquote>`
- For short inline quotes, use `<q>` instead
- Can contain paragraphs, lists, and other block elements

## Example

```html
<blockquote cite="https://www.w3.org/TR/html5/">
  <p>
    The blockquote element represents content that is quoted
    from another source.
  </p>
</blockquote>
<p>— W3C HTML5 Specification</p>

<!-- Styled quote -->
<blockquote style="border-left: 4px solid #ccc; padding-left: 16px; color: #555;">
  <p>The only way to do great work is to love what you do.</p>
</blockquote>
<p>— Steve Jobs</p>
```
