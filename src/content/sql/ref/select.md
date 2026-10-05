# SELECT

Gets data from a table. The most common SQL command you will use.

## Syntax

```sql
SELECT column1, column2 FROM table_name;
```

## Examples

```sql
-- Get all columns
SELECT * FROM customers;

-- Get specific columns
SELECT name, email FROM customers;

-- With alias
SELECT name AS customer_name FROM customers;

-- Simple calculation
SELECT name, price, price * 0.9 AS discounted FROM products;
```

## Key Points

- `*` means "all columns" -- useful for quick lookups, avoid in production code
- Always end statements with `;`
- SQL keywords are not case-sensitive (`SELECT` = `select`)
- Column names are case-sensitive in some databases
- List only the columns you need for better performance
- Use `AS` to rename columns in the output
