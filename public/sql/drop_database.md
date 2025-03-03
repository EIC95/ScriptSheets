# Database Deletion

## Introduction
Deleting a database permanently removes it along with all its data. This operation is irreversible, so it should be performed with caution.

## Deleting a Database
### MySQL
```sql
DROP DATABASE company;
```

### PostgreSQL
```sql
DROP DATABASE company;
```

### SQL Server
```sql
DROP DATABASE company;
```

## Checking Existing Databases Before Deletion
### MySQL
```sql
SHOW DATABASES;
```

### PostgreSQL
```sql
SELECT datname FROM pg_database;
```

### SQL Server
```sql
SELECT name FROM sys.databases;
```

## Ensuring Safe Deletion
To avoid accidental deletion, check if the database exists before running the `DROP DATABASE` command.

### MySQL
```sql
DROP DATABASE IF EXISTS company;
```

### PostgreSQL
```sql
SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'company';
DROP DATABASE IF EXISTS company;
```

### SQL Server
```sql
IF EXISTS (SELECT name FROM sys.databases WHERE name = 'company')
    DROP DATABASE company;
```

