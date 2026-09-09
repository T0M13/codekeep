# z-index

Controls the stacking order of positioned elements. Higher values appear in front.

## Syntax

```css
selector {
  z-index: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `auto` | Default — same stacking order as parent |
| `integer` | Any positive or negative number (e.g., `1`, `100`, `-1`) |

## Key Points

- Only works on elements with `position` set to `relative`, `absolute`, `fixed`, or `sticky`
- Also works on flex/grid children
- Elements with higher `z-index` appear in front of lower ones
- A new **stacking context** is created by elements with `z-index` other than `auto`, `opacity` < 1, `transform`, `filter`, etc.
- `z-index` only competes within the same stacking context — a child cannot escape its parent's context
- Avoid "z-index wars" — use a scale like 10, 20, 30 or define named layers

## Example

```css
/* Dropdown above content */
.dropdown {
  position: absolute;
  z-index: 10;
}

/* Modal overlay above everything */
.overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
}

.modal {
  position: fixed;
  z-index: 1001;
}
```
