# CREATE TABLE

Creates a new table with defined columns and data types.

## Syntax

```sql
CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    ...
);
```

## Examples

```sql
-- Simple table
CREATE TABLE customers (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    city TEXT,
    joined_date DATE
);

-- With multiple constraints
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    price REAL NOT NULL CHECK(price > 0),
    category TEXT DEFAULT 'General'
);

-- With foreign key
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Only create if it does not exist
CREATE TABLE IF NOT EXISTS logs (
    id INTEGER PRIMARY KEY,
    message TEXT,
    created_at DATE
);
```

## Common Data Types

| Type    | Stores              |
|---------|---------------------|
| INTEGER | Whole numbers        |
| REAL    | Decimal numbers      |
| TEXT    | Strings of any length|
| DATE    | Calendar dates       |
| BOOLEAN | True/false values   |

## Key Points

- Table names are usually lowercase and plural: `customers`, `products`
- Every table should have a PRIMARY KEY
- Use `IF NOT EXISTS` to avoid errors when the table already exists
- Constraints protect your data (NOT NULL, UNIQUE, CHECK, DEFAULT, FOREIGN KEY)
