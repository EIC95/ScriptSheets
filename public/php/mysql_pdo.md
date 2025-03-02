# PHP MySQL PDO

## Introduction
PHP Data Objects (PDO) is a database access abstraction layer that provides a uniform interface for working with multiple database systems. It is more secure and flexible compared to the traditional `mysqli` extension.

## Connecting to a MySQL Database
To connect to a MySQL database using PDO, we use the `new PDO()` constructor with the required parameters: DSN (Data Source Name), username, and password.

```php
$dsn = "mysql:host=localhost;dbname=testdb;charset=utf8mb4";
$username = "root";
$password = "";

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
```

## Executing Queries
### Using `query()` for Simple Queries
The `query()` method is used for simple SELECT statements that do not require parameters.

```php
$sql = "SELECT * FROM users";
foreach ($pdo->query($sql) as $row) {
    print_r($row);
}
```

### Using `prepare()` and `execute()` for Secure Queries
To prevent SQL injection, we use prepared statements with placeholders.

```php
$sql = "SELECT * FROM users WHERE email = :email";
$stmt = $pdo->prepare($sql);
$stmt->execute(['email' => 'test@example.com']);
$result = $stmt->fetch(PDO::FETCH_ASSOC);
print_r($result);
```

## Inserting Data
```php
$sql = "INSERT INTO users (name, email) VALUES (:name, :email)";
$stmt = $pdo->prepare($sql);
$stmt->execute(['name' => 'John Doe', 'email' => 'john@example.com']);
echo "User inserted successfully";
```

## Updating Data
```php
$sql = "UPDATE users SET name = :name WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute(['name' => 'Jane Doe', 'id' => 1]);
echo "User updated successfully";
```

## Deleting Data
```php
$sql = "DELETE FROM users WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => 1]);
echo "User deleted successfully";
```

## Fetching Data
### Fetching a Single Row
```php
$sql = "SELECT * FROM users WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => 1]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);
print_r($user);
```

### Fetching Multiple Rows
```php
$sql = "SELECT * FROM users";
$stmt = $pdo->query($sql);
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
print_r($users);
```

## Transactions
Transactions help ensure data integrity by allowing multiple operations to be executed together.

```php
try {
    $pdo->beginTransaction();
    $pdo->exec("INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com')");
    $pdo->exec("INSERT INTO users (name, email) VALUES ('Bob', 'bob@example.com')");
    $pdo->commit();
    echo "Transaction successful";
} catch (Exception $e) {
    $pdo->rollBack();
    echo "Transaction failed: " . $e->getMessage();
}
```

## Closing the Connection
PDO automatically closes the connection when the script ends, but you can explicitly close it by setting the variable to `null`.

```php
$pdo = null;
```

