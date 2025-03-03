# Data Selection (SELECT)

## Introduction
The `SELECT` statement is used to retrieve data from a database. It allows querying one or multiple tables and supports filtering, sorting, and aggregation.

## Selecting All Columns
To retrieve all columns from a table:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT * FROM employees;
```

## Selecting Specific Columns
To retrieve specific columns, specify them in the query:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT first_name, last_name FROM employees;
```

## Using Aliases
Column aliases make query results more readable:
```sql
SELECT first_name AS "First Name", last_name AS "Last Name" FROM employees;
```

## Filtering Results with WHERE
The `WHERE` clause filters results based on conditions:
```sql
SELECT * FROM employees WHERE department = 'IT';
```

## Sorting Results with ORDER BY
Use `ORDER BY` to sort results in ascending (`ASC`) or descending (`DESC`) order:
```sql
SELECT * FROM employees ORDER BY last_name ASC;
```

## Limiting Results
Different DBMS use different syntax to limit the number of rows returned:

**MySQL, PostgreSQL:**
```sql
SELECT * FROM employees LIMIT 5;
```

**SQL Server:**
```sql
SELECT TOP 5 * FROM employees;
```

**Oracle:**
```sql
SELECT * FROM employees FETCH FIRST 5 ROWS ONLY;
```

## Selecting Unique Values
Use `DISTINCT` to retrieve unique values:
```sql
SELECT DISTINCT department FROM employees;
```


