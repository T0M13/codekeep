# FULL JOIN

Returns all rows from both tables. Matches where possible, fills with NULL where there is no match.

## Syntax

```sql
SELECT columns
FROM table1
FULL JOIN table2 ON table1.column = table2.column;
```

## Examples

```sql
-- All customers and all orders, matched where possible
SELECT c.name, o.id AS order_id
FROM customers c
FULL JOIN orders o ON c.id = o.customer_id;

-- Find unmatched rows from either side
SELECT c.name, o.id AS order_id
FROM customers c
FULL JOIN orders o ON c.id = o.customer_id
WHERE c.id IS NULL OR o.id IS NULL;
```

## Result Behavior

| Scenario                     | What appears                         |
|-----------------------------|--------------------------------------|
| Customer has orders         | Customer + order data                |
| Customer has no orders      | Customer + NULL for order columns    |
| Order has no valid customer | NULL for customer columns + order    |

## Key Points

- Combines LEFT JOIN and RIGHT JOIN behavior
- Useful for finding mismatches or orphaned records
- Not supported in SQLite or MySQL (use UNION of LEFT and RIGHT JOIN instead)
- Also called FULL OUTER JOIN (OUTER is optional)
- Less commonly used than INNER or LEFT JOIN
