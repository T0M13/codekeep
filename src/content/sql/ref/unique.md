# UNIQUE

Ensures no two rows have the same value in a column (or combination of columns).

## Syntax

```sql
-- On a single column
CREATE TABLE customers (
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE
);

-- On multiple columns (composite unique)
CREATE TABLE enrollments (
    student_id INTEGER,
    course_id INTEGER,
    UNIQUE (student_id, course_id)
);
```

## Examples

```sql
-- Unique email
CREATE TABLE customers (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);

-- This works
INSERT INTO customers (name, email) VALUES ('Alice', 'alice@email.com');

-- This FAILS (duplicate email)
INSERT INTO customers (name, email) VALUES ('Bob', 'alice@email.com');

-- Adding a unique constraint later
ALTER TABLE customers ADD CONSTRAINT unique_email UNIQUE (email);
```

## UNIQUE vs PRIMARY KEY

| Feature        | PRIMARY KEY         | UNIQUE              |
|----------------|--------------------|--------------------|
| NULLs allowed  | No                 | Yes (one NULL)      |
| Per table      | Only one           | Multiple allowed    |
| Auto-indexed   | Yes                | Yes                 |

## Key Points

- UNIQUE allows NULL values (unlike PRIMARY KEY), but typically only one NULL
- A table can have multiple UNIQUE constraints
- Useful for emails, usernames, serial numbers -- any "must be different" column
- Composite unique ensures the combination is unique, not each column individually
- Violations produce an error and the insert/update is rejected
