# DISTINCT

Removes duplicate values from your results.

## Syntax

```sql
SELECT DISTINCT column1 FROM table_name;
SELECT DISTINCT column1, column2 FROM table_name;
```

## Examples

```sql
-- Unique cities
SELECT DISTINCT city FROM customers;
-- Returns: Vienna, Berlin, Paris (no duplicates)

-- Unique combinations of city and name
SELECT DISTINCT city, name FROM customers;

-- Count unique values
SELECT COUNT(DISTINCT city) AS unique_cities FROM customers;

-- Distinct categories with sorting
SELECT DISTINCT category FROM products ORDER BY category;
```

## Key Points

- DISTINCT applies to the entire row, not just one column
- `SELECT DISTINCT city, name` removes rows where both city AND name are the same
- `COUNT(DISTINCT column)` counts unique non-NULL values
- DISTINCT can slow down queries on large tables -- the database must compare every row
- NULL is treated as a single distinct value
