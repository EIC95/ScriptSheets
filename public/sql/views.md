# Views in SQL

## Introduction
A **view** is a virtual table based on the result of an SQL query. Views do not store data themselves but provide a way to simplify complex queries, enhance security, and maintain data abstraction.

## Creating a View
You can create a view using the `CREATE VIEW` statement.

### Syntax
```sql
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

### Example
```sql
CREATE VIEW active_customers AS
SELECT id, name, email
FROM customers
WHERE status = 'active';
```

## Using a View
Once created, a view can be used like a regular table in SQL queries.

```sql
SELECT * FROM active_customers;
```

## Updating a View
Views can be updated using the `CREATE OR REPLACE VIEW` (PostgreSQL, MySQL) or `ALTER VIEW` (SQL Server).

### Example
```sql
CREATE OR REPLACE VIEW active_customers AS
SELECT id, name, email, created_at
FROM customers
WHERE status = 'active';
```

## Deleting a View
To remove a view, use the `DROP VIEW` statement.

```sql
DROP VIEW active_customers;
```

## Updatable Views
Some views allow `INSERT`, `UPDATE`, and `DELETE` operations, depending on the DBMS and the complexity of the query.

### Example (MySQL, PostgreSQL, SQL Server)
```sql
UPDATE active_customers SET email = 'newemail@example.com' WHERE id = 1;
```

However, views containing joins, aggregates, or `DISTINCT` are generally **not updatable**.

