# &lt;span&gt;

Generic inline container for styling or scripting a portion of text.

## Syntax

```html
<span class="highlight">some text</span>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| Global only | No unique attributes | `class="badge"` |

## Key Points

- Inline element — does not start on a new line or add spacing
- Has no visual effect on its own — used with CSS or JavaScript
- Similar to `<div>` but inline instead of block
- Use `<span>` to target a specific piece of text within a larger element
- Prefer semantic tags (`<strong>`, `<em>`, `<mark>`) when they fit the meaning

## Example

```html
<p>
  Your order total is <span class="price">$29.99</span>.
</p>

<p>
  Status: <span style="color: green;">Active</span>
</p>

<p>
  Welcome back, <span id="username">Guest</span>!
</p>
```
