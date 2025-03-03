# Auto Increment

## Introduction
Auto-increment is used to automatically generate unique values for a column, usually a primary key. Different SQL databases implement it in various ways.

## MySQL
MySQL provides the `AUTO_INCREMENT` attribute for integer columns.

```sql
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
```

### Setting the Starting Value
```sql
ALTER TABLE employees AUTO_INCREMENT = 100;
```

## PostgreSQL
PostgreSQL uses `SERIAL` to achieve auto-increment behavior.

```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
```

### Using Sequences Explicitly
```sql
CREATE SEQUENCE employees_seq START 100;

CREATE TABLE employees (
    id INT DEFAULT nextval('employees_seq') PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
```

## SQL Server
SQL Server uses `IDENTITY` for auto-incrementing columns.

```sql
CREATE TABLE employees (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
```

### Setting a Custom Starting Value
```sql
CREATE TABLE employees (
    id INT IDENTITY(100,1) PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
```


