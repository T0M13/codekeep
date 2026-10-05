---
title: GROUP BY & HAVING
---

# GROUP BY & HAVING

In the last lesson you learned aggregate functions like COUNT and SUM. Those gave you one number for the entire table. But what if you want to know the total sales **per category**, or the number of customers **per city**? That is what GROUP BY does.

## GROUP BY -- Summarize by Category

How many customers are in each city?

```sql
SELECT city, COUNT(*) AS num_customers
FROM customers
GROUP BY city;
```

| city   | num_customers |
|--------|---------------|
| Berlin | 2             |
| Paris  | 1             |
| Vienna | 2             |

The database splits the rows into groups (one for each city), then runs COUNT on each group separately.

## How GROUP BY Works

Think of it like sorting papers into piles. You have 5 customer records. GROUP BY city creates three piles: Berlin, Paris, Vienna. Then COUNT tells you how many papers are in each pile.

Without GROUP BY, COUNT gives you one number (5 total customers). With GROUP BY city, you get a separate count for each city.

## Total Sales Per Category

```sql
SELECT
    p.category,
    SUM(p.price * o.quantity) AS total_sales,
    COUNT(*) AS num_orders
FROM orders o
INNER JOIN products p ON o.product_id = p.id
GROUP BY p.category;
```

| category    | total_sales | num_orders |
|-------------|-------------|------------|
| Clothing    | 205         | 2          |
| Electronics | 2156        | 3          |
| Home        | 12          | 1          |

## Multiple Group Columns

You can group by more than one column:

```sql
SELECT city, COUNT(*) AS num_customers
FROM customers
GROUP BY city;
```

If you had a `country` column too, you could group by both:

```sql
SELECT country, city, COUNT(*) AS num_customers
FROM customers
GROUP BY country, city;
```

This creates a group for each unique combination of country and city.

## The Golden Rule of GROUP BY

When you use GROUP BY, every column in your SELECT must be either:

1. In the GROUP BY clause, or
2. Inside an aggregate function (COUNT, SUM, AVG, etc.)

This works:

```sql
SELECT city, COUNT(*) FROM customers GROUP BY city;
```

This does NOT work:

```sql
SELECT city, name, COUNT(*) FROM customers GROUP BY city;
-- ERROR: name is not in GROUP BY and not in an aggregate
```

Why? Because each group (city) might have multiple names. The database does not know which name to show. You can fix it by adding name to the GROUP BY, or by using an aggregate like `MIN(name)`.

## HAVING -- Filtering Groups

WHERE filters individual rows. HAVING filters groups. You can only use HAVING after GROUP BY.

Find cities with more than 1 customer:

```sql
SELECT city, COUNT(*) AS num_customers
FROM customers
GROUP BY city
HAVING COUNT(*) > 1;
```

| city   | num_customers |
|--------|---------------|
| Berlin | 2             |
| Vienna | 2             |

Paris is gone because it only has 1 customer.

## WHERE vs HAVING

This is a common source of confusion. Here is the difference:

| Clause | Filters      | When it runs            | Example                        |
|--------|-------------|-------------------------|--------------------------------|
| WHERE  | Individual rows | Before grouping      | `WHERE price > 50`            |
| HAVING | Groups        | After grouping        | `HAVING COUNT(*) > 1`         |

You can use both in the same query:

```sql
SELECT category, AVG(price) AS avg_price
FROM products
WHERE price > 10
GROUP BY category
HAVING AVG(price) > 40;
```

Step by step:
1. **WHERE** filters out products with price 10 or less
2. **GROUP BY** creates groups by category
3. **AVG** calculates the average price for each group
4. **HAVING** keeps only groups where the average is over 40

## Practical Examples

**Products per category:**

```sql
SELECT category, COUNT(*) AS product_count
FROM products
GROUP BY category;
```

| category    | product_count |
|-------------|---------------|
| Clothing    | 2             |
| Electronics | 2             |
| Home        | 1             |

**Average order quantity per customer:**

```sql
SELECT
    c.name,
    AVG(o.quantity) AS avg_quantity,
    COUNT(*) AS num_orders
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id
GROUP BY c.name;
```

| name    | avg_quantity | num_orders |
|---------|-------------|------------|
| Alice   | 1.5         | 2          |
| Bob     | 3.0         | 1          |
| Charlie | 1.5         | 2          |
| Diana   | 1.0         | 1          |

**Customers who ordered more than once:**

```sql
SELECT c.name, COUNT(*) AS order_count
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id
GROUP BY c.name
HAVING COUNT(*) > 1;
```

| name    | order_count |
|---------|-------------|
| Alice   | 2           |
| Charlie | 2           |

## Ordering Grouped Results

You can combine GROUP BY with ORDER BY:

```sql
SELECT category, SUM(price) AS total_value
FROM products
GROUP BY category
ORDER BY total_value DESC;
```

| category    | total_value |
|-------------|-------------|
| Electronics | 1078        |
| Clothing    | 90          |
| Home        | 12          |

## The Complete Query Order

Here is every clause you have learned so far, in the order you write them:

```sql
SELECT columns
FROM table
JOIN other_table ON condition
WHERE row_filter
GROUP BY columns
HAVING group_filter
ORDER BY columns
LIMIT number;
```

> Remember: WHERE filters rows before grouping. HAVING filters groups after grouping. If you try to use an aggregate function in WHERE, you will get an error. Use HAVING instead.

## What's Next

You have covered grouping and filtering groups. The last lesson covers subqueries -- putting one query inside another for more complex questions.
