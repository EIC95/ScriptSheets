# Stored Procedures

## Introduction
A stored procedure is a set of SQL statements that can be stored and executed as a single unit. Stored procedures help optimize performance, improve security, and simplify complex queries by encapsulating logic inside the database.

## Creating a Stored Procedure
### MySQL
```sql
DELIMITER //
CREATE PROCEDURE GetAllEmployees()
BEGIN
    SELECT * FROM employees;
END //
DELIMITER ;
```

### PostgreSQL
```sql
CREATE FUNCTION GetAllEmployees()
RETURNS TABLE(id INT, name TEXT, department TEXT) AS $$
BEGIN
    RETURN QUERY SELECT * FROM employees;
END;
$$ LANGUAGE plpgsql;
```

### SQL Server
```sql
CREATE PROCEDURE GetAllEmployees
AS
BEGIN
    SELECT * FROM employees;
END;
```

## Executing a Stored Procedure
### MySQL & SQL Server
```sql
CALL GetAllEmployees();
```

### PostgreSQL
```sql
SELECT * FROM GetAllEmployees();
```

## Stored Procedure with Parameters
### MySQL
```sql
DELIMITER //
CREATE PROCEDURE GetEmployeesByDepartment(IN dept_name VARCHAR(50))
BEGIN
    SELECT * FROM employees WHERE department = dept_name;
END //
DELIMITER ;
```
**Executing:**
```sql
CALL GetEmployeesByDepartment('HR');
```

### PostgreSQL
```sql
CREATE FUNCTION GetEmployeesByDepartment(dept_name TEXT)
RETURNS TABLE(id INT, name TEXT, department TEXT) AS $$
BEGIN
    RETURN QUERY SELECT * FROM employees WHERE department = dept_name;
END;
$$ LANGUAGE plpgsql;
```
**Executing:**
```sql
SELECT * FROM GetEmployeesByDepartment('HR');
```

### SQL Server
```sql
CREATE PROCEDURE GetEmployeesByDepartment @dept_name VARCHAR(50)
AS
BEGIN
    SELECT * FROM employees WHERE department = @dept_name;
END;
```
**Executing:**
```sql
EXEC GetEmployeesByDepartment 'HR';
```
