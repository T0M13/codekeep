# UPDATE

Changes existing data in a table. Always use with WHERE to avoid updating every row.

## Syntax

```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;
```

## Examples

```sql
-- Update one column
UPDATE customers
SET city = 'Munich'
WHERE name = 'Bob';

-- Update multiple columns
UPDATE customers
SET city = 'Hamburg', email = 'bob.new@email.com'
WHERE id = 2;

-- Update with a calculation
UPDATE products
SET price = price * 1.1
WHERE category = 'Electronics';

-- Update using another column's value
UPDATE products
SET category = 'On Sale'
WHERE price < 20;

-- Update all rows (DANGEROUS -- no WHERE)
UPDATE products SET price = 0;
```

## Key Points

- **Always include a WHERE clause** unless you intentionally want to update every row
- Run a SELECT with the same WHERE first to verify which rows will be affected
- You can update multiple columns by separating them with commas
- You can use math expressions: `SET price = price * 0.9`
- Without WHERE, every row in the table is updated
- The number of affected rows is usually returned by the database
