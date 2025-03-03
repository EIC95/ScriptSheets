# AVG Function

## Introduction
The `AVG` function in SQL is an aggregate function used to calculate the average value of a numeric column. It is commonly used in statistical calculations and financial reporting.

## Calculating the Average Value
To compute the average of a column:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT AVG(salary) FROM employees;
```

## Using AVG with GROUP BY
To calculate the average value per category, use `GROUP BY`:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT department, AVG(salary) FROM employees GROUP BY department;
```

## Using AVG with WHERE
To calculate the average based on a condition:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT AVG(salary) FROM employees WHERE department = 'IT';
```

## Handling NULL Values
`AVG` automatically ignores `NULL` values:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT AVG(bonus) FROM employees;
```

## Using AVG with HAVING
To filter groups based on the average value:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT department, AVG(salary) FROM employees GROUP BY department HAVING AVG(salary) > 50000;
```

