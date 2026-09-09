# &lt;ul&gt;

Creates an unordered (bulleted) list.

## Syntax

```html
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| Global only | No unique attributes in HTML5 | `class="menu"` |

## Key Points

- Block-level element
- Only `<li>` elements should be direct children
- Default bullet style is a filled disc
- Change bullet style with CSS `list-style-type` (disc, circle, square, none)
- Lists can be nested inside other lists
- Use `<ol>` when order matters

## Example

```html
<!-- Simple list -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Nested list -->
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
    </ul>
  </li>
</ul>

<!-- Navigation menu (no bullets) -->
<ul style="list-style: none; padding: 0;">
  <li><a href="/">Home</a></li>
  <li><a href="/about">About</a></li>
  <li><a href="/contact">Contact</a></li>
</ul>
```
