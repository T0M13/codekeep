# UNION

Combines the results of two or more SELECT queries into a single result set.

## Syntax

```sql
SELECT columns FROM table1
UNION
SELECT columns FROM table2;

-- Keep duplicates
SELECT columns FROM table1
UNION ALL
SELECT columns FROM table2;
```

## Examples

```sql
-- Combine customer and product names into one list
SELECT name FROM customers
UNION
SELECT name FROM products;

-- Keep duplicates with UNION ALL
SELECT city FROM customers
UNION ALL
SELECT category FROM products;

-- With a label to show the source
SELECT name, 'customer' AS type FROM customers
UNION
SELECT name, 'product' AS type FROM products;
```

## UNION vs UNION ALL

| Keyword   | Duplicates  | Speed   |
|-----------|------------|---------|
| UNION     | Removed    | Slower  |
| UNION ALL | Kept       | Faster  |

## Key Points

- Both SELECT statements must have the same number of columns
- Column names come from the first SELECT
- Column data types should be compatible
- UNION removes duplicates (like DISTINCT), UNION ALL keeps them
- Use UNION ALL when you know there are no duplicates -- it is faster
- ORDER BY goes at the very end and applies to the combined result
