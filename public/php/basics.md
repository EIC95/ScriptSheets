# PHP Basics

## Introduction

PHP is a server-side scripting language designed for web development. It can be embedded in HTML and runs on a web server.

## Variables

Variables store data and are declared with the `$` symbol.

```php
<?php
$name = "John Doe";
$age = 30;
?>
```

## Constants

Constants store unchangeable data, defined using `define()`.

```php
<?php
define("PI", 3.14);
echo PI; // Outputs: 3.14
?>
```

## Data Types

- **Integers**: Whole numbers, e.g., `42`.
- **Floating-point numbers**: Decimal numbers, e.g., `3.14`.
- **Strings**: Text, e.g., `"Hello"`.
- **Booleans**: `true` or `false`.
- **Arrays**: Ordered collections of values, e.g., `[1, 2, 3]`.
- **Objects**: Instances of classes.
- **NULL**: Represents a variable with no value.

## Type Conversion

Convert data types using type casting.

```php
<?php
$num = "123";
$intNum = (int)$num; // String to integer
?>
```

## Operators

### Arithmetic Operators

| Operator | Description     | Example  | Result |
|----------|-----------------|----------|--------|
| `+`      | Addition        | `5 + 3`  | `8`    |
| `-`      | Subtraction     | `5 - 3`  | `2`    |
| `*`      | Multiplication  | `5 * 3`  | `15`   |
| `/`      | Division        | `6 / 3`  | `2`    |
| `%`      | Modulus         | `5 % 3`  | `2`    |

### Assignment Operators

| Operator | Description     | Example  | Equivalent To |
|----------|-----------------|----------|---------------|
| `=`      | Assignment      | `$a = 5` | `$a = 5`      |
| `+=`     | Addition        | `$a += 3`| `$a = $a + 3` |
| `-=`     | Subtraction     | `$a -= 3`| `$a = $a - 3` |
| `*=`     | Multiplication  | `$a *= 3`| `$a = $a * 3` |
| `/=`     | Division        | `$a /= 3`| `$a = $a / 3` |

### Comparison Operators

| Operator | Description     | Example    | Result |
|----------|-----------------|------------|--------|
| `==`     | Equal           | `5 == 5`   | `true` |
| `===`    | Identical       | `5 === "5"`| `false`|
| `!=`     | Not equal       | `5 != 3`   | `true` |
| `<>`     | Not equal       | `5 <> 3`   | `true` |
| `!==`    | Not identical   | `5 !== "5"`| `true` |
| `<`      | Less than       | `5 < 3`    | `false`|
| `>`      | Greater than    | `5 > 3`    | `true` |
| `<=`     | Less than or equal | `5 <= 5` | `true` |
| `>=`     | Greater than or equal | `5 >= 3` | `true` |

### Logical Operators

| Operator | Description     | Example    | Result |
|----------|-----------------|------------|--------|
| `&&`     | And             | `true && false` | `false` |
| `\|\|`     | Or              | `true \|\| false` | `true`  |
| `!`      | Not             | `!true`    | `false` |

## Displaying Data

Use `echo` or `print` to display data.

```php
<?php
$message = "Hello, World!";
echo $message; // Outputs: Hello, World!
?>
```

## Comments

Add notes with single-line (`//`) or multi-line (`/* ... */`) comments.

```php
<?php
// Single-line comment

/*
Multi-line comment
*/
?>
```