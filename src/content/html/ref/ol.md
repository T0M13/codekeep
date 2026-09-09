# &lt;ol&gt;

Creates an ordered (numbered) list.

## Syntax

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `type` | Numbering type | `type="A"` (A, a, I, i, 1) |
| `start` | Starting number | `start="5"` |
| `reversed` | Count in reverse order | `reversed` |

## Key Points

- Block-level element
- Only `<li>` elements should be direct children
- Default numbering is 1, 2, 3...
- `type` options: `1` (numbers), `A` (uppercase letters), `a` (lowercase letters), `I` (Roman numerals), `i` (lowercase Roman)
- Use `start` to begin from a number other than 1
- `reversed` counts down instead of up
- Use `<ul>` when order does not matter

## Example

```html
<!-- Basic numbered list -->
<ol>
  <li>Preheat the oven</li>
  <li>Mix the ingredients</li>
  <li>Bake for 30 minutes</li>
</ol>

<!-- Starting from 5, uppercase letters -->
<ol type="A" start="5">
  <li>Option E</li>
  <li>Option F</li>
  <li>Option G</li>
</ol>

<!-- Reversed countdown -->
<ol reversed>
  <li>Bronze</li>
  <li>Silver</li>
  <li>Gold</li>
</ol>
```
