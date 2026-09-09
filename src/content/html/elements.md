---
title: HTML Elements
---

# HTML Elements

An HTML element is defined by a **start tag**, some **content**, and an **end tag**.

```html
<tagname>Content goes here...</tagname>
```

## Common Elements

### Block Elements

Block elements take up the full width and start on a new line:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<p>A paragraph of text.</p>
<div>A generic container.</div>
```

### Inline Elements

Inline elements only take up as much width as needed:

```html
<span>Inline text</span>
<strong>Bold text</strong>
<em>Italic text</em>
<a href="#">A link</a>
<code>Code snippet</code>
```

## Attributes

Attributes provide additional information about elements:

```html
<a href="https://example.com" target="_blank">Visit Example</a>
<img src="photo.jpg" alt="A photo" width="300">
<div class="container" id="main">Content</div>
```

Common attributes:
- `class` — CSS class name(s) for styling
- `id` — Unique identifier
- `style` — Inline CSS styles
- `title` — Tooltip text on hover

## Self-Closing Elements

Some elements don't have content or a closing tag:

```html
<br>       <!-- Line break -->
<hr>       <!-- Horizontal rule -->
<img>      <!-- Image -->
<input>    <!-- Form input -->
```

## Nesting

Elements can contain other elements. Proper nesting is important:

```html
<!-- Correct -->
<div>
  <p>This is <strong>properly</strong> nested.</p>
</div>

<!-- Wrong — tags overlap -->
<p>This is <strong>badly</p> nested.</strong>
```

```challenge
@title Build a card
@description Create a div containing an h2 title "My Card" and a paragraph with any text. Add a class="card" to the div.
@language html
@starter <body>
  <div>
    <h2></h2>
    <p>This is some card content.</p>
  </div>
</body>
@expected class="card"
```
