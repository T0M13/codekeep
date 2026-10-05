---
title: Joining Tables
---

# Joining Tables

So far you have been working with one table at a time. But real databases have multiple related tables. Joins let you combine them.

Remember our three tables? The `orders` table has `customer_id` and `product_id`, but those are just numbers. To see the actual customer name and product name, you need to join the tables together.

## Why Joins Exist

Look at this order:

| id | customer_id | product_id | quantity | order_date |
|----|-------------|------------|----------|------------|
| 1  | 1           | 1          | 1        | 2024-02-10 |

Who is customer 1? What is product 1? You would have to look at the other tables separately. Joins do this automatically.

## INNER JOIN -- The Most Common Join

An INNER JOIN combines rows from two tables where they have matching values:

```sql
SELECT orders.id, customers.name, products.name, orders.quantity
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id
INNER JOIN products ON orders.product_id = products.id;
```

| id | name    | name       | quantity |
|----|---------|------------|----------|
| 1  | Alice   | Laptop     | 1        |
| 2  | Alice   | Headphones | 2        |
| 3  | Bob     | T-Shirt    | 3        |
| 4  | Charlie | Coffee Mug | 1        |
| 5  | Diana   | Laptop     | 1        |
| 6  | Charlie | Backpack   | 2        |

Now you can see real names instead of ID numbers. Let's use aliases to clean up the column names:

```sql
SELECT
    o.id AS order_id,
    c.name AS customer,
    p.name AS product,
    o.quantity,
    o.order_date
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id
INNER JOIN products p ON o.product_id = p.id;
```

| order_id | customer | product    | quantity | order_date |
|----------|----------|------------|----------|------------|
| 1        | Alice    | Laptop     | 1        | 2024-02-10 |
| 2        | Alice    | Headphones | 2        | 2024-02-10 |
| 3        | Bob      | T-Shirt    | 3        | 2024-04-15 |
| 4        | Charlie  | Coffee Mug | 1        | 2024-07-20 |
| 5        | Diana    | Laptop     | 1        | 2024-08-05 |
| 6        | Charlie  | Backpack   | 2        | 2024-08-12 |

> The `o`, `c`, and `p` are **table aliases**. They save you from typing `orders.customer_id` every time -- you just write `o.customer_id` instead.

## How Joins Work

Think of a join like looking something up in a reference book. For each order, the database looks up the customer ID in the customers table to find the name. It is exactly like a VLOOKUP in a spreadsheet.

The `ON` clause tells the database which columns to match:

```sql
ON orders.customer_id = customers.id
```

This means: "For each order, find the customer whose `id` equals the order's `customer_id`."

## LEFT JOIN -- Include Everything from the Left Table

An INNER JOIN only shows rows that have matches in both tables. A LEFT JOIN shows ALL rows from the left table, even if there is no match.

Eve has no orders. With an INNER JOIN, she would not appear. With a LEFT JOIN:

```sql
SELECT c.name, o.id AS order_id, o.order_date
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;
```

| name    | order_id | order_date |
|---------|----------|------------|
| Alice   | 1        | 2024-02-10 |
| Alice   | 2        | 2024-02-10 |
| Bob     | 3        | 2024-04-15 |
| Charlie | 4        | 2024-07-20 |
| Charlie | 6        | 2024-08-12 |
| Diana   | 5        | 2024-08-05 |
| Eve     | NULL     | NULL       |

Eve appears with NULLs because she has no matching orders. This is useful when you want to find customers who have NOT placed orders:

```sql
SELECT c.name
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.id IS NULL;
```

| name |
|------|
| Eve  |

## RIGHT JOIN

A RIGHT JOIN is the mirror of LEFT JOIN -- it includes all rows from the right table. In practice, most people just swap the table order and use LEFT JOIN instead. Not all databases support RIGHT JOIN (SQLite does not).

## FULL JOIN

A FULL JOIN includes all rows from both tables, matching where possible and filling with NULL where there is no match. Think of it as a LEFT JOIN and RIGHT JOIN combined.

## CROSS JOIN

A CROSS JOIN gives you every possible combination of rows from both tables:

```sql
SELECT c.name, p.name
FROM customers c
CROSS JOIN products p;
```

With 5 customers and 5 products, this returns 25 rows (5 times 5). You rarely need this, but it is useful for generating combinations.

## Joining with Conditions

You can add WHERE to filter your joined results:

```sql
SELECT c.name, p.name AS product, o.quantity
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id
INNER JOIN products p ON o.product_id = p.id
WHERE p.category = 'Electronics';
```

| name  | product    | quantity |
|-------|------------|----------|
| Alice | Laptop     | 1        |
| Alice | Headphones | 2        |
| Diana | Laptop     | 1        |

## When to Use Which Join

| Join Type  | When to use it                                           |
|------------|----------------------------------------------------------|
| INNER JOIN | You only want rows that have matches in both tables      |
| LEFT JOIN  | You want all rows from the first table, matches or not   |
| RIGHT JOIN | You want all rows from the second table (rarely used)    |
| FULL JOIN  | You want everything from both tables                     |
| CROSS JOIN | You want every possible combination                      |

> Use INNER JOIN when you want "give me orders with their customer info." Use LEFT JOIN when you want "give me all customers, and their orders if they have any."

## What's Next

Joins let you connect tables. Next, you will learn aggregate functions -- how to count rows, sum up totals, find averages, and more.
