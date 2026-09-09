# &lt;p&gt;

Defines a paragraph of text.

## Syntax

```html
<p>This is a paragraph.</p>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| Global only | No unique attributes | `class="intro"` |

## Key Points

- Block-level element — starts on a new line with space above and below
- Browsers automatically add margins before and after paragraphs
- Cannot contain other block-level elements (like `<div>` or other `<p>` tags)
- Can contain inline elements like `<strong>`, `<em>`, `<a>`, `<span>`
- The closing `</p>` tag is technically optional but always recommended

## Example

```html
<p>HTML is the standard markup language for creating web pages.</p>

<p>
  You can use <strong>bold</strong> and <em>italic</em> text
  inside a paragraph, as well as <a href="/links">links</a>.
</p>

<p class="lead">This paragraph has a class for custom styling.</p>
```
