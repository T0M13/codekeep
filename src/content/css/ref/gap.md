# gap

Sets the spacing between flex or grid items. Shorthand for `row-gap` and `column-gap`.

## Syntax

```css
selector {
  gap: row-gap column-gap;
  row-gap: value;
  column-gap: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `gap: 16px` | Same gap for rows and columns |
| `gap: 16px 24px` | 16px row gap, 24px column gap |
| `row-gap: 16px` | Gap between rows only |
| `column-gap: 24px` | Gap between columns only |

## Key Points

- Works in both `flex` and `grid` containers
- Unlike margins, `gap` only creates space **between** items, not at the edges
- Replaces the old `grid-gap` property (which still works as an alias)
- Accepts any length unit: `px`, `rem`, `%`, `em`, etc.
- Much cleaner than using margins on children (no negative margin hacks)

## Example

```css
/* Flex with gap */
.nav {
  display: flex;
  gap: 12px;
}

/* Grid with different row/column gaps */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 16px;
}
```
