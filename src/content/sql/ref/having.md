# HAVING

Filters groups created by GROUP BY. Like WHERE, but for aggregated results.

## Syntax

```sql
SELECT column, AGGREGATE(other_column)
FROM table_name
GROUP BY column
HAVING condition;
```

## Examples

```sql
-- Cities with more than 1 customer
SELECT city, COUNT(*) AS num
FROM customers GROUP BY city
HAVING COUNT(*) > 1;

-- Categories with average price over 50
SELECT category, AVG(price) AS avg_price
FROM products GROUP BY category
HAVING AVG(price) > 50;

-- Customers who ordered more than once
SELECT customer_id, COUNT(*) AS order_count
FROM orders GROUP BY customer_id
HAVING COUNT(*) > 1;

-- Combining WHERE and HAVING
SELECT category, SUM(price) AS total
FROM products
WHERE price > 10
GROUP BY category
HAVING SUM(price) > 100;
```

## WHERE vs HAVING

| Clause | Filters     | Runs           | Can use aggregates? |
|--------|------------|----------------|---------------------|
| WHERE  | Rows       | Before grouping | No                  |
| HAVING | Groups     | After grouping  | Yes                 |

## Key Points

- HAVING only works with GROUP BY
- Use WHERE to filter individual rows before grouping
- Use HAVING to filter groups after aggregation
- You can use both WHERE and HAVING in the same query
- HAVING conditions typically use aggregate functions (COUNT, SUM, AVG, etc.)
