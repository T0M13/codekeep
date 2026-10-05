# LEFT JOIN

Returns all rows from the left table, plus matched rows from the right table. Unmatched rows get NULL.

## Syntax

```sql
SELECT columns
FROM left_table
LEFT JOIN right_table ON left_table.column = right_table.column;
```

## Examples

```sql
-- All customers, with their orders (if any)
SELECT c.name, o.id AS order_id, o.order_date
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;

-- Find customers with NO orders
SELECT c.name
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.id IS NULL;

-- All products, with order counts
SELECT p.name, COUNT(o.id) AS times_ordered
FROM products p
LEFT JOIN orders o ON p.id = o.product_id
GROUP BY p.name;
```

## Key Points

- The "left" table is the one in the FROM clause
- Every row from the left table appears, even with no match
- Unmatched rows show NULL for all right-table columns
- Use `WHERE right_table.column IS NULL` to find unmatched rows
- Also called LEFT OUTER JOIN (OUTER is optional)
- This is the most commonly used outer join
