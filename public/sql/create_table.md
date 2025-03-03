# Table Creation

## Introduction
Creating tables is essential for structuring data within a database. Each table consists of columns with defined data types and constraints.

## Creating a Table
### MySQL
```sql
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    department_id INT,
    hire_date DATE
);
```

### PostgreSQL
```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    department_id INT,
    hire_date DATE
);
```

### SQL Server
```sql
CREATE TABLE employees (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    department_id INT,
    hire_date DATE
);
```

## Creating a Table with Constraints
### MySQL & PostgreSQL & SQL Server
```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18),
    department_id INT,
    hire_date DATE DEFAULT CURRENT_DATE,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id)
);
```

## Checking Existing Tables
### MySQL
```sql
SHOW TABLES;
```

### PostgreSQL
```sql
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
```

### SQL Server
```sql
SELECT name FROM sys.tables;
```

