# Strings

## Introduction

Strings in Python are sequences of characters enclosed in either single (`'`), double (`"`), or triple (`'''` or """") quotes. They are immutable, meaning their contents cannot be changed after creation.

## Creating Strings

```python
single_quote = 'Hello'
double_quote = "World"
triple_quote = '''This is a
multiline string'''
```

## String Concatenation

You can concatenate (combine) strings using the `+` operator:

```python
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
print(full_name)  # Output: John Doe
```

## String Repetition

Use `*` to repeat a string multiple times:

```python
text = "Hello " * 3
print(text)  # Output: Hello Hello Hello
```

## Accessing Characters

Strings are indexed, starting from `0`. You can access characters using square brackets:

```python
greeting = "Hello"
print(greeting[0])  # Output: H
print(greeting[-1]) # Output: o (last character)
```

## String Slicing

Extract substrings using slicing (`[start:end:step]`):

```python
text = "Hello, World!"
print(text[0:5])   # Output: Hello
print(text[:5])    # Output: Hello (same as above)
print(text[7:])    # Output: World!
print(text[::-1])  # Output: !dlroW ,olleH (reverse string)
```

## String Length

Use `len()` to get the length of a string:

```python
text = "Python"
print(len(text))  # Output: 6
```

## String Methods

| Method            | Description |
|------------------|-------------|
| `upper()`        | Converts to uppercase |
| `lower()`        | Converts to lowercase |
| `strip()`        | Removes whitespace from the start and end |
| `replace(a, b)`  | Replaces substring `a` with `b` |
| `split(sep)`     | Splits a string into a list based on `sep` |
| `join(iterable)` | Joins elements of an iterable into a string |
| `find(sub)`      | Finds the first occurrence of `sub` |
| `count(sub)`     | Counts occurrences of `sub` in string |

Example:

```python
text = "  Hello World  "
print(text.upper())  # Output: "  HELLO WORLD  "
print(text.strip())  # Output: "Hello World"
print(text.replace("World", "Python"))  # Output: "  Hello Python  "
```

## String Formatting

### Using f-strings (Python 3.6+)

```python
name = "Alice"
age = 30
print(f"My name is {name} and I am {age} years old.")
```

### Using `format()`

```python
print("My name is {} and I am {} years old.".format(name, age))
```

### Using `%` Operator (Old Method)

```python
print("My name is %s and I am %d years old." % (name, age))
```

