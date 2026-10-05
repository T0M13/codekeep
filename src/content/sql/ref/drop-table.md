# DROP TABLE

Permanently deletes a table and all of its data.

## Syntax

```sql
DROP TABLE table_name;

-- Safe version (no error if table does not exist)
DROP TABLE IF EXISTS table_name;
```

## Examples

```sql
-- Delete the products table
DROP TABLE products;

-- Delete only if it exists
DROP TABLE IF EXISTS temp_data;

-- Delete multiple tables (supported in some databases)
DROP TABLE orders, products, customers;
```

## DROP vs DELETE vs TRUNCATE

| Command            | Removes data? | Removes table? | Can filter? |
|--------------------|---------------|----------------|-------------|
| DROP TABLE         | Yes           | Yes            | No          |
| DELETE FROM        | Yes           | No             | Yes (WHERE) |
| TRUNCATE TABLE     | Yes           | No             | No          |

## Key Points

- **This is permanent** -- there is no undo
- Always use `IF EXISTS` to prevent errors in scripts
- Foreign key constraints may block the drop if other tables reference this one
- Drop tables in the right order: child tables (with foreign keys) first, then parent tables
- In production, always back up before dropping tables
