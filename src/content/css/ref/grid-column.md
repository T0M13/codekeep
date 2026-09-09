# grid-column

Specifies which column(s) a grid item occupies. Shorthand for `grid-column-start` / `grid-column-end`.

## Syntax

```css
selector {
  grid-column: start / end;
  grid-column-start: value;
  grid-column-end: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `1` | Starts/ends at column line 1 |
| `1 / 3` | From line 1 to line 3 (spans 2 columns) |
| `1 / -1` | From first to last line (full width) |
| `span 2` | Spans 2 columns from current position |
| `1 / span 2` | Starts at line 1, spans 2 columns |

## Key Points

- Grid lines are numbered starting at **1**, not 0
- Line numbers refer to the **lines between columns**, not the columns themselves
- A 3-column grid has 4 lines (1, 2, 3, 4)
- Negative numbers count from the end: `-1` is the last line
- `span` counts columns, not lines

## Example

```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

/* Full-width header spanning all 4 columns */
.header {
  grid-column: 1 / -1;
}

/* Item spanning 2 columns */
.wide-card {
  grid-column: span 2;
}

/* Specific placement */
.sidebar {
  grid-column: 1 / 2;
}
.main {
  grid-column: 2 / 5;
}
```
