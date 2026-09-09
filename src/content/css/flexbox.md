---
title: Flexbox
---

# Flexbox

Flexbox is a one-dimensional layout system. It's the go-to for aligning and distributing items.

## Enable Flexbox

```css
.container {
  display: flex;
}
```

That's it. The children are now flex items.

## Direction & Wrapping

```css
flex-direction: row;           /* Default: left to right */
flex-direction: column;        /* Top to bottom */
flex-direction: row-reverse;   /* Right to left */

flex-wrap: nowrap;    /* Default: single line */
flex-wrap: wrap;      /* Items wrap to new lines */

/* Shorthand */
flex-flow: row wrap;
```

## Alignment

### Main axis (justify-content)

```css
justify-content: flex-start;   /* Pack to start */
justify-content: center;       /* Center */
justify-content: flex-end;     /* Pack to end */
justify-content: space-between; /* Equal space between */
justify-content: space-around;  /* Equal space around */
justify-content: space-evenly;  /* Truly even spacing */
```

### Cross axis (align-items)

```css
align-items: stretch;     /* Default: fill height */
align-items: center;      /* Center vertically */
align-items: flex-start;  /* Top */
align-items: flex-end;    /* Bottom */
```

## Gap

```css
gap: 1rem;             /* Between all items */
row-gap: 1rem;         /* Between rows */
column-gap: 2rem;      /* Between columns */
```

## Item Properties

```css
.item {
  flex-grow: 1;    /* Take available space */
  flex-shrink: 0;  /* Don't shrink */
  flex-basis: 200px; /* Starting size */

  /* Shorthand */
  flex: 1;         /* grow: 1, shrink: 1, basis: 0 */
  flex: 0 0 200px; /* Fixed 200px, no grow/shrink */

  align-self: center; /* Override align-items for this item */
  order: -1;          /* Move to front */
}
```

## Common Patterns

### Centering anything:
```css
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Navigation bar:
```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

```challenge
@title Center a box
@description Use flexbox to center a .box div both horizontally and vertically inside the body. Make the body full viewport height.
@language html
@starter <style>
  body {
    margin: 0;
    min-height: 100vh;
    /* Add flexbox centering */

  }
  .box {
    width: 200px;
    height: 200px;
    background: #0ea5e9;
    border-radius: 1rem;
  }
</style>
<body>
  <div class="box"></div>
</body>
@expected justify-content: center
```
