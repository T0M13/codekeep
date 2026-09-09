# width

Sets the width of an element's content area.

## Syntax

```css
selector {
  width: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `auto` | Default — browser calculates (block = full width, inline = content) |
| `200px` | Fixed pixel width |
| `50%` | Percentage of parent's width |
| `100vw` | 100% of viewport width |
| `fit-content` | Shrinks to content but won't exceed available space |
| `min-content` | As narrow as the longest unbreakable word |
| `max-content` | As wide as the content needs without wrapping |

## Key Points

- Block elements default to `auto` (full width of parent)
- `width` applies to the **content area** by default (see `box-sizing`)
- With `border-box`, width includes padding and border
- `width: 100%` fills the parent; `width: 100vw` fills the viewport (may cause horizontal scroll if there's a scrollbar)
- `fit-content` is useful for elements that should shrink-wrap but respect max width
- Does not work on inline elements — use `inline-block` or `block`

## Example

```css
/* Fixed width container, centered */
.container {
  width: 960px;
  margin: 0 auto;
}

/* Responsive: never exceed parent */
img {
  width: 100%;
  height: auto;
}

/* Shrink to content */
.tag {
  width: fit-content;
  padding: 4px 12px;
}
```
