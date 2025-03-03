# Filtering Aggregated Results

## Introduction
When using aggregate functions with `GROUP BY`, filtering cannot be done using `WHERE` because it applies before aggregation. Instead, SQL provides the `HAVING` clause to filter grouped data based on aggregate calculations.

## Using HAVING with COUNT
The `HAVING` clause filters groups after aggregation.

**Example:** Find departments with more than 5 employees.
```sql
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
```

## Using HAVING with SUM
Filter groups based on the sum of a column.

**Example:** Find departments with total salaries exceeding 500,000.
```sql
SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department
HAVING SUM(salary) > 500000;
```

## Using HAVING with AVG
Filter groups based on the average of a column.

**Example:** Find departments where the average salary is above 60,000.
```sql
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 60000;
```

## Using HAVING with MIN and MAX
Filter groups based on the minimum or maximum value in a column.

**Example:** Find departments where the highest salary is greater than 120,000.
```sql
SELECT department, MAX(salary) AS max_salary
FROM employees
GROUP BY department
HAVING MAX(salary) > 120000;
```

## Combining HAVING with WHERE
`WHERE` filters rows before aggregation, while `HAVING` filters after aggregation.

**Example:** Find departments with more than 5 employees, considering only employees with salaries above 30,000.
```sql
SELECT department, COUNT(*) AS employee_count
FROM employees
WHERE salary > 30000
GROUP BY department
HAVING COUNT(*) > 5;
```
