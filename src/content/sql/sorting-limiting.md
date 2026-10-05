---
title: Sorting & Limiting
---

# Sorting & Limiting

By default, SQL does not guarantee any particular order for your results. If you want your data sorted -- cheapest first, newest first, alphabetical -- you need to ask for it.

## ORDER BY -- Sorting Results

Sort products by price, cheapest first:

```sql
SELECT name, price FROM products
ORDER BY price;
```

| name       | price |
|------------|-------|
| Coffee Mug | 12    |
| T-Shirt    | 25    |
| Backpack   | 65    |
| Headphones | 79    |
| Laptop     | 999   |

By default, `ORDER BY` sorts in **ascending** order (smallest to largest, A to Z, oldest to newest). You can make this explicit with `ASC`:

```sql
ORDER BY price ASC;  -- same as ORDER BY price
```

## Descending Order

To sort from largest to smallest, use `DESC`:

```sql
SELECT name, price FROM products
ORDER BY price DESC;
```

| name       | price |
|------------|-------|
| Laptop     | 999   |
| Headphones | 79    |
| Backpack   | 65    |
| T-Shirt    | 25    |
| Coffee Mug | 12    |

## Sorting by Text

Sorting text columns puts them in alphabetical order:

```sql
SELECT name, city FROM customers
ORDER BY city;
```

| name    | city   |
|---------|--------|
| Bob     | Berlin |
| Eve     | Berlin |
| Diana   | Paris  |
| Alice   | Vienna |
| Charlie | Vienna |

With `DESC`, it would be reverse alphabetical (Vienna first, Berlin last).

## Sorting by Date

Dates sort chronologically:

```sql
SELECT name, joined_date FROM customers
ORDER BY joined_date DESC;
```

| name    | joined_date |
|---------|-------------|
| Eve     | 2024-09-05  |
| Diana   | 2024-07-01  |
| Charlie | 2024-06-10  |
| Bob     | 2024-03-22  |
| Alice   | 2024-01-15  |

This gives you the newest customers first.

## Sorting by Multiple Columns

You can sort by more than one column. The second column breaks ties in the first:

```sql
SELECT name, city FROM customers
ORDER BY city, name;
```

| name    | city   |
|---------|--------|
| Bob     | Berlin |
| Eve     | Berlin |
| Diana   | Paris  |
| Alice   | Vienna |
| Charlie | Vienna |

First it sorts by city. When two customers are in the same city (Berlin), it sorts them by name.

You can mix directions:

```sql
ORDER BY city ASC, name DESC;
```

This sorts cities A-Z, but within each city, names go Z-A.

## LIMIT -- Getting a Subset

Sometimes you only want a few rows. `LIMIT` caps how many rows are returned:

```sql
SELECT name, price FROM products
ORDER BY price DESC
LIMIT 3;
```

| name       | price |
|------------|-------|
| Laptop     | 999   |
| Headphones | 79    |
| Backpack   | 65    |

This gives you the 3 most expensive products. Without `ORDER BY`, `LIMIT` just gives you any 3 rows -- usually not what you want.

## OFFSET -- Skipping Rows

`OFFSET` skips a number of rows before starting to return results. This is useful for pagination:

```sql
-- Page 1: first 2 products
SELECT name, price FROM products
ORDER BY price
LIMIT 2 OFFSET 0;

-- Page 2: next 2 products
SELECT name, price FROM products
ORDER BY price
LIMIT 2 OFFSET 2;

-- Page 3: next 2 products
SELECT name, price FROM products
ORDER BY price
LIMIT 2 OFFSET 4;
```

Page 1 result:

| name       | price |
|------------|-------|
| Coffee Mug | 12    |
| T-Shirt    | 25    |

Page 2 result:

| name       | price |
|------------|-------|
| Backpack   | 65    |
| Headphones | 79    |

> Think of OFFSET as "skip this many rows first." OFFSET 0 means start from the beginning. OFFSET 2 means skip the first 2 rows.

## Practical Examples

**The newest customer:**

```sql
SELECT * FROM customers
ORDER BY joined_date DESC
LIMIT 1;
```

**The 3 cheapest products:**

```sql
SELECT name, price FROM products
ORDER BY price ASC
LIMIT 3;
```

**The most recent 5 orders:**

```sql
SELECT * FROM orders
ORDER BY order_date DESC
LIMIT 5;
```

## Database Differences

Most databases use `LIMIT`, but SQL Server uses `TOP` instead:

```sql
-- MySQL, PostgreSQL, SQLite
SELECT * FROM products LIMIT 5;

-- SQL Server
SELECT TOP 5 * FROM products;
```

## The Full Query Order So Far

Here is the order of clauses in a SELECT query:

```sql
SELECT columns
FROM table
WHERE condition
ORDER BY column
LIMIT number
OFFSET number;
```

> This is the order you write them in. The database actually processes them differently (FROM first, then WHERE, then SELECT, then ORDER BY, then LIMIT), but you do not need to worry about that. Just remember the writing order.

## What's Next

You now know how to get data out of a table, filter it, sort it, and limit the results. Next, you will learn how to put data in and change it -- INSERT, UPDATE, and DELETE.
