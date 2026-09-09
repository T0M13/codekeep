# display

Sets how an element is displayed (block, inline, flex, grid, or hidden).

## Syntax

```css
selector {
  display: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `block` | Takes full width, starts on a new line |
| `inline` | Only takes as much width as needed, no line break |
| `inline-block` | Like inline but respects width/height/margin/padding |
| `flex` | Block-level flex container |
| `inline-flex` | Inline-level flex container |
| `grid` | Block-level grid container |
| `inline-grid` | Inline-level grid container |
| `none` | Element is removed from the document flow entirely |
| `contents` | Element's box is removed, children act as direct children of parent |

## Key Points

- `display: none` removes the element — it takes up no space (unlike `visibility: hidden`)
- `inline` elements ignore `width`, `height`, and vertical `margin`
- `inline-block` is useful for side-by-side elements that need box-model control
- `flex` and `grid` turn the element into a container for layout

## Example

```css
/* Navigation links side by side with padding */
nav a {
  display: inline-block;
  padding: 10px 20px;
}

/* Hide an element completely */
.hidden {
  display: none;
}

/* Flex container */
.row {
  display: flex;
  gap: 16px;
}
```
