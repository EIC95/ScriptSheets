# Cookies in PHP

## Introduction
Cookies are small pieces of data stored on the user's browser. They are used to track user sessions, store preferences, and manage authentication in PHP applications.

## Setting a Cookie
Use the `setcookie()` function to create a cookie. It must be called before any output is sent to the browser.

```php
setcookie("username", "JohnDoe", time() + 3600, "/"); // Cookie valid for 1 hour
```

### Parameters of `setcookie()`
| Parameter  | Description |
|------------|-------------|
| `name`     | Name of the cookie |
| `value`    | Value to store in the cookie |
| `expires`  | Expiration time (in seconds since Unix epoch) |
| `path`     | Path on the server where the cookie is available |
| `domain`   | Domain where the cookie is valid |
| `secure`   | If `true`, the cookie is only sent over HTTPS |
| `httponly` | If `true`, the cookie is inaccessible via JavaScript |

## Retrieving a Cookie
To access a cookie, use the `$_COOKIE` superglobal:

```php
if (isset($_COOKIE["username"])) {
    echo "Welcome, " . $_COOKIE["username"];
} else {
    echo "No cookie found.";
}
```

## Updating a Cookie
To update a cookie, set it again with a new value and expiration time:

```php
setcookie("username", "JaneDoe", time() + 3600, "/");
```

## Deleting a Cookie
To delete a cookie, set its expiration time in the past:

```php
setcookie("username", "", time() - 3600, "/");
```

## Secure Cookies
To enhance security, set the `secure` and `httponly` flags:

```php
setcookie("session_id", "xyz123", time() + 3600, "/", "example.com", true, true);
```

- `true` for HTTPS-only cookies
- `true` to prevent JavaScript access (mitigates XSS attacks)

