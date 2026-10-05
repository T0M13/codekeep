# Self Join

Joins a table to itself. Useful when rows in the same table are related to each other.

## Syntax

```sql
SELECT a.column, b.column
FROM table_name a
INNER JOIN table_name b ON a.column = b.column;
```

## Examples

```sql
-- Suppose employees table has a manager_id that references another employee
-- Find each employee with their manager's name
SELECT
    e.name AS employee,
    m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;

-- Find customers in the same city
SELECT
    a.name AS customer1,
    b.name AS customer2,
    a.city
FROM customers a
INNER JOIN customers b ON a.city = b.city AND a.id < b.id;
```

The second example uses `a.id < b.id` to avoid pairing a customer with themselves and to avoid duplicate pairs (Alice-Charlie and Charlie-Alice).

## Key Points

- You must use different aliases for each "copy" of the table
- The table is not actually duplicated -- it is just referenced twice
- Common use cases: hierarchies (employee/manager), finding related rows, comparisons
- Use `a.id < b.id` to avoid duplicate pairs and self-matches
- Can use INNER JOIN, LEFT JOIN, or any other join type
