# Databases

A database is a structured collection of data that allows efficient storage, retrieval, and management of information. In SQL-based systems, databases serve as containers that hold tables, views, indexes, and other database objects.

## Creating a Database

To create a new database, the `CREATE DATABASE` statement is used:

**MySQL, PostgreSQL, SQL Server:**

```sql
CREATE DATABASE my_database;
```

**Oracle (with additional options):**

```sql
CREATE DATABASE my_database USER SYS IDENTIFIED BY 'password' USER SYSTEM IDENTIFIED BY 'password';
```

## Selecting a Database

Before performing operations on tables, you must select the database you want to use:

**MySQL, SQL Server:**

```sql
USE my_database;
```

**PostgreSQL:**

```sql
\c my_database
```

## Deleting a Database

To remove an existing database, the `DROP DATABASE` statement is used:

**MySQL, PostgreSQL, SQL Server:**

```sql
DROP DATABASE my_database;
```

**Oracle:**

```sql
DROP DATABASE my_database INCLUDING BACKUPS;
```

**Warning:** This operation is irreversible and deletes all associated data.

## Database Backup

Most DBMS provide backup utilities to prevent data loss.

**SQL Server:**

```sql
BACKUP DATABASE my_database TO DISK = 'backup.bak';
```

**MySQL (using ****\`\`****):**

```sh
mysqldump -u user -p my_database > backup.sql
```

**PostgreSQL (using ****\`\`****):**

```sh
pg_dump -U user -W -F c my_database > backup.dump
```

**Oracle (using RMAN):**

```sh
rman target / 
BACKUP DATABASE;
```