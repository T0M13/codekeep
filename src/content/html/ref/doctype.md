# <!DOCTYPE>

The `<!DOCTYPE html>` declaration tells the browser this is an HTML5 document. It must be the very first line.

## Syntax

```html
<!DOCTYPE html>
<html>
  ...
</html>
```

## Key Points

- Not an HTML tag — it's an instruction to the browser
- Must be at the very top of the file, before `<html>`
- Not case-sensitive: `<!DOCTYPE html>` and `<!doctype html>` both work
- Without it, browsers may render in "quirks mode" which can cause layout issues

## HTML5 vs Older Versions

| Version | DOCTYPE |
|---------|---------|
| HTML5 | `<!DOCTYPE html>` |
| HTML 4.01 | `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">` |
| XHTML 1.0 | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN">` |

> Always use `<!DOCTYPE html>`. The old versions are only for legacy pages.
