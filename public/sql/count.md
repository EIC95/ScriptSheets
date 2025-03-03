# COUNT Function

## Introduction
The `COUNT` function in SQL returns the number of rows that match a specified condition. It is commonly used to count the total number of records in a table or the number of non-null values in a column.

## Counting All Rows
To count all rows in a table:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT COUNT(*) FROM employees;
```

## Counting Non-NULL Values in a Column
To count only non-null values in a specific column:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT COUNT(salary) FROM employees;
```

## Counting Distinct Values
To count unique values in a column:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT COUNT(DISTINCT department) FROM employees;
```

## Using COUNT with GROUP BY
To count the number of employees per department:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT department, COUNT(*) FROM employees GROUP BY department;
```

## Handling NULL Values
`COUNT(column_name)` ignores `NULL` values, whereas `COUNT(*)` counts all rows:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT COUNT(*) AS total_rows, COUNT(manager_id) AS non_null_managers FROM employees;
```

## Using COUNT with HAVING
To filter groups based on the count:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5;
```

