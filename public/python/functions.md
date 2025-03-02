# Functions

## Introduction

Functions in Python allow you to encapsulate reusable pieces of code. They help in organizing code, improving readability, and reducing repetition.

## Defining a Function

A function is defined using the `def` keyword, followed by its name and parentheses `()`. The function body is indented.

```python
def greet():
    print("Hello, world!")

greet()  # Output: Hello, world!
```

## Parameters and Arguments

Functions can take parameters to make them more flexible.

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Output: Hello, Alice!
```

### Default Parameters

You can set default values for parameters.

```python
def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()  # Output: Hello, Guest!
```

## Return Values

Functions can return values using the `return` statement.

```python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # Output: 8
```

## Variable-Length Arguments

### `*args` (Multiple Positional Arguments)

Allows a function to accept any number of positional arguments.

```python
def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3, 4))  # Output: 10
```

### `**kwargs` (Multiple Keyword Arguments)

Allows a function to accept any number of keyword arguments.

```python
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="New York")
```

## Lambda Functions

Lambda functions are anonymous functions that are defined using the `lambda` keyword.

```python
square = lambda x: x ** 2
print(square(5))  # Output: 25
```

## Scope and Lifetime of Variables

| Scope Type | Description |
|------------|-------------|
| Local Scope | Variables declared inside a function (accessible only within that function) |
| Global Scope | Variables declared outside all functions (accessible throughout the script) |
| Enclosing Scope | Variables from an outer function accessible in an inner function |
| Built-in Scope | Python’s built-in names (e.g., `print`, `len`) |

Example of local and global scope:

```python
x = 10  # Global variable

def my_function():
    x = 5  # Local variable
    print(x)

my_function()  # Output: 5
print(x)  # Output: 10
```
