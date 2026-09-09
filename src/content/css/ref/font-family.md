# font-family

Specifies the font for text. Accepts a prioritized list of font names.

## Syntax

```css
selector {
  font-family: "Font Name", fallback, generic;
}
```

## Values

| Value | Description |
|-------|-------------|
| `"Specific Font"` | A named font (quotes needed if name has spaces) |
| `serif` | Generic: fonts with serifs (e.g., Times New Roman) |
| `sans-serif` | Generic: fonts without serifs (e.g., Arial, Helvetica) |
| `monospace` | Generic: fixed-width (e.g., Courier New) |
| `cursive` | Generic: handwriting-style fonts |
| `system-ui` | The OS default UI font |

## Web-Safe Font Stacks

| Stack | Fonts |
|-------|-------|
| Sans-serif | `"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| Serif | `Georgia, "Times New Roman", Times, serif` |
| Monospace | `"Fira Code", "Courier New", Courier, monospace` |
| System | `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` |

## Key Points

- Always end with a generic family as the last fallback
- The browser uses the first available font in the list
- Font names with spaces must be quoted
- Use `@font-face` or Google Fonts to load custom fonts
- `system-ui` gives the fastest load — no font download needed

## Example

```css
/* System font stack */
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont,
               "Segoe UI", Roboto, sans-serif;
}

/* Code blocks */
code, pre {
  font-family: "Fira Code", "Cascadia Code", Consolas, monospace;
}

/* Load a custom font */
@font-face {
  font-family: "MyFont";
  src: url("/fonts/myfont.woff2") format("woff2");
  font-display: swap;
}
h1 {
  font-family: "MyFont", sans-serif;
}
```
