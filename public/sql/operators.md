# SQL Operators

## Introduction
SQL operators are used to perform operations on values in queries. They are categorized into different types, including arithmetic, comparison, logical, and bitwise operators.

## Arithmetic Operators
Used for mathematical operations.

| Operator | Description          | Example       |
|----------|----------------------|---------------|
| `+`      | Addition             | `SELECT 10 + 5;` |
| `-`      | Subtraction          | `SELECT 10 - 5;` |
| `*`      | Multiplication       | `SELECT 10 * 5;` |
| `/`      | Division             | `SELECT 10 / 5;` |
| `%`      | Modulus (Remainder)  | `SELECT 10 % 3;` |

## Comparison Operators
Used to compare values in queries.

| Operator | Description                        | Example |
|----------|------------------------------------|---------|
| `=`      | Equal to                          | `SELECT * FROM employees WHERE salary = 50000;` |
| `!=` or `<>` | Not equal to                   | `SELECT * FROM employees WHERE salary <> 50000;` |
| `>`      | Greater than                      | `SELECT * FROM employees WHERE salary > 50000;` |
| `<`      | Less than                         | `SELECT * FROM employees WHERE salary < 50000;` |
| `>=`     | Greater than or equal to          | `SELECT * FROM employees WHERE salary >= 50000;` |
| `<=`     | Less than or equal to             | `SELECT * FROM employees WHERE salary <= 50000;` |
| `BETWEEN` | Within a range                    | `SELECT * FROM employees WHERE salary BETWEEN 40000 AND 60000;` |
| `IN`     | Matches any in a list             | `SELECT * FROM employees WHERE department IN ('HR', 'IT');` |
| `LIKE`   | Matches pattern                   | `SELECT * FROM employees WHERE name LIKE 'J%';` |
| `IS NULL` | Checks for NULL values           | `SELECT * FROM employees WHERE manager_id IS NULL;` |

## Logical Operators
Used to combine multiple conditions in SQL statements.

| Operator | Description                     | Example |
|----------|---------------------------------|---------|
| `AND`    | Returns true if both conditions are true | `SELECT * FROM employees WHERE department = 'IT' AND salary > 50000;` |
| `OR`     | Returns true if at least one condition is true | `SELECT * FROM employees WHERE department = 'IT' OR salary > 50000;` |
| `NOT`    | Reverses the result of a condition | `SELECT * FROM employees WHERE NOT department = 'IT';` |

## Bitwise Operators (SQL Server, MySQL, PostgreSQL)
Used for bit-level operations.

| Operator | Description    | Example |
|----------|--------------|---------|
| `&`      | Bitwise AND  | `SELECT 5 & 3;`  (Returns `1`) |
| `|`      | Bitwise OR   | `SELECT 5 | 3;`  (Returns `7`) |
| `^`      | Bitwise XOR  | `SELECT 5 ^ 3;`  (Returns `6`) |
| `~`      | Bitwise NOT  | `SELECT ~5;` (Returns `-6` in SQL Server) |
