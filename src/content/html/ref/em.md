# &lt;em&gt;

Marks text with stress emphasis — displayed as *italic* by default.

## Syntax

```html
<em>emphasized text</em>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| Global only | No unique attributes | `class="note"` |

## Key Points

- Semantic tag — indicates emphasis, not just visual italics
- Screen readers may change tone for `<em>` text
- For purely visual italics without meaning, use CSS `font-style: italic`
- `<i>` also renders italic but is for alternate voice/mood (like a term or thought), not emphasis
- Can be nested to increase the level of emphasis
- Inline element

## Example

```html
<p>You <em>must</em> complete the form before submitting.</p>

<p>
  The concert is on <em>Saturday</em>, not Sunday.
</p>

<p>
  I <em>really</em> think we should go.
</p>
```
