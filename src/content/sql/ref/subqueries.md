# Subqueries

A query nested inside another query. The inner query runs first and its result is used by the outer query.

## Syntax

```sql
-- In WHERE
SELECT columns FROM table
WHERE column OPERATOR (SELECT column FROM table2);

-- In FROM (derived table)
SELECT columns FROM (SELECT ... ) AS alias;

-- In SELECT
SELECT column, (SELECT ... ) AS computed FROM table;
```

## Examples

```sql
-- Products above average price
SELECT name, price FROM products
WHERE price > (SELECT AVG(price) FROM products);

-- Customers who placed orders
SELECT name FROM customers
WHERE id IN (SELECT customer_id FROM orders);

-- As a derived table
SELECT category, avg_price
FROM (
    SELECT category, AVG(price) AS avg_price
    FROM products GROUP BY category
) AS cat_avg
WHERE avg_price > 50;

-- In SELECT clause
SELECT name, price,
    (SELECT AVG(price) FROM products) AS overall_avg
FROM products;
```

## Key Points

- Subqueries are wrapped in parentheses
- Derived tables (in FROM) must have an alias
- A subquery returning one value can use `=`, `>`, `<`
- A subquery returning multiple values uses `IN`, `NOT IN`, `EXISTS`
- Correlated subqueries reference the outer query and run once per row
- Joins are often faster and clearer -- use subqueries when joins cannot express the logic
