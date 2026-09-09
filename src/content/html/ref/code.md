# &lt;code&gt;

Displays inline code in a monospace font.

## Syntax

```html
<code>let x = 10;</code>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| Global only | No unique attributes | `class="language-js"` |

## Key Points

- Inline element — use within paragraphs and other text
- Renders in the browser's default monospace font
- For multi-line code blocks, wrap `<code>` inside `<pre>`
- Does not preserve whitespace or line breaks on its own (use `<pre>` for that)
- Often styled with a background color to stand out from surrounding text

## Example

```html
<!-- Inline code -->
<p>Use <code>console.log()</code> to print output in JavaScript.</p>

<!-- Code block (with pre) -->
<pre><code>function greet(name) {
  return "Hello, " + name;
}

greet("World");</code></pre>

<!-- Styled inline code -->
<style>
  code {
    background: #f4f4f4;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
  }
</style>
<p>The <code>&lt;code&gt;</code> tag is for inline code snippets.</p>
```
