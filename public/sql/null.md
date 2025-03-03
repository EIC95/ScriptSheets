# NULL Values in SQL

## Introduction
In SQL, `NULL` represents missing or unknown values. It is different from an empty string (`''`) or zero (`0`) because it signifies the absence of a value.

## Checking for NULL Values
To filter records with `NULL` values, use `IS NULL`:
```sql
SELECT * FROM employees WHERE manager_id IS NULL;
```

To find records where a column is not `NULL`, use `IS NOT NULL`:
```sql
SELECT * FROM employees WHERE email IS NOT NULL;
```

## Handling NULL with Functions
Many SQL functions handle `NULL` differently. To replace `NULL` with a default value, use:

**MySQL, PostgreSQL:**
```sql
SELECT first_name, COALESCE(salary, 0) FROM employees;
```

**SQL Server:**
```sql
SELECT first_name, ISNULL(salary, 0) FROM employees;
```

## NULL in Comparisons
Comparing `NULL` with any value using `=` or `<>` will always return `FALSE`. Instead, use `IS NULL`:
```sql
SELECT * FROM employees WHERE department = NULL; -- Incorrect
SELECT * FROM employees WHERE department IS NULL; -- Correct
```

## Sorting with NULL Values
By default, `NULL` values may appear first or last in sorted results depending on the database. To control their position:

**MySQL, PostgreSQL, Oracle:**
```sql
SELECT * FROM employees ORDER BY salary ASC NULLS LAST;
```

**SQL Server:**
```sql
SELECT * FROM employees ORDER BY salary ASC;
```

## Aggregation and NULL Values
Aggregate functions ignore `NULL` values unless explicitly handled:
```sql
SELECT AVG(salary) FROM employees; -- Ignores NULL values
SELECT COUNT(salary) FROM employees; -- Counts only non-NULL values
SELECT COUNT(*) FROM employees; -- Counts all rows including NULL values
```

## Preventing NULL Values
To enforce a column to always have a value, define it as `NOT NULL`:
```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    salary DECIMAL(10,2) NOT NULL
);
```

This covers how `NULL` values behave in different SQL operations across various database systems.

