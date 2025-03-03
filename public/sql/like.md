# Searching with LIKE

## Introduction
The `LIKE` operator in SQL is used to search for a specified pattern in a column. It is commonly used with the `WHERE` clause for partial matching.

## Using LIKE with Wildcards
### `%` Wildcard (Matches Zero or More Characters)
To find employees whose names start with 'J':

**MySQL, PostgreSQL, SQL Server, Oracle:**
```sql
SELECT * FROM employees WHERE name LIKE 'J%';
```

To find employees whose names end with 'son':

```sql
SELECT * FROM employees WHERE name LIKE '%son';
```

To find employees whose names contain 'an':

```sql
SELECT * FROM employees WHERE name LIKE '%an%';
```

### `_` Wildcard (Matches a Single Character)
To find employees whose names have 'J' as the first letter and any two characters after:

```sql
SELECT * FROM employees WHERE name LIKE 'J__';
```

## Using LIKE with NOT
To find employees whose names do NOT start with 'J':

```sql
SELECT * FROM employees WHERE name NOT LIKE 'J%';
```

## Using LIKE with Case Sensitivity
- **MySQL**: Case-insensitive by default (unless using `BINARY`).
- **PostgreSQL**: Case-sensitive by default, use `ILIKE` for case-insensitive search.
- **SQL Server**: Case sensitivity depends on collation.
- **Oracle**: Case-sensitive by default, can use `LOWER()` or `UPPER()` for case-insensitive search.

Example for PostgreSQL (case-insensitive search):

```sql
SELECT * FROM employees WHERE name ILIKE 'j%';
```

## Using LIKE with ESCAPE Characters
To search for a literal `%` or `_`, use the `ESCAPE` clause:

```sql
SELECT * FROM employees WHERE name LIKE '100\%' ESCAPE '\';
```
