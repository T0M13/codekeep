# flex-wrap

Controls whether flex items wrap onto multiple lines when they exceed the container's width.

## Syntax

```css
selector {
  flex-wrap: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `nowrap` | Default — all items stay on one line, may overflow |
| `wrap` | Items wrap onto the next line when needed |
| `wrap-reverse` | Items wrap onto the line above |

## Key Points

- Without `wrap`, items will shrink (via `flex-shrink`) or overflow
- `flex-wrap: wrap` is essential for responsive card grids
- Use `align-content` to control spacing between wrapped lines
- `flex-flow` is shorthand for `flex-direction` + `flex-wrap`

## Example

```css
/* Responsive card grid */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.card {
  flex: 1 1 300px; /* grow, shrink, min 300px before wrapping */
}

/* Shorthand with flex-flow */
.container {
  display: flex;
  flex-flow: row wrap;
}
```
