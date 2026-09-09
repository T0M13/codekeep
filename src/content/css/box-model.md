---
title: The Box Model
---

# The Box Model

Every HTML element is a box. The CSS box model describes the space around and inside that box.

## The Four Layers

From inside to outside:

1. **Content** — The actual text/images
2. **Padding** — Space between content and border
3. **Border** — The edge of the element
4. **Margin** — Space outside the border

```css
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}
/* Total width = 200 + 40 + 4 + 20 = 264px (by default!) */
```

## box-sizing

By default, `width` only sets the content width. Use `box-sizing: border-box` so `width` includes padding and border:

```css
/* Apply to everything (best practice) */
*, *::before, *::after {
  box-sizing: border-box;
}

.box {
  width: 200px;     /* Now this is the TOTAL width */
  padding: 20px;
  border: 2px solid black;
}
```

## Shorthand Properties

```css
/* All four sides */
margin: 10px;              /* all */
margin: 10px 20px;         /* vertical | horizontal */
margin: 10px 20px 30px;    /* top | horizontal | bottom */
margin: 10px 20px 30px 40px; /* top | right | bottom | left */

/* Individual sides */
padding-top: 10px;
margin-left: auto;
border-bottom: 1px solid gray;
```

## Display Property

```css
display: block;        /* Full width, new line */
display: inline;       /* Flows with text */
display: inline-block; /* Inline but respects width/height */
display: none;         /* Hidden, takes no space */
```

## Overflow

```css
overflow: visible;  /* Default — content spills out */
overflow: hidden;   /* Clips content */
overflow: scroll;   /* Always shows scrollbars */
overflow: auto;     /* Scrollbar only when needed */
```

```challenge
@title Box model practice
@description Create a .card with: 300px width, 20px padding, 1px solid #333 border, 16px margin, and box-sizing border-box.
@language html
@starter <style>
  .card {
    /* Add your box model styles */

  }
</style>
<div class="card">This is a card</div>
@expected border-box
```
