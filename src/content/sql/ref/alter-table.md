# ALTER TABLE

Modifies an existing table's structure -- add columns, remove columns, or change constraints.

## Syntax

```sql
-- Add a column
ALTER TABLE table_name ADD COLUMN column_name datatype;

-- Remove a column
ALTER TABLE table_name DROP COLUMN column_name;

-- Rename a column (varies by database)
ALTER TABLE table_name RENAME COLUMN old_name TO new_name;

-- Rename the table
ALTER TABLE old_table_name RENAME TO new_table_name;
```

## Examples

```sql
-- Add a phone column to customers
ALTER TABLE customers ADD COLUMN phone TEXT;

-- Add a column with a default
ALTER TABLE products ADD COLUMN in_stock BOOLEAN DEFAULT TRUE;

-- Remove a column
ALTER TABLE customers DROP COLUMN phone;

-- Rename a column
ALTER TABLE customers RENAME COLUMN joined_date TO signup_date;

-- Rename the table
ALTER TABLE customers RENAME TO clients;
```

## Key Points

- Not all operations are supported in all databases (SQLite has limited ALTER TABLE support)
- Adding a NOT NULL column to a table with existing data requires a DEFAULT value
- DROP COLUMN is not supported in older SQLite versions
- Altering a table with millions of rows can be slow -- plan accordingly
- Some databases require `ADD` instead of `ADD COLUMN`
