# GROUP BY

Groups rows with the same values into summary rows. Used with aggregate functions.

## Syntax

```sql
SELECT column, AGGREGATE(other_column)
FROM table_name
GROUP BY column;
```

## Examples

```sql
-- Count customers per city
SELECT city, COUNT(*) AS num_customers
FROM customers GROUP BY city;

-- Total sales per category
SELECT category, SUM(price) AS total
FROM products GROUP BY category;

-- Group by multiple columns
SELECT city, category, COUNT(*) AS cnt
FROM customers c
JOIN orders o ON c.id = o.customer_id
JOIN products p ON o.product_id = p.id
GROUP BY city, category;

-- With ORDER BY
SELECT category, COUNT(*) AS cnt
FROM products GROUP BY category
ORDER BY cnt DESC;
```

## The Golden Rule

Every column in SELECT must either be in GROUP BY or inside an aggregate function:

```sql
-- This works
SELECT city, COUNT(*) FROM customers GROUP BY city;

-- This FAILS
SELECT city, name, COUNT(*) FROM customers GROUP BY city;
-- name is not grouped or aggregated
```

## Key Points

- GROUP BY splits data into groups, then aggregates each group
- Place GROUP BY after WHERE but before HAVING and ORDER BY
- You can group by multiple columns (creates groups for each unique combination)
- Without GROUP BY, aggregate functions summarize the entire table
- Think of it as sorting papers into piles, then counting each pile
