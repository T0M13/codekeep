# float

Pushes an element to the left or right, allowing text and inline elements to wrap around it.

## Syntax

```css
selector {
  float: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `none` | Default — element does not float |
| `left` | Floats the element to the left |
| `right` | Floats the element to the right |
| `inline-start` | Floats to the start side (respects writing direction) |
| `inline-end` | Floats to the end side (respects writing direction) |

## Key Points

- Floated elements are removed from normal flow but still affect inline content
- A floated element automatically becomes `display: block`
- Parent containers collapse when all children are floated — use `clear` or `overflow: auto` to fix
- Flexbox and Grid have largely replaced float-based layouts
- Float is still useful for wrapping text around images

## Example

```css
/* Image with text wrapping */
.article img {
  float: left;
  margin: 0 16px 16px 0;
}

/* Clearfix on parent */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```
