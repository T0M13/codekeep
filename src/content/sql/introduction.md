---
title: What is SQL?
---

# What is SQL?

**SQL** (Structured Query Language, pronounced "sequel" or "S-Q-L") is the language you use to talk to databases. If you have ever used a spreadsheet, you already understand the basic idea behind a database. A database is just a more powerful, organized way to store and retrieve information.

## Think of It Like a Spreadsheet

Imagine you run a small online store. You might keep track of your customers in a spreadsheet:

| id | name       | email              | city      | joined_date |
|----|------------|--------------------|-----------|-------------|
| 1  | Alice      | alice@email.com    | Vienna    | 2024-01-15  |
| 2  | Bob        | bob@email.com      | Berlin    | 2024-03-22  |
| 3  | Charlie    | charlie@email.com  | Vienna    | 2024-06-10  |

That spreadsheet is basically a **table** in a database. Each row is one customer. Each column is a piece of information about them.

A **database** is a collection of these tables. Your online store might have a `customers` table, a `products` table, and an `orders` table.

## Why Not Just Use a Spreadsheet?

Spreadsheets are great for small amounts of data. But what happens when you have 10,000 customers and 50,000 orders? Things get slow and messy. Databases are built to handle millions of rows without breaking a sweat.

Here is what databases do better:

- **Speed** -- Finding one record among millions takes milliseconds
- **Multiple users** -- Many people can read and write data at the same time
- **Rules** -- You can enforce rules like "every order must have a valid customer"
- **Relationships** -- You can connect tables together (customers to their orders)
- **Safety** -- Data does not get accidentally deleted or corrupted

## What SQL Actually Looks Like

SQL is surprisingly readable. Here is a query that gets all customers from Vienna:

```sql
SELECT name, email
FROM customers
WHERE city = 'Vienna';
```

Even without knowing SQL, you can probably guess what this does. It says: "Get the name and email from the customers table where the city is Vienna."

The result would look like:

| name    | email             |
|---------|-------------------|
| Alice   | alice@email.com   |
| Charlie | charlie@email.com |

## The Four Main Things You Do with Data

Almost everything in SQL comes down to four operations, sometimes called **CRUD**:

- **C**reate -- Add new data (`INSERT`)
- **R**ead -- Look at existing data (`SELECT`)
- **U**pdate -- Change existing data (`UPDATE`)
- **D**elete -- Remove data (`DELETE`)

That is it. Whether you are building a social media app, an online store, or a weather tracker, you are doing these four things over and over.

## Popular Databases That Use SQL

SQL is a language, not a specific product. Many different database systems understand SQL:

| Database   | Notes                                    |
|------------|------------------------------------------|
| SQLite     | Lightweight, stores data in a single file |
| PostgreSQL | Powerful, popular for web apps            |
| MySQL      | Very common, used by WordPress and others |
| MariaDB    | Open-source fork of MySQL                 |
| SQL Server | Microsoft's database                      |

They all understand the same basic SQL. There are small differences in advanced features, but 95% of what you learn works everywhere.

## Our Example Database

Throughout these lessons, we will use a simple online store database with three tables:

**customers** -- the people who buy things

| id | name    | email              | city      | joined_date |
|----|---------|--------------------|-----------|-------------|
| 1  | Alice   | alice@email.com    | Vienna    | 2024-01-15  |
| 2  | Bob     | bob@email.com      | Berlin    | 2024-03-22  |
| 3  | Charlie | charlie@email.com  | Vienna    | 2024-06-10  |
| 4  | Diana   | diana@email.com    | Paris     | 2024-07-01  |
| 5  | Eve     | eve@email.com      | Berlin    | 2024-09-05  |

**products** -- what the store sells

| id | name        | price | category    |
|----|-------------|-------|-------------|
| 1  | Laptop      | 999   | Electronics |
| 2  | T-Shirt     | 25    | Clothing    |
| 3  | Headphones  | 79    | Electronics |
| 4  | Coffee Mug  | 12    | Home        |
| 5  | Backpack    | 65    | Clothing    |

**orders** -- who bought what

| id | customer_id | product_id | quantity | order_date |
|----|-------------|------------|----------|------------|
| 1  | 1           | 1          | 1        | 2024-02-10 |
| 2  | 1           | 3          | 2        | 2024-02-10 |
| 3  | 2           | 2          | 3        | 2024-04-15 |
| 4  | 3           | 4          | 1        | 2024-07-20 |
| 5  | 4           | 1          | 1        | 2024-08-05 |
| 6  | 3           | 5          | 2        | 2024-08-12 |

> These tables are connected. The `customer_id` in the orders table refers to the `id` in the customers table. The `product_id` refers to the `id` in the products table. This is how databases link related information together.

## What You Will Learn

In the coming lessons, you will learn how to:

1. Create tables and define what kind of data they hold
2. Add, read, update, and delete data
3. Filter and sort results
4. Connect tables together with joins
5. Summarize data with functions like COUNT and SUM
6. Write queries inside other queries (subqueries)

By the end, you will be comfortable reading and writing SQL for real-world tasks. Let's get started.
