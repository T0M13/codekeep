# overflow

Controls what happens when content overflows an element's box.

## Syntax

```css
selector {
  overflow: value;
  overflow-x: value;
  overflow-y: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `visible` | Default — content overflows the box and is visible |
| `hidden` | Overflowing content is clipped and not visible |
| `scroll` | Always shows scrollbars (even if content fits) |
| `auto` | Shows scrollbars only when content overflows |
| `clip` | Like `hidden` but forbids programmatic scrolling |

## Key Points

- `overflow` is shorthand for `overflow-x` and `overflow-y`
- `overflow: hidden` on a parent creates a new block formatting context (clears floats)
- Setting `overflow-x` to something other than `visible` forces `overflow-y` to `auto` (and vice versa)
- `scroll` always shows scrollbar track — use `auto` to only show when needed
- `overflow: hidden` is commonly used to clip rounded corners on children

## Example

```css
/* Scrollable container */
.chat-window {
  height: 400px;
  overflow-y: auto;
}

/* Hide horizontal overflow */
.card {
  border-radius: 12px;
  overflow: hidden;
}

/* Horizontal scroll for a row */
.carousel {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}
```
