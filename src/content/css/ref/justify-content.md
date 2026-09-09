# justify-content

Aligns flex or grid items along the **main axis** (horizontal in row, vertical in column).

## Syntax

```css
selector {
  justify-content: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `flex-start` | Items packed to the start (default for flex) |
| `flex-end` | Items packed to the end |
| `center` | Items centered |
| `space-between` | Equal space between items, no space at edges |
| `space-around` | Equal space around each item (half-size at edges) |
| `space-evenly` | Equal space between and at edges |
| `start` | Items packed to the start (works in grid too) |
| `end` | Items packed to the end (works in grid too) |

## Key Points

- Only has effect when there is extra space on the main axis
- For flex: main axis depends on `flex-direction`
- `space-between` is great for navbars (logo left, links right)
- `space-evenly` gives the most uniform spacing
- To center both axes: `justify-content: center` + `align-items: center`

## Example

```css
/* Center items horizontally */
.container {
  display: flex;
  justify-content: center;
}

/* Navbar: logo left, links right */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Evenly distributed cards */
.grid {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
```
