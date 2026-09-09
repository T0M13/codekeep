# align-items

Aligns flex or grid items along the **cross axis** (vertical in row, horizontal in column).

## Syntax

```css
selector {
  align-items: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `stretch` | Default — items stretch to fill the container's cross axis |
| `flex-start` | Items aligned to the start of the cross axis |
| `flex-end` | Items aligned to the end of the cross axis |
| `center` | Items centered on the cross axis |
| `baseline` | Items aligned by their text baseline |

## Key Points

- `stretch` only works if the items don't have an explicit size on the cross axis
- `baseline` is useful when items have different font sizes but need text alignment
- Use `align-self` on individual items to override the container's `align-items`
- To perfectly center an element: `display: flex; justify-content: center; align-items: center;`

## Example

```css
/* Vertically center items in a row */
.toolbar {
  display: flex;
  align-items: center;
  height: 60px;
}

/* Perfect centering */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Override for one item */
.item-top {
  align-self: flex-start;
}
```
