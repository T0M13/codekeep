---
title: Headings & Paragraphs
---

# Headings & Paragraphs

Headings and paragraphs are the most fundamental HTML elements for structuring text content.

## Headings (h1 - h6)

HTML has 6 levels of headings. `<h1>` is the most important, `<h6>` is the least:

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>
<h4>Sub-subsection</h4>
<h5>Minor heading</h5>
<h6>Smallest heading</h6>
```

> Best practice: Use only one `<h1>` per page. Use headings in order — don't skip from h1 to h4.

## Paragraphs

The `<p>` element defines a paragraph:

```html
<p>This is a paragraph. It automatically adds space above and below.</p>
<p>This is another paragraph. Browsers add margin between them.</p>
```

## Line Breaks & Horizontal Rules

```html
<p>Line one<br>Line two</p>
<hr>
<p>Content after the divider</p>
```

## Text Formatting

```html
<p>This is <strong>bold</strong> and this is <em>italic</em>.</p>
<p>This is <mark>highlighted</mark> text.</p>
<p>This is <small>smaller</small> text.</p>
<p>H<sub>2</sub>O and x<sup>2</sup></p>
```

## Semantic Elements

Use semantic elements to give meaning to your content:

```html
<article>A self-contained piece of content</article>
<section>A thematic group of content</section>
<header>Introductory content</header>
<footer>Footer content</footer>
<main>The main content of the page</main>
<aside>Sidebar or tangential content</aside>
```

```challenge
@title Structure an article
@description Create an article with an h1 title, two paragraphs, and a horizontal rule between them. Use strong to bold one word in the first paragraph.
@language html
@starter <body>
  <!-- Create your article structure here -->

</body>
@expected <article>
```
