---
title: SELECT Queries
---

# SELECT Queries

`SELECT` is the most important SQL command. You will use it constantly. It gets data out of a table -- think of it as asking the database a question.

## The Basic SELECT

Here is the simplest query you can write:

```sql
SELECT * FROM customers;
```

The `*` means "all columns." This returns every column and every row in the customers table:

| id | name    | email              | city      | joined_date |
|----|---------|--------------------|-----------|-------------|
| 1  | Alice   | alice@email.com    | Vienna    | 2024-01-15  |
| 2  | Bob     | bob@email.com      | Berlin    | 2024-03-22  |
| 3  | Charlie | charlie@email.com  | Vienna    | 2024-06-10  |
| 4  | Diana   | diana@email.com    | Paris     | 2024-07-01  |
| 5  | Eve     | eve@email.com      | Berlin    | 2024-09-05  |

## Picking Specific Columns

Usually you do not need every column. Just list the ones you want:

```sql
SELECT name, email FROM customers;
```

| name    | email              |
|---------|--------------------|
| Alice   | alice@email.com    |
| Bob     | bob@email.com      |
| Charlie | charlie@email.com  |
| Diana   | diana@email.com    |
| Eve     | eve@email.com      |

This is better than `SELECT *` for two reasons:
1. It is faster -- the database only fetches what you need
2. It is clearer -- anyone reading your query knows exactly what data you want

## Column Aliases with AS

You can rename columns in your results using `AS`:

```sql
SELECT name AS customer_name, city AS location
FROM customers;
```

| customer_name | location |
|---------------|----------|
| Alice         | Vienna   |
| Bob           | Berlin   |
| Charlie       | Vienna   |
| Diana         | Paris    |
| Eve           | Berlin   |

The actual column in the database is still called `name`. The alias only changes how it appears in the result.

## DISTINCT -- Removing Duplicates

What if you want to see which cities your customers are in, without repeats?

```sql
SELECT DISTINCT city FROM customers;
```

| city   |
|--------|
| Vienna |
| Berlin |
| Paris  |

Without `DISTINCT`, Vienna and Berlin would each appear twice.

## Simple Math in SELECT

You can do calculations right inside your query:

```sql
SELECT name, price, price * 0.8 AS sale_price
FROM products;
```

| name       | price | sale_price |
|------------|-------|------------|
| Laptop     | 999   | 799.2      |
| T-Shirt    | 25    | 20.0       |
| Headphones | 79    | 63.2       |
| Coffee Mug | 12    | 9.6        |
| Backpack   | 65    | 52.0       |

This calculates a 20% discount without changing anything in the database.

## Combining Text

You can glue text values together. The syntax varies by database:

```sql
-- SQLite and PostgreSQL use ||
SELECT name || ' - ' || city AS customer_info FROM customers;

-- MySQL uses CONCAT()
SELECT CONCAT(name, ' - ', city) AS customer_info FROM customers;
```

| customer_info     |
|-------------------|
| Alice - Vienna    |
| Bob - Berlin      |
| Charlie - Vienna  |
| Diana - Paris     |
| Eve - Berlin      |

## Counting Rows

Want to know how many customers you have? Use `COUNT`:

```sql
SELECT COUNT(*) AS total_customers FROM customers;
```

| total_customers |
|-----------------|
| 5               |

We will cover `COUNT` and other aggregate functions in detail later. For now, just know it exists.

## The Structure of a SELECT

Every `SELECT` query follows this pattern:

```sql
SELECT columns
FROM table;
```

As you learn more, the query grows:

```sql
SELECT columns
FROM table
WHERE condition
ORDER BY column
LIMIT number;
```

But it always starts with `SELECT` and `FROM`. Everything else is optional.

> Think of `SELECT` as picking which columns to show, and `FROM` as picking which table to look in. It is like saying "show me the name and email from the customer filing cabinet."

## Quick Tips

- Always end your SQL statements with a semicolon `;`
- SQL keywords like `SELECT`, `FROM`, `AS` are not case-sensitive -- `select` works the same as `SELECT`
- Column and table names ARE case-sensitive in some databases, so be consistent
- Use `SELECT *` for quick exploration, but name your columns in real code
- You can select from only one table at a time (until you learn joins)

## What's Next

Getting all the data from a table is nice, but usually you want to find specific rows. The next lesson covers `WHERE` -- how to filter your results to find exactly what you need.
