# Combining Results

## Introduction
SQL allows combining results from multiple queries using set operations such as `UNION`, `UNION ALL`, `INTERSECT`, and `EXCEPT` (or `MINUS` in Oracle). These operations help merge datasets efficiently while maintaining control over duplicates and differences.

## UNION
The `UNION` operator combines results from two queries and removes duplicate rows.

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT name FROM employees
UNION
SELECT name FROM customers;
```

## UNION ALL
The `UNION ALL` operator combines results from two queries but retains all duplicates.

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT name FROM employees
UNION ALL
SELECT name FROM customers;
```

## INTERSECT
The `INTERSECT` operator returns only the rows that appear in both queries.

**PostgreSQL, SQL Server, Oracle:**
```sql
SELECT name FROM employees
INTERSECT
SELECT name FROM customers;
```

### Simulating INTERSECT in MySQL
MySQL does not support `INTERSECT` directly. It can be simulated using `INNER JOIN`:
```sql
SELECT name FROM employees
INNER JOIN customers USING (name);
```

## EXCEPT (MINUS in Oracle)
The `EXCEPT` operator returns rows from the first query that do not appear in the second.

**PostgreSQL, SQL Server:**
```sql
SELECT name FROM employees
EXCEPT
SELECT name FROM customers;
```

**Oracle (uses `MINUS` instead of `EXCEPT`):**
```sql
SELECT name FROM employees
MINUS
SELECT name FROM customers;
```

### Simulating EXCEPT in MySQL
MySQL does not support `EXCEPT` directly. It can be simulated using `LEFT JOIN` with `WHERE IS NULL`:
```sql
SELECT name FROM employees
LEFT JOIN customers USING (name)
WHERE customers.name IS NULL;
```
