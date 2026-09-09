# flex

Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`. Controls how a flex item grows, shrinks, and its initial size.

## Syntax

```css
selector {
  flex: flex-grow flex-shrink flex-basis;
}
```

## Values

| Value | Description |
|-------|-------------|
| `flex: 0 1 auto` | Default — don't grow, can shrink, size based on content |
| `flex: 1` | Shorthand for `flex: 1 1 0%` — grow equally, shrink, zero base |
| `flex: auto` | Shorthand for `flex: 1 1 auto` — grow and shrink based on content size |
| `flex: none` | Shorthand for `flex: 0 0 auto` — fully inflexible |
| `flex: 2` | Grows twice as much as `flex: 1` items |

### Individual Properties

| Property | Default | Description |
|----------|---------|-------------|
| `flex-grow` | `0` | How much the item grows relative to siblings |
| `flex-shrink` | `1` | How much the item shrinks when space is tight |
| `flex-basis` | `auto` | Initial size before growing/shrinking (like `width`) |

## Key Points

- `flex: 1` on all children makes them share space equally
- `flex-grow: 0` means the item will not grow beyond its content/basis
- `flex-basis` overrides `width` in a flex container (for row direction)
- When using `flex: 1`, the basis is `0%` — items ignore content size and split evenly
- When using `flex: auto`, items grow proportionally to their content size

## Example

```css
.container {
  display: flex;
}

/* Sidebar: fixed 250px, main: fills remaining space */
.sidebar {
  flex: 0 0 250px;
}

.main {
  flex: 1;
}

/* Three equal columns */
.column {
  flex: 1;
}
```
