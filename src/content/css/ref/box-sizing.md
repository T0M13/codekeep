# box-sizing

Defines how `width` and `height` are calculated — whether they include padding and border.

## Syntax

```css
selector {
  box-sizing: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `content-box` | Default — `width`/`height` apply to content only. Padding and border are added on top. |
| `border-box` | `width`/`height` include content + padding + border. |

## Key Points

- With `content-box`: a 200px-wide box with 20px padding and 2px border = 244px total
- With `border-box`: a 200px-wide box with 20px padding and 2px border = 200px total
- Most developers apply `border-box` globally for predictable sizing
- `border-box` makes percentage widths much easier to work with

## Example

```css
/* Apply border-box globally (recommended) */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Without this, a 50% width element with padding would overflow its container */
.column {
  width: 50%;
  padding: 20px;
  /* border-box keeps total width at 50% */
}
```
