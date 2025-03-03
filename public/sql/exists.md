# Existence Test

## Introduction
The `EXISTS` operator in SQL is used to check whether a subquery returns any rows. It is commonly used in `WHERE` clauses to test for the presence of related records in another table.

## Using EXISTS with a Subquery
The `EXISTS` condition returns `TRUE` if the subquery returns at least one row.

**Example:** Find employees who belong to a department.
```sql
SELECT name
FROM employees
WHERE EXISTS (
    SELECT 1 FROM departments
    WHERE departments.id = employees.department_id
);
```

## Using NOT EXISTS
The `NOT EXISTS` condition returns `TRUE` if the subquery returns no rows.

**Example:** Find employees who do not belong to any department.
```sql
SELECT name
FROM employees
WHERE NOT EXISTS (
    SELECT 1 FROM departments
    WHERE departments.id = employees.department_id
);
```

## EXISTS vs. IN
Both `EXISTS` and `IN` can be used to check for presence in another table, but `EXISTS` is generally faster for large datasets.

**Using IN:**
```sql
SELECT name
FROM employees
WHERE department_id IN (SELECT id FROM departments);
```

**Using EXISTS (more efficient for large tables):**
```sql
SELECT name
FROM employees
WHERE EXISTS (
    SELECT 1 FROM departments
    WHERE departments.id = employees.department_id
);
```

