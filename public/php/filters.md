# Filters in PHP

## Introduction
PHP filters are used to validate and sanitize user input. The `filter_var()` and `filter_input()` functions allow easy filtering of data.

## Validating Input
PHP provides built-in filters for validation to check if data meets specific criteria.

### Validate an Email
```php
$email = "example@email.com";
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Valid email";
} else {
    echo "Invalid email";
}
```

### Validate an Integer
```php
$number = "123";
if (filter_var($number, FILTER_VALIDATE_INT)) {
    echo "Valid integer";
} else {
    echo "Invalid integer";
}
```

### Validate a URL
```php
$url = "https://www.example.com";
if (filter_var($url, FILTER_VALIDATE_URL)) {
    echo "Valid URL";
} else {
    echo "Invalid URL";
}
```

## Sanitizing Input
Sanitization removes unwanted characters from user input.

### Sanitize a String
```php
$string = "<h1>Hello</h1>";
$clean_string = filter_var($string, FILTER_SANITIZE_STRING);
echo $clean_string;
```

### Sanitize an Email
```php
$email = "bad@ email.com";
$clean_email = filter_var($email, FILTER_SANITIZE_EMAIL);
echo $clean_email;
```

### Sanitize a URL
```php
$url = "http://www.example.com/some path";
$clean_url = filter_var($url, FILTER_SANITIZE_URL);
echo $clean_url;
```

## Using `filter_input()`
To get filtered input directly from `$_GET`, `$_POST`, or `$_SERVER`:

```php
$input = filter_input(INPUT_GET, 'user', FILTER_SANITIZE_STRING);
echo $input;
```

## Custom Filters
Custom validation functions can be used with `filter_var()`:

```php
function customValidation($value) {
    return ($value >= 10 && $value <= 100);
}

$number = 50;
if (filter_var($number, FILTER_CALLBACK, ["options" => "customValidation"])) {
    echo "Valid number";
} else {
    echo "Invalid number";
}
```

