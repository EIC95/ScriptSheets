# Basics

## Introduction

Python is a high-level, interpreted programming language known for its simplicity and readability. It is widely used for web development, data science, automation, and more.

## Syntax

Python uses indentation to define blocks of code:

```python
if True:
    print("Hello, World!")  # Indented block
```

## Comments

Use `#` for single-line comments and `"""` or `'''` for multi-line comments:

```python
# This is a single-line comment
"""
This is a 
multi-line comment
"""
```

## Printing Output

Use the `print()` function to display output:

```python
print("Hello, World!")
```

## Variables

Python variables are dynamically typed:

```python
name = "Alice"  # String
age = 25        # Integer
height = 5.8    # Float
is_student = True  # Boolean
```

## Taking User Input

Use `input()` to get user input:

```python
name = input("Enter your name: ")
print("Hello, " + name)
```

## Data Types

Python has several built-in data types:

- `int` (integer)
- `float` (decimal number)
- `str` (string)
- `bool` (True/False)

## Type Checking and Conversion

Check type with `type()`, convert types using `int()`, `float()`, `str()`, etc.:

```python
num = "10"
print(type(num))  # <class 'str'>
num = int(num)  # Convert to integer
print(type(num))  # <class 'int'>
```

## Operators

### Arithmetic Operators

| Operator | Description         | Example  |
|----------|---------------------|----------|
| `+`      | Addition            | `a + b`  |
| `-`      | Subtraction         | `a - b`  |
| `*`      | Multiplication      | `a * b`  |
| `/`      | Division            | `a / b`  |
| `//`     | Floor Division      | `a // b` |
| `%`      | Modulus             | `a % b`  |
| `**`     | Exponentiation      | `a ** b` |

### Comparison Operators

| Operator | Description                     | Example  |
|----------|---------------------------------|----------|
| `==`     | Equal to                        | `a == b` |
| `!=`     | Not equal to                    | `a != b` |
| `>`      | Greater than                    | `a > b`  |
| `<`      | Less than                       | `a < b`  |
| `>=`     | Greater than or equal to        | `a >= b` |
| `<=`     | Less than or equal to           | `a <= b` |

### Logical Operators

| Operator | Description                                | Example     |
|----------|--------------------------------------------|-------------|
| `and`    | Returns True if both statements are true  | `a and b`   |
| `or`     | Returns True if at least one is true      | `a or b`    |
| `not`    | Reverses the result                      | `not a`     |

Example:

```python
x = True
y = False
print(x and y)  # False
print(x or y)   # True
print(not x)    # False
```