---
title: CSS Grid
---

# CSS Grid

CSS Grid is a two-dimensional layout system — it handles both rows AND columns at once.

## Enable Grid

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  gap: 1rem;
}
```

## Defining Columns & Rows

```css
/* Fixed sizes */
grid-template-columns: 200px 300px 200px;

/* Fractions (flexible) */
grid-template-columns: 1fr 2fr 1fr;

/* Repeat */
grid-template-columns: repeat(3, 1fr);

/* Auto-fill responsive */
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

/* Rows */
grid-template-rows: 100px auto 50px;
```

## Placing Items

```css
.item {
  grid-column: 1 / 3;      /* Span columns 1-2 */
  grid-row: 1 / 2;         /* Span row 1 */
  grid-column: span 2;     /* Span 2 columns */
}
```

## Named Areas

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

## Alignment

```css
/* Align all items */
justify-items: center;   /* Horizontal within cell */
align-items: center;     /* Vertical within cell */
place-items: center;     /* Both at once */

/* Align the grid itself */
justify-content: center;
align-content: center;

/* Align individual items */
.item {
  justify-self: end;
  align-self: start;
}
```

## Grid vs Flexbox

| Use Grid when... | Use Flexbox when... |
|---|---|
| 2D layout (rows + columns) | 1D layout (row OR column) |
| Page layout, dashboards | Navbars, card rows |
| You know the overall structure | Content determines layout |

```challenge
@title Build a grid layout
@description Create a 3-column responsive grid using repeat(auto-fill, minmax(200px, 1fr)) with 1rem gap. Add 4 card divs.
@language html
@starter <style>
  .grid {
    /* Add your grid styles */

  }
  .card {
    padding: 2rem;
    background: #1e293b;
    border-radius: 0.75rem;
    text-align: center;
    color: white;
  }
</style>
<div class="grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>
@expected auto-fill
```
