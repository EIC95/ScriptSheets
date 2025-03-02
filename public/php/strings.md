# Strings

## Introduction

Strings are sequences of characters used to represent text. In PHP, strings can be defined using single quotes (`'`) or double quotes (`"`).

## Defining Strings

### Single Quotes

Strings defined with single quotes are taken literally, meaning variables and escape sequences are not parsed.

```php
<?php
$name = 'John';
$greeting = 'Hello, $name!'; // Outputs: Hello, $name!
?>
```

### Double Quotes

Strings defined with double quotes parse variables and most escape sequences.

```php
<?php
$name = "John";
$greeting = "Hello, $name!"; // Outputs: Hello, John!
?>
```

## String Concatenation

Combine strings using the dot (`.`) operator.

```php
<?php
$firstName = "John";
$lastName = "Doe";
$fullName = $firstName . " " . $lastName; // Outputs: John Doe
?>
```

## Escape Sequences

Use backslashes (`\`) to escape special characters within double-quoted strings.

- `\n`: Newline
- `\t`: Tab
- `\\`: Backslash
- `\"`: Double quote

```php
<?php
$text = "Hello,\nWorld!"; // Outputs: Hello,
                          //          World!
?>
```

## String Functions

PHP provides various functions to manipulate strings.

- `strlen()`: Get the length of a string.
- `strpos()`: Find the position of a substring.
- `str_replace()`: Replace all occurrences of a search string with a replacement string.

```php
<?php
$text = "Hello, World!";
echo strlen($text); // Outputs: 13
echo strpos($text, "World"); // Outputs: 7
echo str_replace("World", "PHP", $text); // Outputs: Hello, PHP!
?>
```

## Multiline Strings

Use `heredoc` or `nowdoc` syntax for multiline strings.

### Heredoc

Parses variables and escape sequences.

```php
<?php
$name = "John";
$greeting = <<<EOD
Hello, $name!
Welcome to PHP.
EOD;
?>
```

### Nowdoc

Does not parse variables or escape sequences.

```php
<?php
$greeting = <<<'EOD'
Hello, $name!
Welcome to PHP.
EOD;
?>
```
