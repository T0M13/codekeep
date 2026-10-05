# LIKE

Searches for patterns in text columns using wildcards.

## Syntax

```sql
SELECT columns FROM table_name
WHERE column LIKE 'pattern';
```

## Wildcards

| Wildcard | Meaning                          |
|----------|----------------------------------|
| `%`      | Any number of characters (0+)    |
| `_`      | Exactly one character            |

## Examples

```sql
-- Starts with 'A'
SELECT * FROM customers WHERE name LIKE 'A%';

-- Ends with 'e'
SELECT * FROM customers WHERE name LIKE '%e';

-- Contains 'li'
SELECT * FROM customers WHERE name LIKE '%li%';

-- Exactly 3 characters
SELECT * FROM customers WHERE name LIKE '___';

-- Second character is 'o'
SELECT * FROM customers WHERE name LIKE '_o%';

-- NOT matching a pattern
SELECT * FROM customers WHERE name NOT LIKE 'A%';
```

## Key Points

- Wrap patterns in single quotes
- `%` at the start disables index usage, making the query slower on large tables
- Case sensitivity depends on the database (MySQL is case-insensitive, PostgreSQL is case-sensitive)
- PostgreSQL has `ILIKE` for case-insensitive matching
- To search for a literal `%` or `_`, escape it: `LIKE '10\%'`
