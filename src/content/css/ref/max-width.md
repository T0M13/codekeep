# max-width / min-width

`max-width` sets the maximum width; `min-width` sets the minimum width. Both override `width` when they conflict.

## Syntax

```css
selector {
  max-width: value;
  min-width: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `none` | Default for `max-width` — no limit |
| `0` | Default for `min-width` |
| `600px` | Fixed pixel limit |
| `100%` | Percentage of parent's width |
| `50ch` | Width of 50 "0" characters (great for text) |
| `fit-content` | Content width up to available space |

## Key Points

- `max-width` overrides `width` — element won't exceed `max-width` even if `width` is larger
- `min-width` overrides both `width` and `max-width`
- Priority: `min-width` > `max-width` > `width`
- `max-width: 100%` on images prevents overflow
- `max-width` with `margin: 0 auto` is the standard responsive container pattern
- `ch` unit is excellent for readable text line length (45-75ch is ideal)

## Example

```css
/* Responsive container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Images never overflow */
img {
  max-width: 100%;
  height: auto;
}

/* Readable text width */
.article {
  max-width: 65ch;
}

/* Minimum width for a sidebar */
.sidebar {
  min-width: 200px;
  flex: 0 1 300px;
}
```
