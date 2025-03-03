# Table Joins

## Introduction
Joins in SQL are used to retrieve data from multiple tables based on related columns. They allow combining rows from two or more tables into a single result set.

## INNER JOIN
Returns only matching rows from both tables.

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT employees.name, departments.department_name 
FROM employees 
INNER JOIN departments ON employees.department_id = departments.id;
```

## LEFT JOIN (LEFT OUTER JOIN)
Returns all rows from the left table and matching rows from the right table. Non-matching rows from the right table return NULL.

```sql
SELECT employees.name, departments.department_name 
FROM employees 
LEFT JOIN departments ON employees.department_id = departments.id;
```

## RIGHT JOIN (RIGHT OUTER JOIN)
Returns all rows from the right table and matching rows from the left table. Non-matching rows from the left table return NULL.

```sql
SELECT employees.name, departments.department_name 
FROM employees 
RIGHT JOIN departments ON employees.department_id = departments.id;
```

## FULL JOIN (FULL OUTER JOIN)
Returns all rows from both tables. Non-matching rows from either table return NULL.

**PostgreSQL, SQL Server, Oracle:**
```sql
SELECT employees.name, departments.department_name 
FROM employees 
FULL JOIN departments ON employees.department_id = departments.id;
```

### Simulating FULL OUTER JOIN in MySQL
MySQL does not support `FULL OUTER JOIN` directly. To achieve the same result, combine `LEFT JOIN` and `RIGHT JOIN` with `UNION`:

```sql
SELECT employees.name, departments.department_name 
FROM employees 
LEFT JOIN departments ON employees.department_id = departments.id
UNION
SELECT employees.name, departments.department_name 
FROM employees 
RIGHT JOIN departments ON employees.department_id = departments.id;
```

## CROSS JOIN
Returns the Cartesian product of both tables (every combination of rows).

```sql
SELECT employees.name, departments.department_name 
FROM employees 
CROSS JOIN departments;
```

## SELF JOIN
A table joins itself using aliases.

```sql
SELECT e1.name AS employee, e2.name AS manager 
FROM employees e1 
INNER JOIN employees e2 ON e1.manager_id = e2.id;
```
