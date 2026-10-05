# COUNT

Counts the number of rows or non-NULL values.

## Syntax

```sql
SELECT COUNT(*) FROM table_name;
SELECT COUNT(column) FROM table_name;
SELECT COUNT(DISTINCT column) FROM table_name;
```

## Examples

```sql
-- Count all rows
SELECT COUNT(*) AS total FROM customers;
-- Result: 5

-- Count rows matching a condition
SELECT COUNT(*) AS vienna_count
FROM customers WHERE city = 'Vienna';
-- Result: 2

-- Count non-NULL values in a column
SELECT COUNT(city) AS has_city FROM customers;

-- Count unique values
SELECT COUNT(DISTINCT city) AS unique_cities FROM customers;
-- Result: 3

-- Count per group
SELECT category, COUNT(*) AS product_count
FROM products GROUP BY category;
```

## Key Points

- `COUNT(*)` counts all rows, including those with NULL values
- `COUNT(column)` counts only rows where that column is not NULL
- `COUNT(DISTINCT column)` counts unique non-NULL values
- Often used with GROUP BY to count items per category
- Returns 0 if no rows match (never returns NULL)
