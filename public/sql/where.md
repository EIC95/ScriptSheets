# Data Filtering (WHERE)

## Introduction
The `WHERE` clause is used to filter records that meet specific conditions in a `SELECT`, `UPDATE`, or `DELETE` statement. It allows retrieving only the data that matches the given criteria.

## Basic Usage
To filter results based on a single condition:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT * FROM employees WHERE department = 'IT';
```

## Using Comparison Operators
Comparison operators allow filtering based on numerical and textual conditions:

```sql
SELECT * FROM employees WHERE salary > 50000;
SELECT * FROM employees WHERE age <= 30;
SELECT * FROM employees WHERE department <> 'HR';
```

## Using Logical Operators
Multiple conditions can be combined using logical operators:

**AND Operator:**
```sql
SELECT * FROM employees WHERE department = 'IT' AND salary > 60000;
```

**OR Operator:**
```sql
SELECT * FROM employees WHERE department = 'IT' OR department = 'HR';
```

**NOT Operator:**
```sql
SELECT * FROM employees WHERE NOT department = 'HR';
```

## Filtering with BETWEEN
The `BETWEEN` operator selects values within a specified range:
```sql
SELECT * FROM employees WHERE salary BETWEEN 40000 AND 80000;
```

## Filtering with IN
The `IN` operator checks if a value matches any in a given list:
```sql
SELECT * FROM employees WHERE department IN ('IT', 'HR', 'Finance');
```

## Filtering with LIKE
The `LIKE` operator searches for patterns in text data:
```sql
SELECT * FROM employees WHERE first_name LIKE 'J%'; -- Starts with J
SELECT * FROM employees WHERE last_name LIKE '%son'; -- Ends with 'son'
SELECT * FROM employees WHERE email LIKE '%@company.com'; -- Contains '@company.com'
```

## Filtering NULL Values
To filter records with NULL values, use `IS NULL` or `IS NOT NULL`:
```sql
SELECT * FROM employees WHERE manager_id IS NULL;
SELECT * FROM employees WHERE email IS NOT NULL;
```


