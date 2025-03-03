# Data Grouping

## Introduction
Data grouping in SQL is achieved using the `GROUP BY` clause, which aggregates data based on one or more columns. This is often used with aggregate functions such as `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX`.

## GROUP BY
The `GROUP BY` statement groups rows that have the same values in specified columns and applies aggregate functions.

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department;
```

## GROUP BY Multiple Columns
SQL allows grouping by multiple columns to create more granular aggregations.

```sql
SELECT department, job_title, COUNT(*) AS employee_count
FROM employees
GROUP BY department, job_title;
```

## Using Aggregate Functions
Common aggregate functions used with `GROUP BY`:
- `COUNT(*)`: Counts rows per group.
- `SUM(column)`: Sums values per group.
- `AVG(column)`: Calculates the average per group.
- `MIN(column)`: Finds the minimum value per group.
- `MAX(column)`: Finds the maximum value per group.

Example:
```sql
SELECT department, AVG(salary) AS average_salary
FROM employees
GROUP BY department;
```

## HAVING Clause
The `HAVING` clause filters groups after aggregation (similar to `WHERE` but for grouped data).

```sql
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
```
