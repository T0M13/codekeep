# CASE

Adds if/then logic to your queries. Like an IF statement in other languages.

## Syntax

```sql
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ELSE default_result
END
```

## Examples

```sql
-- Categorize products by price
SELECT name, price,
    CASE
        WHEN price > 500 THEN 'Expensive'
        WHEN price > 50 THEN 'Moderate'
        ELSE 'Cheap'
    END AS price_tier
FROM products;

-- Result:
-- Laptop     | 999 | Expensive
-- T-Shirt    | 25  | Cheap
-- Headphones | 79  | Moderate
-- Coffee Mug | 12  | Cheap
-- Backpack   | 65  | Moderate

-- Count per category using CASE
SELECT
    COUNT(CASE WHEN category = 'Electronics' THEN 1 END) AS electronics,
    COUNT(CASE WHEN category = 'Clothing' THEN 1 END) AS clothing,
    COUNT(CASE WHEN category = 'Home' THEN 1 END) AS home
FROM products;

-- In ORDER BY
SELECT * FROM products
ORDER BY
    CASE category
        WHEN 'Electronics' THEN 1
        WHEN 'Clothing' THEN 2
        ELSE 3
    END;
```

## Key Points

- CASE can be used in SELECT, WHERE, ORDER BY, and GROUP BY
- Conditions are checked in order -- the first match wins
- ELSE is optional; if omitted and nothing matches, the result is NULL
- Use CASE to pivot data, create custom sort orders, or add labels
- The simple form `CASE column WHEN value THEN ...` checks equality only
