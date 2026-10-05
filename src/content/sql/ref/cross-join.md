# CROSS JOIN

Produces every possible combination of rows from two tables (the Cartesian product).

## Syntax

```sql
SELECT columns
FROM table1
CROSS JOIN table2;

-- Equivalent shorthand
SELECT columns
FROM table1, table2;
```

## Examples

```sql
-- Every customer paired with every product
SELECT c.name, p.name AS product
FROM customers c
CROSS JOIN products p;
-- 5 customers x 5 products = 25 rows

-- Generate a price matrix with discounts
SELECT
    p.name,
    d.label,
    p.price * d.multiplier AS discounted_price
FROM products p
CROSS JOIN (
    SELECT '10% off' AS label, 0.9 AS multiplier
    UNION SELECT '20% off', 0.8
    UNION SELECT '30% off', 0.7
) d;
```

## Key Points

- No ON clause -- every row is paired with every other row
- Result size = rows in table1 multiplied by rows in table2
- Can produce very large results -- use carefully
- Useful for generating combinations, calendars, or matrices
- Rarely used in everyday queries
