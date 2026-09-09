# map, filter, and reduce

These array methods process values without changing the original array.

## Differences

| Method | Result |
|---|---|
| `map()` | One transformed value for every input value |
| `filter()` | Only values that pass a test |
| `reduce()` | One accumulated result |

## Example

```javascript
const prices = [8, 12, 20];

const withTax = prices.map((price) => price * 1.2);
// [9.6, 14.4, 24]

const expensive = prices.filter((price) => price >= 12);
// [12, 20]

const total = prices.reduce((sum, price) => sum + price, 0);
// 40
```

## Key points

- All three take callback functions.
- `map()` and `filter()` return new arrays.
- Give `reduce()` an initial value such as `0`, `[]`, or `{}` when possible.
- Use `forEach()` for side effects when you do not need a returned collection.
