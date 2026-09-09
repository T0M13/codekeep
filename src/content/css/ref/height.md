# height

Sets the height of an element's content area.

## Syntax

```css
selector {
  height: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `auto` | Default — determined by content |
| `200px` | Fixed pixel height |
| `50%` | Percentage of parent's height (parent must have explicit height) |
| `100vh` | 100% of viewport height |
| `100dvh` | Dynamic viewport height (accounts for mobile browser bars) |
| `fit-content` | Shrinks to content |
| `min-content` | Minimum height to fit content |
| `max-content` | Height based on content without constraint |

## Key Points

- Unlike `width`, elements don't naturally fill their parent's height
- `height: 100%` only works if the parent has an explicit height (px, vh, etc.)
- `100vh` on mobile includes the address bar area — use `100dvh` for dynamic sizing
- Setting a fixed height can cause overflow — consider `min-height` instead
- Does not work on inline elements

## Example

```css
/* Full-height page */
html, body {
  height: 100%;
  margin: 0;
}

/* Full viewport hero section */
.hero {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Fixed height with scroll */
.chat {
  height: 400px;
  overflow-y: auto;
}
```
