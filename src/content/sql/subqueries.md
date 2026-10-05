---
title: Subqueries
---

# Subqueries

A subquery is a query inside another query. It sounds complicated, but it is actually just breaking a big question into smaller steps. Instead of doing everything in one go, you answer a smaller question first, then use that answer in the bigger question.

## The Idea

Say you want to find all products that cost more than the average price. You need two pieces of information:

1. What is the average price?
2. Which products cost more than that?

With a subquery, you do both in one statement:

```sql
SELECT name, price
FROM products
WHERE price > (SELECT AVG(price) FROM products);
```

| name   | price |
|--------|-------|
| Laptop | 999   |

The part in parentheses -- `(SELECT AVG(price) FROM products)` -- runs first and returns 236. Then the outer query becomes `WHERE price > 236`.

## Subqueries in WHERE

This is the most common place to use subqueries. The inner query returns a value (or set of values), and the outer query uses it for filtering.

**Find customers who have placed orders:**

```sql
SELECT name, email
FROM customers
WHERE id IN (SELECT customer_id FROM orders);
```

| name    | email              |
|---------|--------------------|
| Alice   | alice@email.com    |
| Bob     | bob@email.com      |
| Charlie | charlie@email.com  |
| Diana   | diana@email.com    |

The subquery returns a list of customer IDs from the orders table: (1, 1, 2, 3, 4, 3). The outer query then finds all customers whose ID is in that list.

**Find customers who have NOT placed orders:**

```sql
SELECT name, email
FROM customers
WHERE id NOT IN (SELECT customer_id FROM orders);
```

| name | email          |
|------|----------------|
| Eve  | eve@email.com  |

## Subqueries That Return One Value

When a subquery returns a single value, you can use it with `=`, `>`, `<`, etc.:

```sql
-- Find the most expensive product
SELECT name, price
FROM products
WHERE price = (SELECT MAX(price) FROM products);
```

| name   | price |
|--------|-------|
| Laptop | 999   |

**Find orders placed on the same day as the first order:**

```sql
SELECT * FROM orders
WHERE order_date = (SELECT MIN(order_date) FROM orders);
```

| id | customer_id | product_id | quantity | order_date |
|----|-------------|------------|----------|------------|
| 1  | 1           | 1          | 1        | 2024-02-10 |
| 2  | 1           | 3          | 2        | 2024-02-10 |

## Subqueries in SELECT

You can put a subquery right in the SELECT clause to calculate a value for each row:

```sql
SELECT
    name,
    price,
    price - (SELECT AVG(price) FROM products) AS diff_from_avg
FROM products;
```

| name       | price | diff_from_avg |
|------------|-------|---------------|
| Laptop     | 999   | 763           |
| T-Shirt    | 25    | -211          |
| Headphones | 79    | -157          |
| Coffee Mug | 12    | -224          |
| Backpack   | 65    | -171          |

This shows how much each product's price is above or below the average.

## Subqueries in FROM

You can use a subquery as if it were a table. This is sometimes called a **derived table**:

```sql
SELECT category, avg_price
FROM (
    SELECT category, AVG(price) AS avg_price
    FROM products
    GROUP BY category
) AS category_averages
WHERE avg_price > 50;
```

| category    | avg_price |
|-------------|-----------|
| Electronics | 539       |

The inner query calculates the average price per category. The outer query filters to only show categories with an average over 50.

> When you use a subquery in FROM, you must give it an alias (the `AS category_averages` part). The database needs a name to refer to it.

## EXISTS -- Does a Match Exist?

`EXISTS` checks whether a subquery returns any rows at all. It is often faster than `IN` for large datasets:

```sql
SELECT name
FROM customers c
WHERE EXISTS (
    SELECT 1 FROM orders o
    WHERE o.customer_id = c.id
);
```

| name    |
|---------|
| Alice   |
| Bob     |
| Charlie |
| Diana   |

This says: "Give me customers where at least one matching order exists." The `SELECT 1` is just a placeholder -- EXISTS only cares whether any rows are returned, not what they contain.

## Correlated Subqueries

In the EXISTS example above, the subquery references `c.id` from the outer query. This is called a **correlated subquery** -- it runs once for each row in the outer query.

**Find products that have been ordered at least twice:**

```sql
SELECT name
FROM products p
WHERE (
    SELECT COUNT(*) FROM orders o
    WHERE o.product_id = p.id
) >= 2;
```

| name       |
|------------|
| Laptop     |
| Headphones |

For each product, the subquery counts how many times it appears in orders.

## Subquery vs JOIN

Many subqueries can be rewritten as joins. These two queries give the same result:

```sql
-- Subquery approach
SELECT name FROM customers
WHERE id IN (SELECT customer_id FROM orders);

-- JOIN approach
SELECT DISTINCT c.name
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id;
```

Which is better? For simple cases, either works fine. Joins are usually preferred because they are easier to read and often faster. But subqueries can express things that joins cannot, like comparing against aggregates.

## Nesting Subqueries

You can nest subqueries inside other subqueries, but try not to go deeper than two levels -- it gets hard to read:

```sql
SELECT name, price FROM products
WHERE category IN (
    SELECT category FROM products
    WHERE id IN (
        SELECT product_id FROM orders WHERE quantity > 1
    )
);
```

This finds all products in categories that have at least one product ordered in quantity greater than 1. It works, but a join might be clearer.

## Practical Examples

**Find the customer who spent the most:**

```sql
SELECT c.name, SUM(p.price * o.quantity) AS total_spent
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id
INNER JOIN products p ON o.product_id = p.id
GROUP BY c.name
ORDER BY total_spent DESC
LIMIT 1;
```

**Find products nobody has ordered:**

```sql
SELECT name FROM products
WHERE id NOT IN (SELECT product_id FROM orders);
```

**Find customers whose total spending is above average:**

```sql
SELECT c.name, SUM(p.price * o.quantity) AS total_spent
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id
INNER JOIN products p ON o.product_id = p.id
GROUP BY c.name
HAVING SUM(p.price * o.quantity) > (
    SELECT AVG(total) FROM (
        SELECT SUM(p2.price * o2.quantity) AS total
        FROM orders o2
        INNER JOIN products p2 ON o2.product_id = p2.id
        GROUP BY o2.customer_id
    ) AS customer_totals
);
```

> Subqueries are a tool. Use them when they make the query clearer. If a join does the job more simply, use a join instead. The best SQL is the SQL that is easiest to understand.

## What You Have Learned

Congratulations! You have covered the core of SQL:

1. **Tables** -- how data is structured
2. **SELECT** -- getting data out
3. **WHERE** -- filtering rows
4. **ORDER BY / LIMIT** -- sorting and paging
5. **INSERT / UPDATE / DELETE** -- changing data
6. **JOINs** -- connecting tables
7. **Aggregate functions** -- summarizing data
8. **GROUP BY / HAVING** -- grouping summaries
9. **Subqueries** -- queries inside queries

With these tools, you can handle the vast majority of real-world database tasks. Practice by thinking of questions about the data and trying to write the SQL to answer them. The more questions you ask, the better you get.
