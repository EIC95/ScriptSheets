# JSON

## Introduction

JSON (JavaScript Object Notation) is a lightweight data format used for data exchange between a client and a server. Python provides the built-in `json` module to work with JSON data.

## Converting Python Data to JSON

The `json.dumps()` method converts a Python dictionary into a JSON string.

```python
import json

person = {"name": "Alice", "age": 25, "city": "New York"}
json_string = json.dumps(person)
print(json_string)  # Output: '{"name": "Alice", "age": 25, "city": "New York"}'
```

## Converting JSON to Python Data

The `json.loads()` method converts a JSON string into a Python dictionary.

```python
json_data = '{"name": "Alice", "age": 25, "city": "New York"}'
parsed_data = json.loads(json_data)
print(parsed_data["name"])  # Output: Alice
```

## Reading JSON from a File

You can load JSON data from a file using `json.load()`.

```python
with open("data.json", "r") as file:
    data = json.load(file)
    print(data)
```

## Writing JSON to a File

To save Python data as a JSON file, use `json.dump()`.

```python
person = {"name": "Alice", "age": 25, "city": "New York"}

with open("data.json", "w") as file:
    json.dump(person, file, indent=4)
```

## Formatting JSON Output

You can make JSON more readable using `indent` and `sort_keys`.

```python
formatted_json = json.dumps(person, indent=4, sort_keys=True)
print(formatted_json)
```
