# MIN and MAX Functions

## Introduction
The `MIN` and `MAX` functions are aggregate functions in SQL used to find the smallest and largest values in a column.

## Using MIN to Find the Smallest Value
To get the minimum value of a column:

```sql
SELECT MIN(salary) FROM employees;
```

To find the lowest value in a specific category:

```sql
SELECT department, MIN(salary) FROM employees GROUP BY department;
```

## Using MAX to Find the Largest Value
To retrieve the maximum value in a column:

```sql
SELECT MAX(salary) FROM employees;
```

To find the highest salary per department:

```sql
SELECT department, MAX(salary) FROM employees GROUP BY department;
```

## Using MIN and MAX with Other Columns
If additional columns are included, use subqueries or `JOIN` to avoid incorrect results:

```sql
SELECT * FROM employees WHERE salary = (SELECT MAX(salary) FROM employees);
```

## Handling NULL Values
`MIN` and `MAX` ignore `NULL` values:

```sql
SELECT MIN(salary), MAX(salary) FROM employees;
```
