# ORDER BY

Sorts query results by one or more columns.

## Syntax

```sql
SELECT columns FROM table_name
ORDER BY column1 [ASC|DESC], column2 [ASC|DESC];
```

## Examples

```sql
-- Ascending (default, A-Z, smallest first)
SELECT * FROM products ORDER BY price;

-- Descending (Z-A, largest first)
SELECT * FROM products ORDER BY price DESC;

-- Sort by multiple columns
SELECT * FROM customers ORDER BY city ASC, name ASC;

-- Mix directions
SELECT * FROM customers ORDER BY city ASC, joined_date DESC;
```

## Key Points

- Default order is `ASC` (ascending) if you do not specify
- `ASC` = A to Z, smallest to largest, oldest to newest
- `DESC` = Z to A, largest to smallest, newest to oldest
- You can sort by columns not in your SELECT list
- Multiple columns: the second column breaks ties in the first
- NULL values typically sort first in ASC and last in DESC (varies by database)
