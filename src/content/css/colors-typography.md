---
title: Colors & Typography
---

# Colors & Typography

## Color Systems

CSS supports several ways to define colors:

```css
/* Named colors */
color: red;
color: dodgerblue;
color: rebeccapurple;

/* Hex (most common) */
color: #ff0000;      /* Red */
color: #0ea5e9;      /* Sky blue */
color: #333;         /* Short for #333333 */

/* RGB */
color: rgb(255, 0, 0);
color: rgba(0, 0, 0, 0.5);  /* With transparency */

/* HSL (Hue, Saturation, Lightness) */
color: hsl(200, 80%, 50%);
color: hsla(200, 80%, 50%, 0.7);
```

## Typography

```css
/* Font family */
font-family: 'Inter', system-ui, sans-serif;

/* Font size */
font-size: 16px;     /* Pixels (absolute) */
font-size: 1rem;     /* Relative to root (recommended) */
font-size: 1.2em;    /* Relative to parent */

/* Font weight */
font-weight: normal;  /* 400 */
font-weight: bold;    /* 700 */
font-weight: 600;     /* Semibold */

/* Line height */
line-height: 1.5;     /* Unitless (recommended) */

/* Text properties */
text-align: center;
text-decoration: underline;
text-transform: uppercase;
letter-spacing: 0.05em;
```

## CSS Variables (Custom Properties)

```css
:root {
  --primary: #0ea5e9;
  --text: #e2e8f0;
  --bg: #0f172a;
  --radius: 0.75rem;
}

.button {
  color: white;
  background: var(--primary);
  border-radius: var(--radius);
}
```

```challenge
@title Theme with variables
@description Create CSS variables for --bg, --text, and --accent colors, then use them to style the body and an h1.
@language html
@starter <style>
  :root {
    /* Define your variables */

  }
  body {
    /* Use var(--bg) and var(--text) */

  }
  h1 {
    /* Use var(--accent) */

  }
</style>
<body>
  <h1>Themed Page</h1>
  <p>Using CSS custom properties!</p>
</body>
@expected var(--
```
