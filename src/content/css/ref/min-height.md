# min-height / max-height

`min-height` sets the minimum height; `max-height` sets the maximum height.

## Syntax

```css
selector {
  min-height: value;
  max-height: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `0` | Default for `min-height` |
| `none` | Default for `max-height` — no limit |
| `400px` | Fixed pixel limit |
| `100vh` | Full viewport height |
| `100dvh` | Dynamic viewport height (mobile-safe) |
| `50%` | Percentage of parent's height |

## Key Points

- `min-height` is better than `height` for content that may grow
- `min-height: 100vh` is the standard "at least full screen" pattern
- `max-height` clips content if it exceeds the limit — combine with `overflow: auto`
- Priority: `min-height` > `max-height` > `height`
- `max-height` with `overflow: hidden` and `transition` can animate open/close

## Example

```css
/* Page always at least full viewport */
.page {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1; /* takes remaining space */
}

/* Scrollable dropdown with max height */
.dropdown-list {
  max-height: 300px;
  overflow-y: auto;
}

/* Animate expand/collapse */
.panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.panel.open {
  max-height: 500px;
}
```
