# Result Limitation

## Introduction
Limiting the number of rows returned in a query is essential for performance optimization and pagination. Different SQL database systems provide different ways to limit results.

## Using LIMIT (MySQL, PostgreSQL)
The `LIMIT` clause restricts the number of rows returned:

```sql
SELECT * FROM employees LIMIT 5;
```

To skip a specific number of rows before limiting:

```sql
SELECT * FROM employees LIMIT 5 OFFSET 10;
```

## Using TOP (SQL Server)
SQL Server uses the `TOP` keyword instead of `LIMIT`:

```sql
SELECT TOP 5 * FROM employees;
```

To return a percentage of rows:

```sql
SELECT TOP 10 PERCENT * FROM employees;
```

## Using FETCH (Oracle, SQL Server, PostgreSQL)
For databases that support `FETCH`, use it with `ORDER BY`:

```sql
SELECT * FROM employees ORDER BY salary DESC FETCH FIRST 5 ROWS ONLY;
```

To implement pagination:

```sql
SELECT * FROM employees ORDER BY id OFFSET 10 ROWS FETCH NEXT 5 ROWS ONLY;
```

## Best Practices
- Always use `ORDER BY` when limiting results to ensure consistent output.
- Use `OFFSET` for pagination but consider performance impacts on large datasets.
- `FETCH` is ANSI SQL-compliant and preferred for modern SQL implementations.


