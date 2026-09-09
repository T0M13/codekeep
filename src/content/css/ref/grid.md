# grid

Enables CSS Grid layout — a two-dimensional system for rows and columns.

## Syntax

```css
selector {
  display: grid;
}
```

## Values

| Value | Description |
|-------|-------------|
| `grid` | Block-level grid container |
| `inline-grid` | Inline-level grid container |

## Key Grid Container Properties

| Property | Description |
|----------|-------------|
| `grid-template-columns` | Defines column sizes |
| `grid-template-rows` | Defines row sizes |
| `gap` | Space between items |
| `grid-template-areas` | Named grid areas |
| `grid-auto-rows` | Size of implicitly created rows |
| `grid-auto-flow` | How auto-placed items flow (`row`, `column`, `dense`) |

## Key Points

- Grid is **two-dimensional** (rows + columns) vs Flexbox which is one-dimensional
- Use `fr` unit to create fractional/flexible columns: `1fr 2fr` means 1:2 ratio
- `repeat()` avoids repetition: `repeat(3, 1fr)` = `1fr 1fr 1fr`
- `auto-fill` and `auto-fit` create responsive grids without media queries
- Grid items can span multiple rows/columns with `grid-column` and `grid-row`

## Example

```css
/* Basic 3-column grid */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

/* Responsive grid — auto-fill columns, min 250px */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

/* Named areas layout */
.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```
