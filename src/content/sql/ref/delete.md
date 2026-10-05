# DELETE

Removes rows from a table. Always use with WHERE to avoid deleting everything.

## Syntax

```sql
DELETE FROM table_name
WHERE condition;
```

## Examples

```sql
-- Delete a specific row
DELETE FROM customers WHERE id = 6;

-- Delete rows matching a condition
DELETE FROM orders WHERE order_date < '2024-01-01';

-- Delete rows matching multiple conditions
DELETE FROM products WHERE category = 'Clothing' AND price < 10;

-- Delete all rows (DANGEROUS -- empties the entire table)
DELETE FROM products;
```

## DELETE vs DROP vs TRUNCATE

| Command                    | What happens                                |
|----------------------------|---------------------------------------------|
| `DELETE FROM t WHERE ...`  | Removes specific rows                       |
| `DELETE FROM t`            | Removes all rows, table structure stays      |
| `TRUNCATE TABLE t`         | Removes all rows faster, cannot be rolled back |
| `DROP TABLE t`             | Removes the entire table including structure |

## Key Points

- **Always include a WHERE clause** unless you want to empty the table
- Run a SELECT with the same WHERE first to preview what will be deleted
- Deleted data is gone -- there is no undo (unless you are inside a transaction)
- Foreign key constraints may prevent deletion if other tables reference the row
- `TRUNCATE` is faster than `DELETE` for clearing a table but cannot be filtered
