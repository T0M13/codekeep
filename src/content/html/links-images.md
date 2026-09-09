---
title: Links & Images
---

# Links & Images

Links and images are what make the web interconnected and visual.

## Links (Anchor Tags)

The `<a>` element creates hyperlinks:

```html
<a href="https://example.com">Visit Example</a>
<a href="/about">About Page</a>
<a href="#section2">Jump to Section 2</a>
```

### Link Attributes

```html
<!-- Open in new tab -->
<a href="https://example.com" target="_blank">External Link</a>

<!-- Email link -->
<a href="mailto:hello@example.com">Send Email</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call Us</a>
```

## Images

The `<img>` element embeds images (it's self-closing):

```html
<img src="photo.jpg" alt="A description of the photo">
<img src="photo.jpg" alt="Photo" width="400" height="300">
```

> The `alt` attribute is **required** for accessibility. It describes the image for screen readers and shows if the image fails to load.

## Linking an Image

You can make images clickable by wrapping them in a link:

```html
<a href="https://example.com">
  <img src="logo.png" alt="Company Logo">
</a>
```

## Figure & Figcaption

For images with captions, use the semantic `<figure>` element:

```html
<figure>
  <img src="chart.png" alt="Sales chart">
  <figcaption>Figure 1: Quarterly sales data</figcaption>
</figure>
```

```challenge
@title Create a linked image
@description Create a link that opens in a new tab, containing an image with proper alt text.
@language html
@starter <body>
  <!-- Create an <a> with target="_blank" containing an <img> -->

</body>
@expected target="_blank"
```
