# Dictionaries

## Introduction

Dictionaries in Python are unordered collections of key-value pairs. They allow for fast lookups and are widely used to store structured data.

## Creating a Dictionary

A dictionary is created using curly braces `{}` with key-value pairs separated by colons `:`.

```python
my_dict = {"name": "Alice", "age": 25, "city": "New York"}
print(my_dict)  # Output: {'name': 'Alice', 'age': 25, 'city': 'New York'}
```

You can also use the `dict()` constructor:

```python
my_dict = dict(name="Alice", age=25, city="New York")
```

## Accessing Values

You can access values using their keys.

```python
print(my_dict["name"])  # Output: Alice
```

Use `.get()` to avoid errors if the key does not exist:

```python
print(my_dict.get("country", "Not Found"))  # Output: Not Found
```

## Modifying a Dictionary

You can update values, add new key-value pairs, or remove elements.

```python
my_dict["age"] = 26  # Update value
my_dict["country"] = "USA"  # Add new key-value pair
print(my_dict)  # Output: {'name': 'Alice', 'age': 26, 'city': 'New York', 'country': 'USA'}
```

## Removing Elements

| Operation          | Description                                      | Example |
|-------------------|------------------------------------------------|---------|
| `del dict[key]`   | Deletes a key-value pair                     | `del my_dict["city"]` |
| `dict.pop(key)`   | Removes key and returns value                 | `age = my_dict.pop("age")` |
| `dict.clear()`    | Removes all key-value pairs                   | `my_dict.clear()` |

## Dictionary Methods

| Method                  | Description                                      | Example |
|-------------------------|--------------------------------------------------|---------|
| `dict.keys()`           | Returns all keys                                | `my_dict.keys()` |
| `dict.values()`         | Returns all values                              | `my_dict.values()` |
| `dict.items()`          | Returns key-value pairs as tuples               | `my_dict.items()` |
| `dict.update(other_dict)` | Merges another dictionary into the current one | `my_dict.update({"gender": "female"})` |

## Iterating Over a Dictionary

You can loop through keys, values, or key-value pairs.

```python
for key in my_dict:
    print(key, "->", my_dict[key])
```

Using `.items()` to get both keys and values:

```python
for key, value in my_dict.items():
    print(f"{key}: {value}")
```
