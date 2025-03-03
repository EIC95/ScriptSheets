# Column Aliases

## Introduction
A column alias in SQL is a temporary name assigned to a column or an expression in a query. Aliases make output results more readable and can be useful when working with complex expressions.

## Using AS for Column Aliases
To rename a column in the result set:

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT first_name AS name FROM employees;
```

## Aliases Without AS
Some databases allow column aliases without the `AS` keyword:

```sql
SELECT first_name name FROM employees;
```

## Using Aliases for Expressions
Column aliases can rename computed results:

```sql
SELECT salary, salary * 1.10 AS increased_salary FROM employees;
```

## Using Aliases with Spaces
If an alias contains spaces or special characters, use double quotes (`"`) or square brackets (`[]`):

**PostgreSQL, Oracle:**
```sql
SELECT first_name || ' ' || last_name AS "Full Name" FROM employees;
```

**SQL Server:**
```sql
SELECT first_name + ' ' + last_name AS [Full Name] FROM employees;
```

## Using Aliases in ORDER BY
Column aliases can be used in `ORDER BY` clauses:

```sql
SELECT first_name AS name FROM employees ORDER BY name;
```

