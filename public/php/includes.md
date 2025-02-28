# PHP Includes

## Introduction

Includes are used to insert the content of one PHP file into another before the server executes it. This is useful for including common code like headers, footers, or configuration files.

## Include Statement

Use `include` to insert a file. If the file is not found, a warning is issued, but the script continues execution.

```php
<?php
include 'header.php';
echo "Welcome to the homepage!";
include 'footer.php';
?>
```

## Require Statement

Use `require` to insert a file. If the file is not found, a fatal error is issued, and the script stops execution.

```php
<?php
require 'config.php';
echo "Database configured!";
?>
```

## Include vs Require

- **Include**: Issues a warning if the file is not found, and the script continues.
- **Require**: Issues a fatal error if the file is not found, and the script stops.

Use `include` for non-critical files and `require` for essential files that must be included for the script to function correctly.

## Include_once and Require_once

- `include_once`: Includes the file only if it hasn't been included before.
- `require_once`: Requires the file only if it hasn't been required before.

```php
<?php
include_once 'config.php';
require_once 'functions.php';
?>
```

## Benefits of Includes

- **Reusability**: Reuse code across multiple files.
- **Maintainability**: Update code in one place and reflect changes across all files.
- **Organization**: Keep code organized by separating different functionalities into different files.

## Example Structure

```plaintext
/project
    /includes
        header.php
        footer.php
        config.php
    index.php
```

### index.php

```php
<?php
include 'includes/header.php';
echo "Welcome to the homepage!";
include 'includes/footer.php';
?>
```

### includes/header.php

```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Website</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
```

### includes/footer.php

```php
    <footer>
        <p>&copy; 2023 My Website</p>
    </footer>
</body>
</html>
```

## Security Considerations

- Avoid including files from external sources.
- Validate and sanitize any data used in included files to prevent security vulnerabilities.
- Use absolute paths to avoid including unintended files.