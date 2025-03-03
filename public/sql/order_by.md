# Sorting Results (ORDER BY)

## Introduction
The `ORDER BY` clause is used to sort the results of a query in ascending or descending order. Sorting can be applied to one or multiple columns.

## Sorting in Ascending Order
By default, `ORDER BY` sorts results in ascending (`ASC`) order:

```sql
SELECT * FROM employees ORDER BY last_name;
```

Equivalent to:
```sql
SELECT * FROM employees ORDER BY last_name ASC;
```

## Sorting in Descending Order
To sort results in descending order, use `DESC`:
```sql
SELECT * FROM employees ORDER BY last_name DESC;
```

## Sorting by Multiple Columns
You can sort results by multiple columns by specifying them in order of priority:
```sql
SELECT * FROM employees ORDER BY department ASC, salary DESC;
```

This first sorts employees by department in ascending order, then by salary in descending order within each department.

## Sorting with Expressions
You can sort results based on computed values:
```sql
SELECT * FROM employees ORDER BY salary * 1.1 DESC;
```

## Sorting with NULL Values
Different DBMS handle `NULL` values differently in sorting. To explicitly control NULL positioning:

**MySQL, PostgreSQL:**
```sql
SELECT * FROM employees ORDER BY salary DESC NULLS LAST;
```

**SQL Server:**
```sql
SELECT * FROM employees ORDER BY salary DESC;
```

**Oracle:**
```sql
SELECT * FROM employees ORDER BY salary DESC NULLS LAST;
```

