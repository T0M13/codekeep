# async and await

`async` and `await` provide readable syntax for working with promises.

## Syntax

```javascript
async function loadUser(id) {
  const response = await fetch(`/api/users/${id}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}
```

An `async` function always returns a promise. `await` pauses that function until the promise settles without blocking the JavaScript runtime.

## Error handling

```javascript
try {
  const user = await loadUser(42);
  console.log(user.name);
} catch (error) {
  console.error(error.message);
}
```

## Difference from `.then()`

Both forms use promises. `await` often makes sequential steps and `try/catch` easier to read; `.then()` remains useful for direct promise composition. Start independent work together with `Promise.all()` instead of awaiting each request one at a time.
