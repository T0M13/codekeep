# &lt;label&gt;

The `<label>` element gives a form control an accessible name and a larger clickable target.

## Explicit association

Match the label's `for` value to the control's `id`.

```html
<label for="email">Email address</label>
<input id="email" name="email" type="email" autocomplete="email">
```

## Implicit association

A control may also be nested inside its label.

```html
<label>
  <input type="checkbox" name="updates">
  Send product updates
</label>
```

## Key points

- Visible placeholder text is not a replacement for a label.
- Do not put multiple interactive controls inside one label.
- Prefer the explicit `for` and `id` form when layout or component boundaries separate the elements.
