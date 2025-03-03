# SUM Function

## Introduction
The `SUM` function in SQL is an aggregate function used to calculate the total sum of a numeric column. It is commonly used to compute totals in financial reports, sales data, and other numerical datasets.

## Calculating the Total Sum
To calculate the total sum of a column:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT SUM(salary) FROM employees;
```

## Using SUM with GROUP BY
To calculate the total sum per category, use `GROUP BY`:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT department, SUM(salary) FROM employees GROUP BY department;
```

## Using SUM with WHERE
To calculate the total sum based on a condition:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT SUM(salary) FROM employees WHERE department = 'IT';
```

## Handling NULL Values
`SUM` ignores `NULL` values automatically:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT SUM(bonus) FROM employees;
```

## Using SUM with HAVING
To filter groups based on the total sum:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT department, SUM(salary) FROM employees GROUP BY department HAVING SUM(salary) > 50000;
```

