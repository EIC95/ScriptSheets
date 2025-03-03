# Table Copy with SELECT INTO

## Introduction
The `SELECT INTO` statement is used to copy data from one table into a new table. This creates the new table and inserts the selected rows into it.

## Basic Usage
The `SELECT INTO` statement copies data and structure into a new table.

**SQL Server, PostgreSQL:**
```sql
SELECT * INTO employees_backup
FROM employees;
```
This creates `employees_backup` with the same structure and data as `employees`.

## Copying Specific Columns
You can copy only specific columns into the new table.
```sql
SELECT id, name INTO employees_backup
FROM employees;
```

## Copying with Filters
Use `WHERE` to copy only certain rows.
```sql
SELECT * INTO employees_backup
FROM employees
WHERE department = 'HR';
```

## Alternative for MySQL
MySQL does not support `SELECT INTO`, but you can achieve the same with `CREATE TABLE` and `INSERT INTO`.
```sql
CREATE TABLE employees_backup AS
SELECT * FROM employees;
```
