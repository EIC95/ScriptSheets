# PHP Superglobals

## Introduction

Superglobals are built-in variables that are always available in all scopes. They provide access to various types of data, such as form inputs, cookies, and server information.

## Common Superglobals

### `$_GET`

Contains data sent via URL parameters.

```php
<?php
// URL: http://example.com/page.php?name=John&age=30
echo $_GET['name']; // Outputs: John
echo $_GET['age']; // Outputs: 30
?>
```

### `$_POST`

Contains data sent via HTTP POST requests, typically from forms.

```php
<?php
// Form data: name=John&age=30
echo $_POST['name']; // Outputs: John
echo $_POST['age']; // Outputs: 30
?>
```

### `$_REQUEST`

Contains data from both `$_GET`, `$_POST`, and `$_COOKIE`.

```php
<?php
// Access data from GET, POST, or COOKIE
echo $_REQUEST['name']; // Outputs: John
?>
```

### `$_SERVER`

Contains server and execution environment information.

```php
<?php
echo $_SERVER['SERVER_NAME']; // Outputs: example.com
echo $_SERVER['REQUEST_METHOD']; // Outputs: GET or POST
?>
```

### `$_SESSION`

Stores session variables. Requires `session_start()` to use.

```php
<?php
session_start();
$_SESSION['username'] = "JohnDoe";
echo $_SESSION['username']; // Outputs: JohnDoe
?>
```

### `$_COOKIE`

Contains cookie data sent by the browser.

```php
<?php
// Set a cookie
setcookie("user", "John", time() + 3600);

// Access the cookie
echo $_COOKIE['user']; // Outputs: John
?>
```

### `$_FILES`

Contains data related to file uploads.

```php
<?php
// Form data: file input named 'userfile'
echo $_FILES['userfile']['name']; // Outputs: filename.jpg
echo $_FILES['userfile']['size']; // Outputs: filesize
?>
```

### `$_ENV`

Contains environment variables passed to the script.

```php
<?php
echo $_ENV['HOSTNAME']; // Outputs: hostname
?>
```

### `$GLOBALS`

References all variables in the global scope.

```php
<?php
$x = 10;
function test() {
    echo $GLOBALS['x']; // Outputs: 10
}
test();
?>
```

## Security Considerations

- Always validate and sanitize data from superglobals to prevent security vulnerabilities like SQL injection and XSS.
- Use prepared statements for database queries.
- Avoid exposing sensitive information through error messages or logs.