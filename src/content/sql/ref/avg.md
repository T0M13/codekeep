# AVG

Calculates the average (mean) of values in a numeric column.

## Syntax

```sql
SELECT AVG(column) FROM table_name;
```

## Examples

```sql
-- Average product price
SELECT AVG(price) AS avg_price FROM products;
-- Result: 236

-- Rounded average
SELECT ROUND(AVG(price), 2) AS avg_price FROM products;

-- Average with a filter
SELECT AVG(price) AS avg_clothing
FROM products WHERE category = 'Clothing';

-- Average per category
SELECT category, ROUND(AVG(price), 2) AS avg_price
FROM products GROUP BY category;

-- Compare each product to the average
SELECT name, price, price - (SELECT AVG(price) FROM products) AS diff
FROM products;
```

## Key Points

- Only works on numeric columns
- NULL values are skipped (not counted as 0)
- If all values are NULL, AVG returns NULL
- Use ROUND() to control decimal places
- AVG = SUM / COUNT (ignoring NULLs)
- Be careful: if you want NULLs treated as 0, use `AVG(COALESCE(column, 0))`
