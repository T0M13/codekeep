---
title: Links & Images
---

# Links & Images

Links and images are what make the web interconnected and visual.

## Links (Anchor Tags)

The `<a>` element creates hyperlinks:

```html
<a href="https://tamas-illes.com">Visit Portfolio</a>
<a href="/about">About Page</a>
<a href="#section2">Jump to Section 2</a>
```

### Link Attributes

```html
<!-- Open in new tab -->
<a href="https://tamas-illes.com" target="_blank">External Link</a>

<!-- Email link -->
<a href="mailto:hello@example.com">Send Email</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call Us</a>
```

## Images

The `<img>` element embeds images (it's self-closing):

```html
<img src="/images/logo.png" alt="Portfolio icon">
<img src="/images/logo.png" alt="Portfolio icon" width="48" height="48">
```

> The `alt` attribute is **required** for accessibility. It describes the image for screen readers and shows if the image fails to load.

## Linking an Image

You can make images clickable by wrapping them in a link:

```html
<a href="https://tamas-illes.com">
  <img src="/images/logo.png" alt="Portfolio Logo" width="48">
</a>
```

## Figure & Figcaption

For images with captions, use the semantic `<figure>` element:

```html
<figure>
  <img src="/images/logo.png" alt="Portfolio icon" width="48">
  <figcaption>Figure 1: My portfolio logo</figcaption>
</figure>
```

```challenge
@title Create a linked image
@description Create a link that opens in a new tab, containing an image with proper alt text.
@language html
@starter <body>
  <a href="https://tamas-illes.com">
    <img src="/images/logo.png" alt="" width="64">
  </a>
</body>
@expected target="_blank"
```
