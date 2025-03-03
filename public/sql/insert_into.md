# Data Insertion (INSERT INTO)

## Introduction
The `INSERT INTO` statement is used to add new records into a table. It can insert data into all columns or specific ones.

## Inserting Data into All Columns
To insert values into all columns, specify the values in order:

```sql
INSERT INTO employees VALUES (1, 'John', 'Doe', 'IT', 55000);
```

> **Note:** This method requires knowing the exact column order and providing values for all columns.

## Inserting Data into Specific Columns
To insert values into specific columns, list the column names explicitly:

```sql
INSERT INTO employees (first_name, last_name, department) VALUES ('Jane', 'Smith', 'HR');
```

## Inserting Multiple Rows
You can insert multiple records in a single query:

```sql
INSERT INTO employees (first_name, last_name, department, salary) VALUES
('Alice', 'Johnson', 'Finance', 62000),
('Bob', 'Brown', 'IT', 59000);
```

## Using DEFAULT Values
If a column has a default value, you can omit it or explicitly use `DEFAULT`:

```sql
INSERT INTO employees (first_name, last_name, department, salary) VALUES
('Charlie', 'Davis', 'Marketing', DEFAULT);
```

## Inserting Data from Another Table
You can insert data from one table into another using `SELECT`:

```sql
INSERT INTO employees_backup (id, first_name, last_name, department, salary)
SELECT id, first_name, last_name, department, salary FROM employees;
```

## Inserting with AUTO_INCREMENT (Primary Key)
For tables with an auto-incremented primary key, omit the column in the `INSERT` statement:

```sql
INSERT INTO employees (first_name, last_name, department, salary) VALUES ('David', 'Miller', 'IT', 70000);
```

