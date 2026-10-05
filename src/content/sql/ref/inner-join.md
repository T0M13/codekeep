# INNER JOIN

Returns only rows that have matching values in both tables. The most common type of join.

## Syntax

```sql
SELECT columns
FROM table1
INNER JOIN table2 ON table1.column = table2.column;
```

## Examples

```sql
-- Get order details with customer names
SELECT o.id, c.name, o.order_date
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id;

-- Join three tables
SELECT c.name, p.name AS product, o.quantity
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id
INNER JOIN products p ON o.product_id = p.id;

-- With a filter
SELECT c.name, p.name
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id
INNER JOIN products p ON o.product_id = p.id
WHERE p.category = 'Electronics';
```

## Key Points

- Only returns rows where the ON condition matches in both tables
- If a customer has no orders, they will not appear in the result
- If an order references a non-existent customer, it will not appear either
- `JOIN` without a keyword defaults to INNER JOIN in most databases
- Use table aliases (`o`, `c`, `p`) to keep queries readable
