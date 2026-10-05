# FOREIGN KEY

Links a column in one table to the primary key of another table. Enforces that the referenced row exists.

## Syntax

```sql
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);
```

## Examples

```sql
-- Basic foreign key
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- With cascade delete (deleting a customer deletes their orders too)
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
        ON DELETE CASCADE
);

-- With set null (deleting a customer sets orders' customer_id to NULL)
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
        ON DELETE SET NULL
);
```

## ON DELETE Options

| Option      | What happens when the referenced row is deleted |
|-------------|--------------------------------------------------|
| RESTRICT    | Block the deletion (default)                     |
| CASCADE     | Delete the referencing rows too                  |
| SET NULL    | Set the foreign key column to NULL               |
| SET DEFAULT | Set the foreign key column to its default value  |

## Key Points

- Prevents "orphaned" data (orders pointing to customers that do not exist)
- The referenced column must be a primary key or have a unique constraint
- In SQLite, foreign keys are off by default -- run `PRAGMA foreign_keys = ON;`
- Foreign keys create a parent-child relationship between tables
- Always consider what should happen on delete (CASCADE vs RESTRICT)
