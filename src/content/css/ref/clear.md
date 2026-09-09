# clear

Specifies which sides of an element should not be adjacent to floated elements.

## Syntax

```css
selector {
  clear: value;
}
```

## Values

| Value | Description |
|-------|-------------|
| `none` | Default — allows floats on both sides |
| `left` | No floated elements allowed on the left |
| `right` | No floated elements allowed on the right |
| `both` | No floated elements allowed on either side |

## Key Points

- `clear` only affects block-level elements
- Used to prevent content from wrapping beside floated elements
- The "clearfix" hack uses `::after` with `clear: both` to contain floats within a parent
- Most commonly you'll use `clear: both`

## Example

```css
/* Push footer below all floats */
footer {
  clear: both;
}

/* Clearfix pattern */
.container::after {
  content: "";
  display: table;
  clear: both;
}
```
