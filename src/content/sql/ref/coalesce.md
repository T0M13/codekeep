# COALESCE

Returns the first non-NULL value from a list of arguments. A handy way to provide fallback values.

## Syntax

```sql
COALESCE(value1, value2, value3, ...)
```

## Examples

```sql
-- Replace NULL city with 'Unknown'
SELECT name, COALESCE(city, 'Unknown') AS city
FROM customers;

-- First available contact method
SELECT name,
    COALESCE(phone, email, 'No contact') AS contact
FROM customers;

-- Default value in calculations
SELECT name, COALESCE(discount, 0) * price AS discount_amount
FROM products;

-- With aggregate functions (SUM returns NULL for no rows)
SELECT COALESCE(SUM(price), 0) AS total
FROM products WHERE category = 'Nonexistent';
-- Returns 0 instead of NULL
```

## COALESCE vs IFNULL

| Function              | Database support          | Arguments |
|-----------------------|---------------------------|-----------|
| COALESCE(a, b, c)    | All databases (standard)  | Unlimited |
| IFNULL(a, b)          | MySQL, SQLite             | Exactly 2 |
| ISNULL(a, b)          | SQL Server                | Exactly 2 |
| NVL(a, b)             | Oracle                    | Exactly 2 |

## Key Points

- Returns the first argument that is not NULL
- If all arguments are NULL, returns NULL
- Standard SQL -- works in all databases
- Commonly used to replace NULLs with default values
- Prefer COALESCE over database-specific alternatives for portability
