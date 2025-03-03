# Data Updating (UPDATE)

## Introduction
The `UPDATE` statement modifies existing records in a table. It allows changing one or multiple column values based on conditions.

## Updating a Single Column
To update a specific column for certain rows:

```sql
UPDATE employees SET salary = 60000 WHERE id = 1;
```

## Updating Multiple Columns
To modify multiple columns in a single query:

```sql
UPDATE employees SET salary = 70000, department = 'HR' WHERE id = 2;
```

## Updating All Rows
Without a `WHERE` clause, all rows in the table will be updated:

```sql
UPDATE employees SET department = 'General';
```

> **Warning:** Always use a `WHERE` clause unless updating all records is intended.

## Using Expressions in Updates
Column values can be updated using expressions or calculations:

```sql
UPDATE employees SET salary = salary * 1.10 WHERE department = 'IT';
```

## Updating with Subqueries
You can update values based on another table’s data:

```sql
UPDATE employees SET salary = (SELECT AVG(salary) FROM employees WHERE department = 'Finance') WHERE department = 'HR';
```

## Updating with NULL Values
To set a column to `NULL`:

```sql
UPDATE employees SET manager_id = NULL WHERE department = 'Sales';
```

## Safe Updates with Transactions
For critical updates, use transactions (if supported) to allow rollback in case of errors:

**MySQL, PostgreSQL:**
```sql
START TRANSACTION;
UPDATE employees SET salary = salary + 5000 WHERE department = 'IT';
ROLLBACK; -- Undo changes if needed
COMMIT; -- Save changes permanently
```

## Conditional Updates Using CASE
To update values conditionally:

```sql
UPDATE employees
SET salary = CASE
    WHEN department = 'IT' THEN salary * 1.15
    WHEN department = 'HR' THEN salary * 1.10
    ELSE salary * 1.05
END;
```


