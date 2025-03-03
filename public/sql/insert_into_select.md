# Insertion with SELECT INTO

## Introduction
The `INSERT INTO ... SELECT` statement allows inserting data from one table into another, making it useful for data migration or backups. Unlike `SELECT INTO`, this does not create a new table but inserts data into an existing one.

## Basic Syntax
```sql
INSERT INTO target_table (column1, column2, ...)
SELECT column1, column2, ... FROM source_table;
```

## Example: Copy All Data
**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
INSERT INTO employees_backup
SELECT * FROM employees;
```

## Example: Copy Specific Columns
```sql
INSERT INTO employees_backup (id, name, department)
SELECT id, name, department FROM employees;
```

## Example: Copy with Filtering
```sql
INSERT INTO employees_backup
SELECT * FROM employees WHERE department = 'HR';
```

## Difference Between SELECT INTO and INSERT INTO ... SELECT
- `SELECT INTO` creates a new table and inserts data.
- `INSERT INTO ... SELECT` copies data into an existing table.
