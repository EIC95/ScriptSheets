# PHP Regular Expressions

## Introduction

Regular expressions (regex) are patterns used to match character combinations in strings. PHP uses the Perl-compatible regex functions for pattern matching.

## Basic Syntax

Regex patterns are defined using delimiters, typically `/`.

```php
<?php
$pattern = "/world/";
$string = "Hello, world!";

if (preg_match($pattern, $string)) {
    echo "Match found!";
}
?>
```

## Common Functions

### `preg_match()`

Check if a pattern matches a string.

```php
<?php
$pattern = "/php/i"; // 'i' flag for case-insensitive
$string = "I love PHP!";

if (preg_match($pattern, $string)) {
    echo "Match found!";
}
?>
```

### `preg_match_all()`

Find all matches of a pattern in a string.

```php
<?php
$pattern = "/a/";
$string = "banana";
$matches = [];

preg_match_all($pattern, $string, $matches);
print_r($matches); // Outputs: Array ( [0] => Array ( [0] => a [1] => a [2] => a ) )
?>
```

### `preg_replace()`

Replace all matches of a pattern with a replacement string.

```php
<?php
$pattern = "/blue/";
$string = "The sky is blue.";
$replacement = "red";

$newString = preg_replace($pattern, $replacement, $string);
echo $newString; // Outputs: The sky is red.
?>
```

## Pattern Modifiers

- `i`: Case-insensitive
- `m`: Multiline (treats the string as multiple lines)
- `s`: Dotall (allows `.` to match newlines)
- `u`: UTF-8 mode

```php
<?php
$pattern = "/php/i"; // Case-insensitive
$string = "I love Php!";

if (preg_match($pattern, $string)) {
    echo "Match found!";
}
?>
```

## Character Classes

- `.`: Any character except newline
- `\d`: Any digit (equivalent to `[0-9]`)
- `\D`: Any non-digit
- `\w`: Any word character (equivalent to `[a-zA-Z0-9_]`)
- `\W`: Any non-word character
- `\s`: Any whitespace character
- `\S`: Any non-whitespace character

```php
<?php
$pattern = "/\d{3}-\d{2}-\d{4}/"; // Match a Social Security Number format
$string = "My SSN is 123-45-6789.";

if (preg_match($pattern, $string)) {
    echo "SSN found!";
}
?>
```

## Anchors

- `^`: Start of a string
- `$`: End of a string

```php
<?php
$pattern = "/^Hello/"; // Match 'Hello' at the start of a string
$string = "Hello, world!";

if (preg_match($pattern, $string)) {
    echo "Match found!";
}
?>
```

## Quantifiers

- `*`: 0 or more
- `+`: 1 or more
- `?`: 0 or 1
- `{n}`: Exactly n times
- `{n,}`: n or more times
- `{n,m}`: Between n and m times

```php
<?php
$pattern = "/a{2,}/"; // Match 'a' two or more times
$string = "baaad";

if (preg_match($pattern, $string)) {
    echo "Match found!";
}
?>
```

## Groups and Backreferences

Use parentheses `()` to group patterns and backreferences `\1`, `\2`, etc.

```php
<?php
$pattern = "/(\d{3})-(\d{2})-(\d{4})/"; // Group SSN parts
$string = "My SSN is 123-45-6789.";
$replacement = "($1) $2-$3";

$newString = preg_replace($pattern, $replacement, $string);
echo $newString; // Outputs: My SSN is (123) 45-6789.
?>
```

## Lookahead and Lookbehind

- `(?=...)`: Positive lookahead
- `(?!...)`: Negative lookahead
- `(?<=...)`: Positive lookbehind
- `(?<!...)`: Negative lookbehind

```php
<?php
$pattern = "/apple(?=s)/"; // Match 'apple' followed by 's'
$string = "I have apples.";

if (preg_match($pattern, $string)) {
    echo "Match found!";
}
?>
```