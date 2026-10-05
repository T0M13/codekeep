---
title: INSERT, UPDATE, DELETE
---

# INSERT, UPDATE, DELETE

So far you have been reading data with SELECT. Now it is time to learn how to add new data, change existing data, and remove data you no longer need.

## INSERT -- Adding New Rows

To add a new customer:

```sql
INSERT INTO customers (name, email, city, joined_date)
VALUES ('Frank', 'frank@email.com', 'London', '2024-10-01');
```

After this, the customers table looks like:

| id | name    | email              | city   | joined_date |
|----|---------|--------------------|--------|-------------|
| 1  | Alice   | alice@email.com    | Vienna | 2024-01-15  |
| 2  | Bob     | bob@email.com      | Berlin | 2024-03-22  |
| 3  | Charlie | charlie@email.com  | Vienna | 2024-06-10  |
| 4  | Diana   | diana@email.com    | Paris  | 2024-07-01  |
| 5  | Eve     | eve@email.com      | Berlin | 2024-09-05  |
| 6  | Frank   | frank@email.com    | London | 2024-10-01  |

Notice we did not specify `id`. Since `id` is a PRIMARY KEY with auto-increment, the database assigns it automatically.

## Inserting Multiple Rows

You can add several rows at once:

```sql
INSERT INTO products (name, price, category)
VALUES
    ('Mouse', 29, 'Electronics'),
    ('Notebook', 5, 'Office'),
    ('Water Bottle', 15, 'Home');
```

This is faster than running three separate INSERT statements.

## Inserting Partial Data

If a column allows NULL or has a DEFAULT, you can skip it:

```sql
INSERT INTO customers (name, email)
VALUES ('Grace', 'grace@email.com');
```

Grace will have NULL for `city` and `joined_date` since we did not provide them.

## UPDATE -- Changing Existing Data

To change data that already exists, use UPDATE:

```sql
UPDATE customers
SET city = 'Munich'
WHERE name = 'Bob';
```

This changes Bob's city from Berlin to Munich. The WHERE clause tells the database which rows to change.

Before:

| id | name | city   |
|----|------|--------|
| 2  | Bob  | Berlin |

After:

| id | name | city   |
|----|------|--------|
| 2  | Bob  | Munich |

## Updating Multiple Columns

Change several things at once by separating them with commas:

```sql
UPDATE customers
SET city = 'Hamburg', email = 'bob.new@email.com'
WHERE name = 'Bob';
```

## Updating Multiple Rows

The WHERE clause can match more than one row:

```sql
UPDATE products
SET price = price * 1.1
WHERE category = 'Electronics';
```

This increases the price of ALL electronics by 10%. Both the Laptop and Headphones would be affected.

> **WARNING**: If you forget the WHERE clause, UPDATE changes EVERY row in the table. This is one of the most common and dangerous mistakes in SQL.

```sql
-- THIS CHANGES EVERY CUSTOMER'S CITY TO 'Unknown'!
UPDATE customers SET city = 'Unknown';
```

Always double-check your WHERE clause before running an UPDATE.

## DELETE -- Removing Rows

To remove a row:

```sql
DELETE FROM customers
WHERE name = 'Frank';
```

This removes Frank from the customers table entirely. The row is gone.

## Deleting Multiple Rows

```sql
DELETE FROM orders
WHERE order_date < '2024-03-01';
```

This deletes all orders placed before March 2024.

> **WARNING**: Just like UPDATE, if you forget the WHERE clause, DELETE removes EVERY row in the table.

```sql
-- THIS DELETES ALL CUSTOMERS!
DELETE FROM customers;
```

The table still exists but it is completely empty. Always use WHERE with DELETE.

## DELETE vs DROP

These are different:

| Command                    | What it does                              |
|----------------------------|-------------------------------------------|
| `DELETE FROM customers;`   | Removes all rows, table structure remains |
| `DROP TABLE customers;`    | Removes the entire table, structure and all |

## A Safer Workflow

When you are about to UPDATE or DELETE, a good habit is to run a SELECT first with the same WHERE clause:

```sql
-- Step 1: Check what will be affected
SELECT * FROM customers WHERE city = 'Berlin';

-- Step 2: If the results look right, run the update
UPDATE customers SET city = 'Berlin-Mitte' WHERE city = 'Berlin';
```

This way you see exactly which rows will be changed before you change them.

## Practical Examples

**Add a new order:**

```sql
INSERT INTO orders (customer_id, product_id, quantity, order_date)
VALUES (2, 4, 1, '2024-10-15');
```

**Give all customers without a city a default:**

```sql
UPDATE customers
SET city = 'Unknown'
WHERE city IS NULL;
```

**Remove orders with zero quantity:**

```sql
DELETE FROM orders
WHERE quantity = 0;
```

**Discount all products over 100:**

```sql
UPDATE products
SET price = price * 0.9
WHERE price > 100;
```

## Quick Summary

| Command  | Purpose       | Example                                         |
|----------|---------------|--------------------------------------------------|
| INSERT   | Add new rows  | `INSERT INTO t (col) VALUES ('val');`            |
| UPDATE   | Change rows   | `UPDATE t SET col = 'val' WHERE condition;`      |
| DELETE   | Remove rows   | `DELETE FROM t WHERE condition;`                 |

> Think of INSERT as adding a new file to the cabinet, UPDATE as opening a file and changing its contents, and DELETE as pulling a file out and throwing it away. DROP TABLE is throwing the entire cabinet in the trash.

## What's Next

You now know all four CRUD operations. Next, you will learn one of the most powerful features in SQL -- joining tables together to combine related data.
