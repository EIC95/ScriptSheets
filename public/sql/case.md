# CASE Expression

## Introduction
The `CASE` expression in SQL allows conditional logic within queries. It evaluates conditions and returns different values based on the conditions met. `CASE` is commonly used in `SELECT`, `UPDATE`, `ORDER BY`, and `WHERE` clauses.

## Simple CASE Expression
Evaluates an expression and returns a result based on matching values.

**Example:** Assign job titles based on role ID.
```sql
SELECT name,
       role_id,
       CASE role_id
           WHEN 1 THEN 'Manager'
           WHEN 2 THEN 'Developer'
           WHEN 3 THEN 'Analyst'
           ELSE 'Unknown'
       END AS job_title
FROM employees;
```

## Searched CASE Expression
Evaluates conditions and returns a result when the first condition is met.

**Example:** Categorize employees by salary range.
```sql
SELECT name, salary,
       CASE
           WHEN salary > 100000 THEN 'High'
           WHEN salary BETWEEN 50000 AND 100000 THEN 'Medium'
           ELSE 'Low'
       END AS salary_category
FROM employees;
```

## Using CASE in ORDER BY
Sort data dynamically based on conditions.

**Example:** Order employees by salary category.
```sql
SELECT name, salary
FROM employees
ORDER BY
    CASE
        WHEN salary > 100000 THEN 1
        WHEN salary BETWEEN 50000 AND 100000 THEN 2
        ELSE 3
    END;
```

## Using CASE in WHERE
Filter rows conditionally.

**Example:** Select employees based on salary category.
```sql
SELECT name, salary
FROM employees
WHERE
    CASE
        WHEN salary > 100000 THEN 1
        ELSE 0
    END = 1;
```
