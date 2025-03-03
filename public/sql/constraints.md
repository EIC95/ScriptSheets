# Table Constraints

## Introduction
Constraints in SQL enforce rules on table data to ensure accuracy and reliability. They help maintain data integrity by restricting the types of values that can be inserted.

## Primary Key Constraint
Ensures that each row has a unique identifier.

### MySQL, PostgreSQL, SQL Server
```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
```

## Foreign Key Constraint
Enforces referential integrity between tables.

### MySQL, PostgreSQL, SQL Server
```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department_id INT,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id)
);
```

## Unique Constraint
Ensures all values in a column are distinct.

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    email VARCHAR(255) UNIQUE
);
```

## Not Null Constraint
Ensures a column cannot have NULL values.

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
```

## Check Constraint
Enforces a condition on column values.

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    age INT CHECK (age >= 18)
);
```

## Default Constraint
Sets a default value if no value is provided.

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    hire_date DATE DEFAULT CURRENT_DATE
);
```

## Dropping Constraints
### Drop a Primary Key
```sql
ALTER TABLE employees DROP CONSTRAINT employees_pkey; -- PostgreSQL
ALTER TABLE employees DROP PRIMARY KEY; -- MySQL, SQL Server
```

### Drop a Foreign Key
```sql
ALTER TABLE employees DROP CONSTRAINT fk_department;
```

### Drop a Unique Constraint
```sql
ALTER TABLE employees DROP CONSTRAINT employees_email_key;
```


