# Table Deletion and Truncation

## Introduction
Deleting or truncating a table removes data, but they work differently. `DROP` removes the table entirely, while `TRUNCATE` clears data but keeps the table structure.

## Dropping a Table
Completely removes the table and its structure from the database.

### MySQL, PostgreSQL, SQL Server
```sql
DROP TABLE employees;
```

### Checking If a Table Exists Before Dropping
#### MySQL & PostgreSQL
```sql
DROP TABLE IF EXISTS employees;
```

#### SQL Server
```sql
IF OBJECT_ID('employees', 'U') IS NOT NULL
    DROP TABLE employees;
```

## Truncating a Table
Removes all rows but retains the table structure.

### MySQL, PostgreSQL, SQL Server
```sql
TRUNCATE TABLE employees;
```

## Differences Between DROP and TRUNCATE
| Feature          | DROP TABLE      | TRUNCATE TABLE |
|-----------------|----------------|---------------|
| Deletes Data    | Yes             | Yes          |
| Deletes Table Structure | Yes      | No           |
| Can Be Rolled Back (with TRANSACTION) | No | Sometimes (depends on DBMS) |
| Faster for Large Tables | N/A | Yes |


