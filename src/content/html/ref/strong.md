# &lt;strong&gt;

Indicates strong importance — displayed as **bold** text by default.

## Syntax

```html
<strong>Important text</strong>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| Global only | No unique attributes | `class="warning"` |

## Key Points

- Semantic tag — means the text is important, not just visually bold
- Screen readers may emphasize `<strong>` text with a different tone
- For purely visual bold without meaning, use CSS `font-weight: bold` instead
- Can be nested for extra emphasis: `<strong><strong>very important</strong></strong>`
- `<b>` also renders bold but carries no semantic importance
- Inline element

## Example

```html
<p><strong>Warning:</strong> Do not delete this file.</p>

<p>
  Please read the <strong>terms and conditions</strong>
  before proceeding.
</p>
```
