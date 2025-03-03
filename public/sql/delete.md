# Data Deletion (DELETE, TRUNCATE, DROP)

## Introduction
The deletion of data in SQL can be performed using `DELETE`, `TRUNCATE`, or `DROP`. Each has different use cases and effects on the database.

## Deleting Specific Rows
The `DELETE` statement removes specific rows from a table:

```sql
DELETE FROM employees WHERE department = 'Sales';
```

> **Warning:** Always use a `WHERE` clause to avoid deleting all records unintentionally.

## Deleting All Rows
To remove all records while keeping the table structure:

```sql
DELETE FROM employees;
```

> **Note:** This can be slow for large tables because it logs each deleted row.

## Using TRUNCATE to Delete All Rows
The `TRUNCATE` statement is faster for removing all records:

```sql
TRUNCATE TABLE employees;
```

- **Faster than `DELETE`** because it does not log individual row deletions.
- **Resets auto-increment counters** in some databases.
- **Cannot be rolled back** in some SQL implementations.

## Dropping a Table
The `DROP` statement removes an entire table, including its structure:

```sql
DROP TABLE employees;
```

> **Irreversible:** All data, indexes, and structure are permanently lost.

## Safe Deletion with Transactions
For databases supporting transactions, you can use `ROLLBACK` to undo deletions:

```sql
START TRANSACTION;
DELETE FROM employees WHERE department = 'IT';
ROLLBACK; -- Undo deletion if needed
COMMIT; -- Finalize deletion
```

## Deleting with Joins
To delete records based on another table’s data:

**MySQL:**
```sql
DELETE e FROM employees e
JOIN departments d ON e.department_id = d.id
WHERE d.name = 'Sales';
```

**PostgreSQL, SQL Server:**
```sql
DELETE FROM employees
USING departments
WHERE employees.department_id = departments.id
AND departments.name = 'Sales';
```

