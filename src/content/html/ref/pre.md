# &lt;pre&gt;

Displays preformatted text — preserves whitespace, line breaks, and spacing exactly as written.

## Syntax

```html
<pre>
  This   text   preserves
  all    spacing   and
  line breaks.
</pre>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| Global only | No unique attributes | `class="code-block"` |

## Key Points

- Block-level element
- Preserves all whitespace, tabs, and line breaks
- Rendered in a monospace font by default
- Commonly used with `<code>` inside for code blocks
- HTML entities inside still need escaping (`&lt;` for `<`, `&amp;` for `&`)
- Browsers do not collapse multiple spaces like they do in normal text

## Example

```html
<!-- ASCII art -->
<pre>
  /\_/\
 ( o.o )
  > ^ <
</pre>

<!-- Code block -->
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Hello&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;World&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
```
