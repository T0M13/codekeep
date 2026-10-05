---
title: Aggregate Functions
---

# Aggregate Functions

Aggregate functions take a bunch of rows and boil them down to a single value. Instead of seeing every row, you get a summary -- how many, how much, what is the average.

## COUNT -- How Many Rows?

Count all rows in a table:

```sql
SELECT COUNT(*) AS total_customers FROM customers;
```

| total_customers |
|-----------------|
| 5               |

Count rows that match a condition:

```sql
SELECT COUNT(*) AS vienna_customers
FROM customers
WHERE city = 'Vienna';
```

| vienna_customers |
|------------------|
| 2                |

Count non-NULL values in a specific column:

```sql
SELECT COUNT(city) AS customers_with_city FROM customers;
```

This counts only rows where `city` is not NULL.

## SUM -- Add Them Up

Get the total value of all products:

```sql
SELECT SUM(price) AS total_value FROM products;
```

| total_value |
|-------------|
| 1180        |

Find total quantity across all orders:

```sql
SELECT SUM(quantity) AS total_items_ordered FROM orders;
```

| total_items_ordered |
|---------------------|
| 10                  |

## AVG -- The Average

Find the average product price:

```sql
SELECT AVG(price) AS average_price FROM products;
```

| average_price |
|---------------|
| 236           |

> AVG ignores NULL values. If you have 5 products and one has a NULL price, AVG divides by 4, not 5.

## MIN and MAX -- The Extremes

Find the cheapest and most expensive product:

```sql
SELECT
    MIN(price) AS cheapest,
    MAX(price) AS most_expensive
FROM products;
```

| cheapest | most_expensive |
|----------|----------------|
| 12       | 999            |

MIN and MAX work on text too -- they give you the first and last alphabetically:

```sql
SELECT MIN(name) AS first_alpha, MAX(name) AS last_alpha
FROM customers;
```

| first_alpha | last_alpha |
|-------------|------------|
| Alice       | Eve        |

And on dates, MIN gives the oldest and MAX gives the newest:

```sql
SELECT
    MIN(joined_date) AS first_joined,
    MAX(joined_date) AS last_joined
FROM customers;
```

| first_joined | last_joined |
|--------------|-------------|
| 2024-01-15   | 2024-09-05  |

## Combining Aggregate Functions

You can use several in one query:

```sql
SELECT
    COUNT(*) AS total_products,
    SUM(price) AS total_value,
    AVG(price) AS avg_price,
    MIN(price) AS cheapest,
    MAX(price) AS most_expensive
FROM products;
```

| total_products | total_value | avg_price | cheapest | most_expensive |
|----------------|-------------|-----------|----------|----------------|
| 5              | 1180        | 236       | 12       | 999            |

## Using Aggregates with JOIN

Aggregates become really useful when combined with joins. How much has each customer spent?

```sql
SELECT
    c.name,
    SUM(p.price * o.quantity) AS total_spent
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id
INNER JOIN products p ON o.product_id = p.id
GROUP BY c.name;
```

| name    | total_spent |
|---------|-------------|
| Alice   | 1157        |
| Bob     | 75          |
| Charlie | 142         |
| Diana   | 999         |

> We need GROUP BY here because we are asking for totals per customer. More on this in the next lesson.

## ROUND -- Cleaning Up Decimals

AVG often gives you long decimal numbers. Use ROUND to clean them up:

```sql
SELECT ROUND(AVG(price), 2) AS avg_price FROM products;
```

The second argument is how many decimal places you want.

## COUNT(DISTINCT ...) -- Counting Unique Values

How many different cities do your customers live in?

```sql
SELECT COUNT(DISTINCT city) AS unique_cities FROM customers;
```

| unique_cities |
|---------------|
| 3             |

Without DISTINCT, it would count 5 (one per customer, including duplicate cities).

## Aggregates with WHERE

You can filter rows before aggregating:

```sql
SELECT AVG(price) AS avg_electronics_price
FROM products
WHERE category = 'Electronics';
```

| avg_electronics_price |
|-----------------------|
| 539                   |

The WHERE filters first, then AVG calculates on the remaining rows.

## Quick Summary

| Function       | What it does                        | Example                    |
|----------------|-------------------------------------|----------------------------|
| `COUNT(*)`     | Counts all rows                     | `SELECT COUNT(*) FROM t`   |
| `COUNT(col)`   | Counts non-NULL values in a column  | `SELECT COUNT(city) FROM t`|
| `SUM(col)`     | Adds up all values                  | `SELECT SUM(price) FROM t` |
| `AVG(col)`     | Calculates the average              | `SELECT AVG(price) FROM t` |
| `MIN(col)`     | Finds the smallest value            | `SELECT MIN(price) FROM t` |
| `MAX(col)`     | Finds the largest value             | `SELECT MAX(price) FROM t` |

> Think of aggregate functions as the "summary row" at the bottom of a spreadsheet. COUNT is how many entries, SUM is the total, AVG is the average, MIN and MAX are the lowest and highest.

## What's Next

Aggregate functions give you one summary for the whole table. But what if you want a summary per category, or per city? That is what GROUP BY does, and it is up next.
