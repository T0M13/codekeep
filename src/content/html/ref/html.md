# &lt;html&gt;

The root element of every HTML page. Everything else goes inside it.

## Syntax

```html
<!DOCTYPE html>
<html lang="en">
  <head>...</head>
  <body>...</body>
</html>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `lang` | Language of the page | `lang="en"`, `lang="de"` |
| `dir` | Text direction | `dir="ltr"`, `dir="rtl"` |

## Key Points

- There should be only one `<html>` element per page
- It should contain exactly two children: `<head>` and `<body>`
- Always set `lang` — it helps screen readers and search engines
- The closing `</html>` tag is technically optional but always include it
