# padding

Sets the space **inside** an element's border, between the border and the content.

## Syntax

```css
selector {
  padding: all;
  padding: vertical horizontal;
  padding: top right bottom left;
  padding-top: value;
  padding-right: value;
  padding-bottom: value;
  padding-left: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `0` | No padding |
| `16px` | Fixed pixel padding |
| `1rem` | Relative to root font size |
| `5%` | Percentage of parent's **width** (even for top/bottom) |

## Key Points

- Padding is **inside** the border — it expands the element's background area
- Unlike margin, padding **cannot** be negative
- Unlike margin, padding **does not** collapse
- With `box-sizing: content-box`, padding adds to the element's total size
- With `box-sizing: border-box`, padding is included in the declared width/height
- Percentage padding (even vertical) is always based on the parent's **width**

## Example

```css
/* Equal padding all sides */
.card {
  padding: 24px;
}

/* Vertical and horizontal */
.button {
  padding: 10px 20px;
}

/* All four sides: top right bottom left */
.section {
  padding: 40px 24px 40px 24px;
}

/* Responsive aspect ratio trick using % padding */
.aspect-16-9 {
  padding-top: 56.25%; /* 9/16 = 0.5625 */
  position: relative;
}
```
