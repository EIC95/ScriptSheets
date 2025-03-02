# Regular Expressions (Regex)

## Introduction

Regular expressions (regex) are powerful tools for pattern matching in text. Python provides the `re` module to work with regex.

## Importing the `re` Module

To use regex in Python, you need to import the `re` module:

```python
import re
```

## Searching for a Pattern

The `re.search()` function searches for a pattern in a string.

```python
text = "Hello, my name is Alice."
match = re.search(r"Alice", text)
if match:
    print("Match found!")  # Output: Match found!
```

## Finding All Matches

Use `re.findall()` to return all occurrences of a pattern.

```python
text = "The rain in Spain falls mainly in the plain."
matches = re.findall(r"ain", text)
print(matches)  # Output: ['ain', 'ain', 'ain']
```

## Using `re.sub()` to Replace Text

The `re.sub()` function replaces occurrences of a pattern with a new string.

```python
text = "I like cats."
new_text = re.sub(r"cats", "dogs", text)
print(new_text)  # Output: I like dogs.
```

## Common Regex Patterns

| Pattern   | Description                     | Example Matches |
|-----------|---------------------------------|-----------------|
| `\d`      | Any digit (0-9)                 | "7", "4"        |
| `\D`      | Any non-digit character         | "A", "?"        |
| `\w`      | Any alphanumeric character      | "a", "9", "_"   |
| `\W`      | Any non-alphanumeric character  | "#", "@"        |
| `\s`      | Any whitespace                  | " " (space)     |
| `\S`      | Any non-whitespace character    | "a", "1", "@"   |
| `^`       | Start of a string               | "^Hello"        |
| `$`       | End of a string                 | "world$"        |
| `.*`      | Any character (0 or more times) | "abc", "123"    |

## Using Groups in Regex

You can capture groups using parentheses `()`.

```python
text = "My email is example@email.com"
match = re.search(r"(\w+)@(\w+\.\w+)", text)
if match:
    print(match.group(0))  # Output: example@email.com
    print(match.group(1))  # Output: example
    print(match.group(2))  # Output: email.com
```
