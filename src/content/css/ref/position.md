# position

Controls how an element is positioned in the document. Used with `top`, `right`, `bottom`, `left`.

## Syntax

```css
selector {
  position: value;
  top: length;
  right: length;
  bottom: length;
  left: length;
}
```

## Values

| Value | Description |
|-------|-------------|
| `static` | Default — normal document flow, offsets have no effect |
| `relative` | Positioned relative to its normal position |
| `absolute` | Positioned relative to the nearest positioned ancestor |
| `fixed` | Positioned relative to the viewport — stays on scroll |
| `sticky` | Acts as `relative` until a scroll threshold, then becomes `fixed` |

## Key Points

- `relative` keeps the element in flow — other elements are not affected
- `absolute` removes the element from flow — it won't affect sibling layout
- An `absolute` element looks for the nearest ancestor with `position` other than `static`
- `fixed` always positions relative to the viewport
- `sticky` requires at least one offset (`top`, `bottom`, etc.) to work
- `z-index` only works on positioned elements (not `static`)

## Example

```css
/* Sticky header */
header {
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Centered absolute element */
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Fixed bottom banner */
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
```
