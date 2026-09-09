# &lt;img&gt;

The `<img>` element embeds an image. It is a void element, so it has no closing tag.

## Syntax

```html
<img src="/images/profile.jpg" alt="A user editing their profile" width="640" height="360">
```

## Common attributes

| Attribute | Purpose |
|---|---|
| `src` | Image URL |
| `alt` | Text alternative for the image |
| `width`, `height` | Intrinsic dimensions that help prevent layout shift |
| `loading="lazy"` | Defers an off-screen image |
| `srcset`, `sizes` | Supplies responsive image candidates |

## Meaningful vs decorative images

Write `alt` text that conveys the image's purpose, not its filename. For a purely decorative image, use `alt=""` so assistive technology can skip it.

```html
<img src="/decorative-divider.png" alt="">
```
