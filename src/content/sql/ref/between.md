# BETWEEN

Filters values within a range. The range is inclusive (both endpoints are included).

## Syntax

```sql
SELECT columns FROM table_name
WHERE column BETWEEN low_value AND high_value;
```

## Examples

```sql
-- Price between 20 and 100
SELECT * FROM products
WHERE price BETWEEN 20 AND 100;

-- Same as:
SELECT * FROM products
WHERE price >= 20 AND price <= 100;

-- Date range
SELECT * FROM orders
WHERE order_date BETWEEN '2024-01-01' AND '2024-06-30';

-- NOT BETWEEN
SELECT * FROM products
WHERE price NOT BETWEEN 20 AND 100;

-- With other conditions
SELECT * FROM products
WHERE price BETWEEN 10 AND 500
  AND category = 'Electronics';
```

## Key Points

- BETWEEN is inclusive: `BETWEEN 20 AND 100` includes 20 and 100
- Works with numbers, dates, and text
- The low value must come first: `BETWEEN 20 AND 100`, not `BETWEEN 100 AND 20`
- For dates, be aware that `BETWEEN '2024-01-01' AND '2024-01-31'` includes the full day of Jan 1 but only midnight of Jan 31 if timestamps are used
- `NOT BETWEEN` gives you everything outside the range
