# Sets

## Introduction

Sets in Python are unordered collections of unique elements. They do not allow duplicate values and provide efficient operations for mathematical set operations like union, intersection, and difference.

## Creating a Set

A set is created using curly braces `{}` or the `set()` function.

```python
my_set = {1, 2, 3, "apple", True}
print(my_set)  # Output: {1, 2, 3, 'apple'}

empty_set = set()  # Creates an empty set (not `{}` which creates an empty dictionary)
```

## Accessing Elements

Since sets are unordered, elements cannot be accessed via an index. Instead, you can iterate through the set using a loop.

```python
for item in my_set:
    print(item)
```

## Set Operations

Python provides various operations for handling sets.

| Operation          | Description                                      | Example |
|-------------------|------------------------------------------------|---------|
| `len(set)`       | Returns the number of elements in a set        | `len(my_set)` → `4` |
| `set.add(x)`     | Adds an element to the set                     | `my_set.add("banana")` |
| `set.remove(x)`  | Removes an element (raises error if not found) | `my_set.remove(2)` |
| `set.discard(x)` | Removes an element (no error if not found)     | `my_set.discard(99)` |
| `set.pop()`      | Removes and returns a random element           | `my_set.pop()` |
| `set.clear()`    | Removes all elements from the set              | `my_set.clear()` |
| `set.copy()`     | Returns a shallow copy of the set              | `new_set = my_set.copy()` |

## Set Operations (Mathematical)

Sets support mathematical operations like union, intersection, and difference.

| Operation               | Description                                  | Example |
|------------------------|----------------------------------------------|---------|
| `set1 | set2`         | Union: Combines all elements from both sets | `{1, 2} | {2, 3}` → `{1, 2, 3}` |
| `set1 & set2`         | Intersection: Common elements                | `{1, 2} & {2, 3}` → `{2}` |
| `set1 - set2`         | Difference: Elements in `set1` not in `set2` | `{1, 2} - {2, 3}` → `{1}` |
| `set1 ^ set2`         | Symmetric Difference: Elements in either but not both | `{1, 2} ^ {2, 3}` → `{1, 3}` |

## Checking Membership

Use the `in` keyword to check if an element exists in a set.

```python
print("apple" in my_set)  # Output: True
print("banana" in my_set)  # Output: False
```

## Iterating Over a Set

You can use a `for` loop to iterate over the elements of a set.

```python
for item in my_set:
    print(item)
```
