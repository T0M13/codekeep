# NOT NULL

Ensures a column always has a value. Inserts or updates that try to set it to NULL will fail.

## Syntax

```sql
CREATE TABLE customers (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    city TEXT  -- this one CAN be NULL
);
```

## Examples

```sql
-- This works
INSERT INTO customers (name, email) VALUES ('Alice', 'alice@email.com');

-- This FAILS (name is NOT NULL)
INSERT INTO customers (name, email) VALUES (NULL, 'test@email.com');

-- This also FAILS (email is missing and NOT NULL)
INSERT INTO customers (name) VALUES ('Alice');

-- Adding NOT NULL to an existing column
ALTER TABLE customers ALTER COLUMN city SET NOT NULL;  -- PostgreSQL/MySQL
```

## When to Use NOT NULL

| Column type              | Should it be NOT NULL? |
|--------------------------|------------------------|
| Primary key              | Always (automatic)     |
| Name, email, username    | Usually yes            |
| Foreign keys             | Usually yes            |
| Optional fields (phone)  | No, allow NULL         |
| Fields with defaults     | Depends on your needs  |

## Key Points

- NULL means "no value" -- it is not zero, not empty string, not false
- NOT NULL prevents accidental missing data
- Use it for columns that must always have a value
- Combine with DEFAULT to provide a fallback: `city TEXT NOT NULL DEFAULT 'Unknown'`
- Primary keys are automatically NOT NULL
