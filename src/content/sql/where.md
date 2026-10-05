---
title: Filtering with WHERE
---

# Filtering with WHERE

So far you have been getting all the rows from a table. In real life, you almost always want to narrow things down. That is what `WHERE` does -- it filters your results to only include rows that match a condition.

## Basic Filtering

Find all customers in Vienna:

```sql
SELECT * FROM customers
WHERE city = 'Vienna';
```

| id | name    | email             | city   | joined_date |
|----|---------|-------------------|--------|-------------|
| 1  | Alice   | alice@email.com   | Vienna | 2024-01-15  |
| 3  | Charlie | charlie@email.com | Vienna | 2024-06-10  |

The database checks every row: "Is the city Vienna?" If yes, the row is included. If no, it is skipped.

## Comparison Operators

You can compare values in several ways:

| Operator | Meaning                | Example                    |
|----------|------------------------|----------------------------|
| `=`      | Equal to               | `WHERE city = 'Berlin'`    |
| `!=`     | Not equal to           | `WHERE city != 'Berlin'`   |
| `<`      | Less than              | `WHERE price < 50`         |
| `>`      | Greater than           | `WHERE price > 50`         |
| `<=`     | Less than or equal     | `WHERE price <= 50`        |
| `>=`     | Greater than or equal  | `WHERE quantity >= 2`      |

Find products that cost less than 50:

```sql
SELECT name, price FROM products
WHERE price < 50;
```

| name       | price |
|------------|-------|
| T-Shirt    | 25    |
| Coffee Mug | 12    |

## AND -- Multiple Conditions

Use `AND` when ALL conditions must be true:

```sql
SELECT * FROM products
WHERE category = 'Electronics' AND price < 500;
```

| id | name       | price | category    |
|----|------------|-------|-------------|
| 3  | Headphones | 79    | Electronics |

The Laptop is Electronics but costs 999, so it does not match.

## OR -- Either Condition

Use `OR` when ANY condition can be true:

```sql
SELECT * FROM products
WHERE category = 'Electronics' OR category = 'Home';
```

| id | name       | price | category    |
|----|------------|-------|-------------|
| 1  | Laptop     | 999   | Electronics |
| 3  | Headphones | 79    | Electronics |
| 4  | Coffee Mug | 12    | Home        |

## Combining AND and OR

When mixing AND and OR, use parentheses to be clear:

```sql
SELECT * FROM products
WHERE (category = 'Electronics' OR category = 'Home')
  AND price < 100;
```

| id | name       | price | category    |
|----|------------|-------|-------------|
| 3  | Headphones | 79    | Electronics |
| 4  | Coffee Mug | 12    | Home        |

Without parentheses, the database might interpret your logic differently than you expect. Always use parentheses with mixed AND/OR.

## IN -- Matching a List

Instead of writing multiple OR conditions, use `IN`:

```sql
-- Instead of this:
SELECT * FROM customers WHERE city = 'Vienna' OR city = 'Berlin';

-- Write this:
SELECT * FROM customers WHERE city IN ('Vienna', 'Berlin');
```

| id | name    | email             | city   | joined_date |
|----|---------|-------------------|--------|-------------|
| 1  | Alice   | alice@email.com   | Vienna | 2024-01-15  |
| 2  | Bob     | bob@email.com     | Berlin | 2024-03-22  |
| 3  | Charlie | charlie@email.com | Vienna | 2024-06-10  |
| 5  | Eve     | eve@email.com     | Berlin | 2024-09-05  |

Much cleaner, especially when you have many values to check.

## BETWEEN -- A Range of Values

Find products priced between 20 and 80 (inclusive):

```sql
SELECT * FROM products
WHERE price BETWEEN 20 AND 80;
```

| id | name       | price | category |
|----|------------|-------|----------|
| 2  | T-Shirt    | 25    | Clothing |
| 3  | Headphones | 79    | Electronics |
| 5  | Backpack   | 65    | Clothing |

`BETWEEN` includes both endpoints. So `BETWEEN 20 AND 80` matches 20, 80, and everything in between.

## LIKE -- Pattern Matching

`LIKE` lets you search for patterns in text. It uses two wildcards:

- `%` matches any number of characters (including zero)
- `_` matches exactly one character

```sql
-- Names that start with 'A'
SELECT * FROM customers WHERE name LIKE 'A%';

-- Email addresses ending in '@email.com'
SELECT * FROM customers WHERE email LIKE '%@email.com';

-- Names that are exactly 3 characters
SELECT * FROM customers WHERE name LIKE '___';

-- Names containing 'li'
SELECT * FROM customers WHERE name LIKE '%li%';
```

The last query (names containing 'li') would return:

| id | name    | email             | city   | joined_date |
|----|---------|-------------------|--------|-------------|
| 1  | Alice   | alice@email.com   | Vienna | 2024-01-15  |
| 3  | Charlie | charlie@email.com | Vienna | 2024-06-10  |

> `LIKE` is case-sensitive in some databases and case-insensitive in others. PostgreSQL has `ILIKE` for case-insensitive matching. SQLite's `LIKE` is case-insensitive by default for ASCII characters.

## IS NULL -- Finding Empty Values

In databases, a missing value is called `NULL`. It is not zero, it is not an empty string -- it means "no value." You cannot use `= NULL`. You must use `IS NULL`:

```sql
-- Find customers without a city
SELECT * FROM customers WHERE city IS NULL;

-- Find customers that DO have a city
SELECT * FROM customers WHERE city IS NOT NULL;
```

## NOT -- Negating Conditions

You can flip any condition with `NOT`:

```sql
SELECT * FROM products WHERE category NOT IN ('Electronics', 'Clothing');
```

| id | name       | price | category |
|----|------------|-------|----------|
| 4  | Coffee Mug | 12    | Home     |

Other examples: `NOT LIKE`, `NOT BETWEEN`, `IS NOT NULL`.

## Quick Summary

| Keyword   | Purpose                        | Example                              |
|-----------|--------------------------------|--------------------------------------|
| `WHERE`   | Filter rows by a condition     | `WHERE city = 'Vienna'`             |
| `AND`     | Both conditions must be true   | `WHERE price > 10 AND price < 100`  |
| `OR`      | Either condition can be true   | `WHERE city = 'Vienna' OR city = 'Berlin'` |
| `IN`      | Match any value in a list      | `WHERE city IN ('Vienna', 'Berlin')` |
| `BETWEEN` | Match a range (inclusive)      | `WHERE price BETWEEN 10 AND 100`    |
| `LIKE`    | Pattern matching               | `WHERE name LIKE 'A%'`             |
| `IS NULL` | Check for missing values       | `WHERE city IS NULL`                |
| `NOT`     | Negate a condition             | `WHERE NOT city = 'Vienna'`         |

## What's Next

Now you can filter data. Next, you will learn how to sort and limit your results -- getting the top 5 most expensive products, the newest customers, and more.
