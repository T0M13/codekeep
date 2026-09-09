# grid-gap

Legacy property for spacing between grid items. Use `gap` instead.

## Syntax

```css
/* Legacy (still works) */
selector {
  grid-gap: row-gap column-gap;
  grid-row-gap: value;
  grid-column-gap: value;
}

/* Modern (recommended) */
selector {
  gap: row-gap column-gap;
  row-gap: value;
  column-gap: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `grid-gap: 16px` | Same gap for rows and columns |
| `grid-gap: 16px 24px` | 16px between rows, 24px between columns |
| `gap: 16px` | Modern equivalent |

## Key Points

- `grid-gap` is the old name — renamed to `gap` in the spec
- `gap` works in both Grid **and** Flexbox
- `grid-gap` only works in Grid containers
- All browsers support both — but use `gap` for new code
- `grid-row-gap` is now `row-gap`, `grid-column-gap` is now `column-gap`

## Example

```css
/* Modern — use this */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Legacy — avoid in new code */
.grid-old {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
```
