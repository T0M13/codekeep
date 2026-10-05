# MIN / MAX

Find the smallest or largest value in a column. Works with numbers, text, and dates.

## Syntax

```sql
SELECT MIN(column) FROM table_name;
SELECT MAX(column) FROM table_name;
```

## Examples

```sql
-- Cheapest and most expensive product
SELECT MIN(price) AS cheapest, MAX(price) AS most_expensive
FROM products;
-- Result: 12, 999

-- First and last alphabetically
SELECT MIN(name) AS first, MAX(name) AS last
FROM customers;
-- Result: Alice, Eve

-- Oldest and newest dates
SELECT MIN(joined_date) AS earliest, MAX(joined_date) AS latest
FROM customers;

-- Per category
SELECT category, MIN(price) AS cheapest, MAX(price) AS priciest
FROM products GROUP BY category;

-- Find the row with the max value
SELECT * FROM products
WHERE price = (SELECT MAX(price) FROM products);
```

## Key Points

- Works with numbers, text (alphabetical), and dates (chronological)
- NULL values are ignored
- To get the full row with the min/max value, use a subquery in WHERE
- MIN and MAX return a single value per group (or for the whole table)
- Can be combined with other aggregate functions in the same query
