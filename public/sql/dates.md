# Dates in SQL

## Introduction
SQL provides several date and time data types to store and manipulate temporal values. Different database management systems (DBMS) have their own implementations with specific functionalities.

## Date and Time Data Types

| Type        | MySQL | PostgreSQL | SQL Server | Description |
|-------------|-------|------------|------------|-------------|
| `DATE`      | Supported | Supported | Supported | Stores date (YYYY-MM-DD) |
| `TIME`      | Supported | Supported | Supported | Stores time (HH:MI:SS) |
| `DATETIME`  | Supported | Supported | Supported | Stores date and time |
| `TIMESTAMP` | Supported | Supported | Supported | Stores date/time with time zone support |

## Retrieving the Current Date and Time
Different DBMS provide functions to fetch the current date and time.

### MySQL
```sql
SELECT NOW(); -- Returns the current date and time
SELECT CURDATE(); -- Returns the current date
SELECT CURTIME(); -- Returns the current time
```

### PostgreSQL
```sql
SELECT NOW(); -- Returns the current timestamp with time zone
SELECT CURRENT_DATE; -- Returns the current date
SELECT CURRENT_TIME; -- Returns the current time
```

### SQL Server
```sql
SELECT GETDATE(); -- Returns the current date and time
SELECT SYSDATETIME(); -- Returns the current date and time with more precision
SELECT CURRENT_TIMESTAMP; -- Returns the current timestamp
```

## Formatting Dates
Formatting date values varies by DBMS.

### MySQL
```sql
SELECT DATE_FORMAT(NOW(), '%Y-%m-%d %H:%i:%s');
```

### PostgreSQL
```sql
SELECT TO_CHAR(NOW(), 'YYYY-MM-DD HH24:MI:SS');
```

### SQL Server
```sql
SELECT FORMAT(GETDATE(), 'yyyy-MM-dd HH:mm:ss');
```

## Date Arithmetic
SQL allows operations like adding or subtracting intervals from date values.

### MySQL
```sql
SELECT DATE_ADD(NOW(), INTERVAL 7 DAY); -- Adds 7 days
SELECT DATEDIFF('2025-01-01', '2024-12-01'); -- Difference in days
```

### PostgreSQL
```sql
SELECT NOW() + INTERVAL '7 days';
SELECT AGE('2025-01-01', '2024-12-01');
```

### SQL Server
```sql
SELECT DATEADD(DAY, 7, GETDATE()); -- Adds 7 days
SELECT DATEDIFF(DAY, '2024-12-01', '2025-01-01'); -- Difference in days
```


