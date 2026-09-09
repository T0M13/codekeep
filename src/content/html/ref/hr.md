# &lt;hr&gt;

Creates a horizontal rule — a thematic break between content sections.

## Syntax

```html
<hr>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| Global only | No unique attributes in HTML5 | `class="divider"` |

## Key Points

- Self-closing tag — no end tag needed
- Represents a thematic break, not just a visual line
- Block-level element — takes full width
- Commonly styled with CSS (border, color, width, margin)
- Legacy attributes like `size`, `width`, `color`, and `noshade` are deprecated

## Example

```html
<h2>Chapter 1</h2>
<p>The story begins in a small village...</p>

<hr>

<h2>Chapter 2</h2>
<p>Meanwhile, across the mountains...</p>

<!-- Styled with CSS -->
<style>
  hr.fancy {
    border: none;
    height: 2px;
    background: linear-gradient(to right, transparent, #333, transparent);
  }
</style>
<hr class="fancy">
```
