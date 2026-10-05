# DEFAULT

Sets a fallback value for a column when no value is provided during INSERT.

## Syntax

```sql
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT DEFAULT 'General',
    in_stock BOOLEAN DEFAULT TRUE,
    created_at DATE DEFAULT CURRENT_DATE
);
```

## Examples

```sql
-- Category defaults to 'General'
INSERT INTO products (name, price)
VALUES ('Widget', 9.99);
-- category will be 'General'

-- Explicit value overrides the default
INSERT INTO products (name, price, category)
VALUES ('Widget', 9.99, 'Tools');
-- category will be 'Tools'

-- Common defaults
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    role TEXT DEFAULT 'user',
    is_active BOOLEAN DEFAULT TRUE,
    login_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Adding a default to an existing column
ALTER TABLE products ALTER COLUMN category SET DEFAULT 'General';
```

## Common Default Values

| Type    | Default example           |
|---------|---------------------------|
| TEXT    | `DEFAULT 'Unknown'`       |
| INTEGER | `DEFAULT 0`              |
| BOOLEAN | `DEFAULT TRUE`           |
| DATE    | `DEFAULT CURRENT_DATE`   |
| TIMESTAMP | `DEFAULT CURRENT_TIMESTAMP` |

## Key Points

- DEFAULT only applies when a column is omitted from the INSERT
- Explicitly inserting NULL still sets NULL (DEFAULT does not prevent NULL)
- Combine with NOT NULL if you want to guarantee a value: `NOT NULL DEFAULT 'General'`
- `CURRENT_DATE` and `CURRENT_TIMESTAMP` are useful for auto-dating rows
- Each database may have slightly different syntax for altering defaults
