# RIGHT JOIN

Returns all rows from the right table, plus matched rows from the left table. The mirror of LEFT JOIN.

## Syntax

```sql
SELECT columns
FROM left_table
RIGHT JOIN right_table ON left_table.column = right_table.column;
```

## Examples

```sql
-- All products, with their orders (if any)
SELECT p.name, o.id AS order_id
FROM orders o
RIGHT JOIN products p ON o.product_id = p.id;

-- Same result using LEFT JOIN (preferred style)
SELECT p.name, o.id AS order_id
FROM products p
LEFT JOIN orders o ON p.id = o.product_id;
```

## Key Points

- The "right" table is the one after RIGHT JOIN
- Every row from the right table appears, even with no match
- Unmatched rows show NULL for all left-table columns
- Most developers prefer LEFT JOIN and swap the table order instead
- Not supported in SQLite
- Also called RIGHT OUTER JOIN (OUTER is optional)
