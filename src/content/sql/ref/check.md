# CHECK

Ensures values in a column satisfy a specific condition. Rejects inserts and updates that violate the rule.

## Syntax

```sql
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL CHECK(price > 0),
    quantity INTEGER CHECK(quantity >= 0)
);
```

## Examples

```sql
-- Price must be positive
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    price REAL NOT NULL CHECK(price > 0)
);

-- This works
INSERT INTO products (id, price) VALUES (1, 29.99);

-- This FAILS (price is negative)
INSERT INTO products (id, price) VALUES (2, -5);

-- Multiple conditions
CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    age INTEGER CHECK(age >= 18 AND age <= 120),
    salary REAL CHECK(salary > 0)
);

-- Check against a list
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    status TEXT CHECK(status IN ('pending', 'shipped', 'delivered', 'cancelled'))
);

-- Named constraint (easier to identify in error messages)
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    price REAL CONSTRAINT positive_price CHECK(price > 0)
);
```

## Key Points

- CHECK validates data before it is stored -- invalid data is rejected
- You can use any condition that would work in a WHERE clause
- CHECK cannot reference other tables (use triggers for that)
- SQLite parses CHECK constraints but does not always enforce them (depends on version)
- MySQL versions before 8.0.16 parse but ignore CHECK constraints
- Naming your constraints makes error messages more helpful
