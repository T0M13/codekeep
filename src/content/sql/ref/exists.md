# EXISTS

Tests whether a subquery returns any rows. Returns TRUE if at least one row is found, FALSE if none.

## Syntax

```sql
SELECT columns FROM table1
WHERE EXISTS (SELECT 1 FROM table2 WHERE condition);
```

## Examples

```sql
-- Customers who have placed at least one order
SELECT name FROM customers c
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.id
);

-- Customers who have NOT placed any orders
SELECT name FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.customer_id = c.id
);

-- Products that have been ordered
SELECT name FROM products p
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.product_id = p.id
);
```

## EXISTS vs IN

```sql
-- These give the same result:
SELECT name FROM customers
WHERE id IN (SELECT customer_id FROM orders);

SELECT name FROM customers c
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);
```

| Approach | Better when...                                |
|----------|-----------------------------------------------|
| EXISTS   | The subquery table is large                   |
| IN       | The subquery returns a small list of values   |

## Key Points

- EXISTS only checks if rows exist -- it does not care about the values
- `SELECT 1` is conventional; the actual value does not matter
- EXISTS is a correlated subquery -- it runs once per row in the outer query
- Often faster than IN for large datasets because it stops at the first match
- NOT EXISTS finds rows with no matching records in the other table
