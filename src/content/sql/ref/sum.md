# SUM

Adds up all values in a numeric column.

## Syntax

```sql
SELECT SUM(column) FROM table_name;
```

## Examples

```sql
-- Total of all product prices
SELECT SUM(price) AS total_value FROM products;
-- Result: 1180

-- Total quantity ordered
SELECT SUM(quantity) AS total_items FROM orders;

-- Sum with a condition
SELECT SUM(price) AS electronics_value
FROM products WHERE category = 'Electronics';

-- Sum per category
SELECT category, SUM(price) AS category_total
FROM products GROUP BY category;

-- Sum with a calculation
SELECT SUM(price * quantity) AS revenue
FROM orders o
INNER JOIN products p ON o.product_id = p.id;
```

## Key Points

- Only works on numeric columns (INTEGER, REAL)
- NULL values are ignored (not treated as 0)
- Returns NULL if there are no rows (use `COALESCE(SUM(col), 0)` to get 0 instead)
- Can be combined with expressions like `SUM(price * quantity)`
- Often used with GROUP BY for totals per category
