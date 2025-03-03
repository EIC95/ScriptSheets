# Database Creation

## Introduction
Creating a database is the first step in managing structured data in SQL. Different database management systems (DBMS) have specific syntax and options for database creation.

## Creating a Database
### MySQL
```sql
CREATE DATABASE company;
```

### PostgreSQL
```sql
CREATE DATABASE company;
```

### SQL Server
```sql
CREATE DATABASE company;
```

## Using a Database
Before creating tables or inserting data, you must select the database to work with.

### MySQL & SQL Server
```sql
USE company;
```

### PostgreSQL
```sql
\c company
```

## Creating a Database with Specific Options
### MySQL
```sql
CREATE DATABASE company CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
```

### PostgreSQL
```sql
CREATE DATABASE company WITH ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8' TEMPLATE template0;
```

### SQL Server
```sql
CREATE DATABASE company
ON
( NAME = company_dat, FILENAME = 'C:\company.mdf', SIZE = 10MB, MAXSIZE = 50MB, FILEGROWTH = 5MB )
LOG ON
( NAME = company_log, FILENAME = 'C:\company.ldf', SIZE = 5MB, MAXSIZE = 25MB, FILEGROWTH = 5MB );
```

## Checking Existing Databases
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
