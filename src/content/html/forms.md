---
title: Forms & Input
---

# Forms & Input

Forms are how users interact with web pages — login screens, search bars, surveys, and more.

## Basic Form

```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Submit</button>
</form>
```

## Input Types

HTML5 provides many specialized input types:

```html
<input type="text" placeholder="Plain text">
<input type="email" placeholder="email@example.com">
<input type="password" placeholder="Secret">
<input type="number" min="0" max="100">
<input type="date">
<input type="color">
<input type="range" min="0" max="100">
<input type="file">
<input type="checkbox"> Remember me
<input type="radio" name="choice" value="a"> Option A
<input type="radio" name="choice" value="b"> Option B
```

## Textarea & Select

```html
<textarea rows="4" cols="50" placeholder="Write something..."></textarea>

<select name="language">
  <option value="">Choose a language</option>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
</select>
```

## Form Validation

HTML5 has built-in validation:

```html
<input type="text" required>                    <!-- Must fill -->
<input type="text" minlength="3" maxlength="20"> <!-- Length limits -->
<input type="email">                             <!-- Must be email format -->
<input type="number" min="1" max="100">          <!-- Number range -->
<input type="text" pattern="[A-Za-z]+">          <!-- Regex pattern -->
```

## Fieldset & Legend

Group related inputs:

```html
<fieldset>
  <legend>Personal Info</legend>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname">
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname">
</fieldset>
```

```challenge
@title Build a login form
@description Create a form with email input, password input, a "Remember me" checkbox, and a submit button. Use proper labels and the required attribute.
@language html
@starter <body>
  <form>
    <!-- Add email, password, checkbox, and submit button -->

  </form>
</body>
@expected type="password"
```
