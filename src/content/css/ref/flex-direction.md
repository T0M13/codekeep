# flex-direction

Sets the direction of the main axis in a flex container — how items are placed.

## Syntax

```css
selector {
  flex-direction: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `row` | Default — items flow left to right |
| `row-reverse` | Items flow right to left |
| `column` | Items flow top to bottom |
| `column-reverse` | Items flow bottom to top |

## Key Points

- `flex-direction` defines the **main axis** — `justify-content` works along it
- The **cross axis** is perpendicular — `align-items` works along it
- `row` main axis = horizontal, cross axis = vertical
- `column` main axis = vertical, cross axis = horizontal
- Reversing the direction reverses visual order but **not** tab/screen reader order

## Example

```css
/* Horizontal row (default) */
.nav {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

/* Vertical stack */
.card {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Mobile: stack, Desktop: row */
.layout {
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  .layout {
    flex-direction: row;
  }
}
```
