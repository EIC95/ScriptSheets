# SQL Injection

## Introduction
SQL Injection is a type of attack that allows malicious users to manipulate SQL queries executed by an application. It can lead to unauthorized access, data corruption, or even full database compromise.

## How SQL Injection Works
Attackers exploit vulnerabilities in applications that improperly handle user input. If inputs are directly concatenated into SQL queries, they can inject malicious SQL code.

### Example of Vulnerable Code
```sql
SELECT * FROM users WHERE username = '" + user_input + "' AND password = '" + password_input + "';
```
If an attacker inputs:
```
' OR '1'='1
```
The query becomes:
```sql
SELECT * FROM users WHERE username = '' OR '1'='1' AND password = '' OR '1'='1';
```
Since `'1'='1'` always evaluates to `TRUE`, the attacker can bypass authentication.

## Types of SQL Injection

### 1. Classic SQL Injection
Injecting malicious SQL into a query to retrieve or modify data.

### 2. Blind SQL Injection
Attackers infer information from database responses without seeing actual data.

### 3. Time-Based SQL Injection
Exploiting delays in database responses to determine query execution results.

### 4. Error-Based SQL Injection
Forcing the database to return errors that reveal information about its structure.

## Prevention Techniques

### 1. Use Prepared Statements (Parameterized Queries)
Prepared statements ensure user inputs are treated as data, not executable SQL.

#### Example in MySQL (PHP)
```php
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
$stmt->execute([$username, $password]);
```

### 2. Use Stored Procedures
Encapsulating queries in stored procedures limits direct manipulation.

```sql
CREATE PROCEDURE GetUser(IN user VARCHAR(50))
BEGIN
    SELECT * FROM users WHERE username = user;
END;
```

### 3. Validate and Sanitize Inputs
Ensure inputs match expected formats, e.g., using regex or whitelisting.

### 4. Restrict Database Privileges
Use the **principle of least privilege** to limit what queries can execute.

### 5. Use Web Application Firewalls (WAF)
WAFs can detect and block SQL Injection attempts dynamically.

