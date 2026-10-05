# INSERT

Adds new rows to a table.

## Syntax

```sql
INSERT INTO table_name (column1, column2)
VALUES (value1, value2);
```

## Examples

```sql
-- Insert one row
INSERT INTO customers (name, email, city, joined_date)
VALUES ('Frank', 'frank@email.com', 'London', '2024-10-01');

-- Insert multiple rows
INSERT INTO products (name, price, category)
VALUES
    ('Mouse', 29, 'Electronics'),
    ('Notebook', 5, 'Office'),
    ('Water Bottle', 15, 'Home');

-- Insert with some columns omitted (they get NULL or default)
INSERT INTO customers (name, email)
VALUES ('Grace', 'grace@email.com');

-- Insert from another query
INSERT INTO vip_customers (name, email)
SELECT name, email FROM customers WHERE city = 'Vienna';
```

## Key Points

- Column names in parentheses must match the order and number of values
- Text values go in single quotes, numbers do not
- Columns with `NOT NULL` must always be provided (unless they have a DEFAULT)
- PRIMARY KEY columns with auto-increment can be omitted
- The `INSERT INTO ... SELECT` form copies data from one table to another
- If you do not list columns, you must provide values for every column in order
