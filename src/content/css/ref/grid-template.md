# grid-template-columns / grid-template-rows

Defines the number and size of columns and rows in a grid container.

## Syntax

```css
selector {
  grid-template-columns: track-size ...;
  grid-template-rows: track-size ...;
}
```

## Values

| Value | Description |
|-------|-------------|
| `200px` | Fixed pixel size |
| `1fr` | One fraction of available space |
| `auto` | Size based on content |
| `minmax(min, max)` | Size between a minimum and maximum |
| `repeat(count, size)` | Repeats a track pattern |
| `auto-fill` | Fills as many columns as fit (with `repeat`) |
| `auto-fit` | Like `auto-fill` but collapses empty tracks |
| `min-content` | Smallest size without overflow |
| `max-content` | Size based on largest content |
| `fit-content(max)` | Clamps between `min-content` and `max` |

## Key Points

- `fr` distributes **remaining** space after fixed tracks are placed
- `minmax(250px, 1fr)` is the key to responsive grids
- `auto-fill` creates empty tracks if there's extra space; `auto-fit` stretches items to fill
- You can mix units: `200px 1fr 2fr auto`
- Named lines: `[start] 1fr [middle] 2fr [end]`

## Example

```css
/* Two fixed sidebars, flexible center */
.layout {
  display: grid;
  grid-template-columns: 250px 1fr 250px;
}

/* Responsive auto-fit grid */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

/* Explicit row heights */
.page {
  display: grid;
  grid-template-rows: 80px 1fr auto;
  min-height: 100vh;
}
```
