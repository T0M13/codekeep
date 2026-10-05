# PRIMARY KEY

Uniquely identifies each row in a table. Every table should have one.

## Syntax

```sql
-- Inline
CREATE TABLE customers (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

-- As a separate constraint
CREATE TABLE orders (
    id INTEGER,
    customer_id INTEGER,
    PRIMARY KEY (id)
);

-- Composite primary key (multiple columns)
CREATE TABLE order_items (
    order_id INTEGER,
    product_id INTEGER,
    PRIMARY KEY (order_id, product_id)
);
```

## Examples

```sql
-- Auto-incrementing ID (SQLite)
CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Auto-incrementing ID (MySQL)
CREATE TABLE customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

-- Auto-incrementing ID (PostgreSQL)
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);
```

## Key Points

- A primary key column must contain unique values -- no duplicates allowed
- A primary key column cannot contain NULL
- Each table can have only one primary key
- Most tables use an auto-incrementing integer as the primary key
- Composite keys use two or more columns together as the key
- The primary key is automatically indexed for fast lookups
