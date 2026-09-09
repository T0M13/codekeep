---
title: CSS Selectors
---

# CSS Selectors

Selectors are how you target HTML elements to style them.

## Basic Selectors

```css
/* Element selector */
p { color: gray; }

/* Class selector */
.highlight { background: yellow; }

/* ID selector */
#header { font-size: 2rem; }

/* Universal selector */
* { margin: 0; padding: 0; }
```

## Combinators

```css
/* Descendant (any depth) */
article p { color: gray; }

/* Direct child */
ul > li { list-style: none; }

/* Adjacent sibling (next) */
h2 + p { font-weight: bold; }

/* General sibling (all after) */
h2 ~ p { color: gray; }
```

## Attribute Selectors

```css
/* Has attribute */
[disabled] { opacity: 0.5; }

/* Exact value */
[type="email"] { border-color: blue; }

/* Starts with */
[href^="https"] { color: green; }

/* Ends with */
[src$=".png"] { border: 1px solid gray; }

/* Contains */
[class*="btn"] { cursor: pointer; }
```

## Pseudo-classes

```css
a:hover { color: red; }
a:visited { color: purple; }
input:focus { outline: 2px solid blue; }
li:first-child { font-weight: bold; }
li:last-child { border: none; }
li:nth-child(odd) { background: #f5f5f5; }
tr:nth-child(2n) { background: #eee; }
```

## Pseudo-elements

```css
p::first-line { font-weight: bold; }
p::first-letter { font-size: 2em; }
.quote::before { content: "\201C"; }
.quote::after { content: "\201D"; }
li::marker { color: blue; }
```

```challenge
@title Style with selectors
@description Use class and pseudo-class selectors: make .card have a gray background, and .card:hover have a blue border.
@language html
@starter <style>
  /* Style .card and .card:hover */

</style>
<div class="card">Hover over me!</div>
@expected :hover
```
