---
title: Tables & Data Types
---

# Tables & Data Types

Before you can store any data, you need to create a **table**. A table is like a blank spreadsheet -- you decide what columns it has and what kind of data each column holds.

## Creating a Table

Here is how you create the `products` table for our online store:

```sql
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT
);
```

Let's break this down:

- `CREATE TABLE products` -- make a new table called "products"
- Inside the parentheses, you list each column
- Each column has a **name** and a **data type**
- `PRIMARY KEY` means this column uniquely identifies each row
- `NOT NULL` means this column cannot be left empty

## Common Data Types

Different databases support different types, but these core ones work almost everywhere:

| Type      | What it stores          | Examples                       |
|-----------|-------------------------|--------------------------------|
| INTEGER   | Whole numbers           | 1, 42, -7, 1000               |
| REAL      | Decimal numbers         | 3.14, 99.99, -0.5             |
| TEXT      | Text of any length      | 'Alice', 'hello@email.com'    |
| DATE      | Calendar dates          | '2024-01-15'                   |
| BOOLEAN   | True or false           | TRUE, FALSE                    |

> In SQL, text values are always wrapped in **single quotes**: `'like this'`. Double quotes are used for column names in some databases, so stick with single quotes for values.

## Our Complete Database

Here is how you would create all three tables for our online store:

```sql
CREATE TABLE customers (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    city TEXT,
    joined_date DATE
);

CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT
);

CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    order_date DATE
);
```

Notice how `orders` has `customer_id` and `product_id` columns. These reference the `id` columns in the other tables. This is how you connect tables together -- more on that in the Joins lesson.

## Constraints -- Rules for Your Data

Constraints are rules that protect your data from mistakes. You already saw two of them:

| Constraint    | What it does                                        |
|---------------|-----------------------------------------------------|
| PRIMARY KEY   | Uniquely identifies each row, cannot be NULL        |
| NOT NULL      | The column must have a value, cannot be left empty  |
| UNIQUE        | No two rows can have the same value in this column  |
| DEFAULT       | Sets a fallback value if none is provided           |
| CHECK         | Only allows values that pass a condition            |
| FOREIGN KEY   | Links to a row in another table                     |

Here is a table with several constraints in action:

```sql
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    price REAL NOT NULL CHECK(price > 0),
    category TEXT DEFAULT 'General'
);
```

This says:
- Every product must have a unique name
- The price must be greater than zero
- If no category is given, use 'General'

## Modifying Tables Later

Already created a table and need to change it? Use `ALTER TABLE`:

```sql
-- Add a new column
ALTER TABLE customers ADD COLUMN phone TEXT;

-- Remove a column (not supported in all databases)
ALTER TABLE customers DROP COLUMN phone;
```

## Deleting a Table

If you want to completely remove a table and all its data:

```sql
DROP TABLE products;
```

> Be very careful with `DROP TABLE`. It deletes the table and everything in it. There is no undo.

A safer version checks if the table exists first:

```sql
DROP TABLE IF EXISTS products;
```

## Viewing Table Structure

To see what columns a table has, the command depends on your database:

```sql
-- SQLite
.schema products

-- MySQL / MariaDB
DESCRIBE products;

-- PostgreSQL
\d products
```

## Naming Tips

A few practical tips for naming tables and columns:

- Use **lowercase** with **underscores**: `order_date` not `OrderDate`
- Table names are usually **plural**: `customers` not `customer`
- Column names are usually **singular**: `name` not `names`
- Keep names short but descriptive: `joined_date` is better than `d` or `the_date_when_the_customer_joined`

> Think of your table as a filing cabinet drawer. The table name is the label on the drawer. The columns are the categories on each file. The rows are the individual files inside.

## What's Next

Now that you have tables, it is time to get data out of them. In the next lesson, you will learn the most important SQL command: `SELECT`.
