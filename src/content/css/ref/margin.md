# margin

Sets the space **outside** an element's border. Creates distance between elements.

## Syntax

```css
selector {
  margin: all;
  margin: vertical horizontal;
  margin: top right bottom left;
  margin-top: value;
  margin-right: value;
  margin-bottom: value;
  margin-left: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `0` | No margin |
| `16px` | Fixed pixel margin |
| `1rem` | Relative to root font size |
| `5%` | Percentage of parent's **width** (even for top/bottom) |
| `auto` | Browser calculates — used for centering |

## Key Points

- **Margin collapse**: adjacent vertical margins overlap — the larger one wins
- `margin: 0 auto` centers a block element horizontally (needs a set `width`)
- Negative margins are valid — they pull elements closer or overlap
- Inline elements only respect horizontal margins (left/right)
- Margins are **outside** the border — they don't affect the element's background
- Margin collapse does NOT happen with flex/grid items, floats, or `overflow: hidden` parents

## Example

```css
/* Center a block element */
.container {
  max-width: 960px;
  margin: 0 auto;
}

/* Shorthand: top right bottom left */
.card {
  margin: 16px 24px 16px 24px;
}

/* Remove default body margin */
body {
  margin: 0;
}

/* Negative margin to overlap */
.overlap {
  margin-top: -20px;
}
```
