# Table Modification

## Introduction
Modifying a table allows altering its structure by adding, removing, or changing columns and constraints.

## Adding a Column
### MySQL, PostgreSQL, SQL Server
```sql
ALTER TABLE employees ADD COLUMN salary DECIMAL(10,2);
```

## Modifying a Column
### MySQL
```sql
ALTER TABLE employees MODIFY COLUMN name VARCHAR(150) NOT NULL;
```

### PostgreSQL
```sql
ALTER TABLE employees ALTER COLUMN name TYPE VARCHAR(150);
ALTER TABLE employees ALTER COLUMN name SET NOT NULL;
```

### SQL Server
```sql
ALTER TABLE employees ALTER COLUMN name VARCHAR(150) NOT NULL;
```

## Renaming a Column
### MySQL & PostgreSQL
```sql
ALTER TABLE employees RENAME COLUMN name TO full_name;
```

### SQL Server
```sql
EXEC sp_rename 'employees.name', 'full_name', 'COLUMN';
```

## Removing a Column
### MySQL, PostgreSQL, SQL Server
```sql
ALTER TABLE employees DROP COLUMN salary;
```

## Adding a Constraint
### MySQL & PostgreSQL
```sql
ALTER TABLE employees ADD CONSTRAINT chk_age CHECK (age >= 18);
```

### SQL Server
```sql
ALTER TABLE employees ADD CHECK (age >= 18);
```

## Dropping a Constraint
### MySQL & PostgreSQL
```sql
ALTER TABLE employees DROP CONSTRAINT chk_age;
```

### SQL Server
```sql
ALTER TABLE employees DROP CONSTRAINT [chk_age];
```

