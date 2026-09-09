---
title: Lists
---

# Lists

HTML provides three types of lists for organizing content.

## Unordered Lists

Use `<ul>` for bullet-point lists:

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

## Ordered Lists

Use `<ol>` for numbered lists:

```html
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

You can change the numbering:

```html
<ol type="A">  <!-- A, B, C -->
<ol type="I">  <!-- I, II, III -->
<ol start="5"> <!-- Start from 5 -->
```

## Description Lists

Use `<dl>` for term-definition pairs:

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

## Nested Lists

Lists can be nested inside each other:

```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Python</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

```challenge
@title Create a nested list
@description Create an unordered list with at least 2 items, where the first item contains a nested ordered list with 3 sub-items.
@language html
@starter <body>
  <ul>
    <li>Frontend

    </li>
    <li>Backend</li>
  </ul>
</body>
@expected <ol>
```
