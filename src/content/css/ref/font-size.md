# font-size

Sets the size of text.

## Syntax

```css
selector {
  font-size: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `16px` | Fixed pixel size |
| `1rem` | Relative to root (`<html>`) font size (default 16px) |
| `1em` | Relative to parent element's font size |
| `100%` | Same as `1em` — relative to parent |
| `1.2vw` | Relative to viewport width |
| `clamp(1rem, 2.5vw, 2rem)` | Fluid: min, preferred, max |
| `small`, `medium`, `large` | Keyword sizes (rarely used) |

## Key Points

- `rem` is the most predictable unit — always relative to the root, not the parent
- `em` compounds: nested elements multiply their parent's font size
- `px` does not scale with user browser settings — prefer `rem` for accessibility
- `clamp()` is the modern way to do responsive font sizes without media queries
- Default browser font size is `16px`, so `1rem = 16px`
- Set `html { font-size: 62.5% }` to make `1rem = 10px` (easier math)

## Example

```css
/* Base size */
html {
  font-size: 16px;
}

body {
  font-size: 1rem; /* 16px */
}

/* Headings with rem */
h1 { font-size: 2.5rem; }   /* 40px */
h2 { font-size: 2rem; }     /* 32px */
h3 { font-size: 1.5rem; }   /* 24px */

/* Fluid typography */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

/* Small text */
.caption {
  font-size: 0.875rem; /* 14px */
}
```
