# LIMIT

Restricts how many rows are returned. Often used with ORDER BY.

## Syntax

```sql
SELECT columns FROM table_name
LIMIT number;

-- With offset (skip rows)
SELECT columns FROM table_name
LIMIT number OFFSET skip_count;
```

## Examples

```sql
-- Get first 3 rows
SELECT * FROM products LIMIT 3;

-- Top 5 most expensive products
SELECT * FROM products ORDER BY price DESC LIMIT 5;

-- Pagination: page 2 (items 6-10)
SELECT * FROM products ORDER BY id LIMIT 5 OFFSET 5;

-- Single most recent order
SELECT * FROM orders ORDER BY order_date DESC LIMIT 1;
```

## Key Points

- Without ORDER BY, the rows returned by LIMIT are unpredictable
- OFFSET 0 is the default (start from the beginning)
- For pagination: OFFSET = (page_number - 1) * page_size
- SQL Server uses `TOP` instead: `SELECT TOP 5 * FROM products`
- MySQL also supports `LIMIT 5, 10` syntax (offset, count)
