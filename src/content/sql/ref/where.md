# WHERE

Filters rows based on a condition. Only rows that match the condition are returned.

## Syntax

```sql
SELECT columns FROM table_name
WHERE condition;
```

## Examples

```sql
-- Equal to
SELECT * FROM customers WHERE city = 'Vienna';

-- Not equal
SELECT * FROM products WHERE category != 'Clothing';

-- Greater than
SELECT * FROM products WHERE price > 50;

-- Multiple conditions
SELECT * FROM products WHERE price > 20 AND category = 'Electronics';

-- Either condition
SELECT * FROM customers WHERE city = 'Vienna' OR city = 'Berlin';
```

## Comparison Operators

| Operator | Meaning              |
|----------|----------------------|
| `=`      | Equal to             |
| `!=`     | Not equal to         |
| `<`      | Less than            |
| `>`      | Greater than         |
| `<=`     | Less than or equal   |
| `>=`     | Greater than or equal|

## Key Points

- Text values must be in single quotes: `'Vienna'`
- Numbers do not need quotes: `50`
- Use `AND` when all conditions must be true
- Use `OR` when any condition can be true
- Use parentheses to control logic: `(A OR B) AND C`
- Use `IS NULL` to check for missing values, not `= NULL`
