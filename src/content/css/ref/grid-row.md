# grid-row

Specifies which row(s) a grid item occupies. Shorthand for `grid-row-start` / `grid-row-end`.

## Syntax

```css
selector {
  grid-row: start / end;
  grid-row-start: value;
  grid-row-end: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `1` | Starts/ends at row line 1 |
| `1 / 3` | From line 1 to line 3 (spans 2 rows) |
| `1 / -1` | From first to last line (full height) |
| `span 2` | Spans 2 rows from current position |
| `1 / span 3` | Starts at line 1, spans 3 rows |

## Key Points

- Works exactly like `grid-column` but for rows
- Row lines are numbered starting at **1**
- Negative numbers count from the end (only works with explicit `grid-template-rows`)
- Combine with `grid-column` to place items precisely in a 2D grid
- Items can overlap when manually placed — use `z-index` to control stacking

## Example

```css
.grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* Sidebar spanning all rows */
.sidebar {
  grid-column: 1;
  grid-row: 1 / -1;
}

/* Tall card spanning 2 rows */
.featured {
  grid-row: span 2;
}
```
