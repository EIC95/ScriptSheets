# Sessions in PHP

## Introduction
Sessions in PHP allow data to be stored across multiple pages for a single user. Unlike cookies, session data is stored on the server, making it more secure.

## Starting a Session
Use `session_start()` at the beginning of each page where you want to use sessions.

```php
session_start();
```

## Storing Session Data
Session variables are stored in the `$_SESSION` superglobal.

```php
session_start();
$_SESSION["username"] = "JohnDoe";
$_SESSION["logged_in"] = true;
```

## Retrieving Session Data
To access session variables, simply use `$_SESSION`:

```php
session_start();
if (isset($_SESSION["username"])) {
    echo "Welcome, " . $_SESSION["username"];
} else {
    echo "No session found.";
}
```

## Modifying Session Variables
To update a session variable, assign a new value:

```php
$_SESSION["username"] = "JaneDoe";
```

## Removing a Specific Session Variable
Use `unset()` to remove a specific session variable:

```php
unset($_SESSION["username"]);
```

## Destroying a Session
To remove all session variables and destroy the session:

```php
session_start();
session_unset(); // Remove all session variables
session_destroy(); // Destroy the session
```

## Session Security
To enhance security:
- Regenerate session ID to prevent session fixation:

  ```php
  session_regenerate_id(true);
  ```
- Store sensitive data securely and avoid exposing session IDs in URLs.
- Use `session_set_cookie_params()` to configure secure cookie settings.

