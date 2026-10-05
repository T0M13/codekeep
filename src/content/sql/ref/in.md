# IN

Checks if a value matches any item in a list. A cleaner alternative to multiple OR conditions.

## Syntax

```sql
SELECT columns FROM table_name
WHERE column IN (value1, value2, value3);
```

## Examples

```sql
-- Match any of these cities
SELECT * FROM customers
WHERE city IN ('Vienna', 'Berlin', 'Paris');

-- Same as writing:
SELECT * FROM customers
WHERE city = 'Vienna' OR city = 'Berlin' OR city = 'Paris';

-- With numbers
SELECT * FROM products
WHERE id IN (1, 3, 5);

-- NOT IN -- exclude values
SELECT * FROM customers
WHERE city NOT IN ('Vienna', 'Berlin');

-- With a subquery
SELECT * FROM customers
WHERE id IN (SELECT customer_id FROM orders);
```

## Key Points

- Much cleaner than chaining OR conditions
- Works with text, numbers, and dates
- `NOT IN` excludes the listed values
- Be careful with NULL: `NOT IN` behaves unexpectedly if the list contains NULL
- You can use a subquery instead of a hardcoded list
- The list values must match the column's data type
