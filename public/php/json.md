# JSON in PHP

## Introduction
JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy to read and write for both humans and machines. PHP provides built-in functions to encode and decode JSON data.

## Encoding Data to JSON
Use `json_encode()` to convert PHP arrays and objects into JSON format.

### Convert an Associative Array to JSON
```php
$data = [
    "name" => "John",
    "age" => 30,
    "city" => "New York"
];
$json = json_encode($data);
echo $json;
```
**Output:**
```json
{"name":"John","age":30,"city":"New York"}
```

### Convert an Indexed Array to JSON
```php
$data = ["Apple", "Banana", "Cherry"];
$json = json_encode($data);
echo $json;
```
**Output:**
```json
["Apple","Banana","Cherry"]
```

### Convert an Object to JSON
```php
class Person {
    public $name;
    public $age;
    public $city;
}

$person = new Person();
$person->name = "Alice";
$person->age = 25;
$person->city = "London";

$json = json_encode($person);
echo $json;
```

## Decoding JSON Data
Use `json_decode()` to convert JSON data back to PHP objects or arrays.

### Convert JSON to an Associative Array
```php
$json = '{"name":"John","age":30,"city":"New York"}';
$data = json_decode($json, true);
print_r($data);
```

### Convert JSON to an Object
```php
$json = '{"name":"Alice","age":25,"city":"London"}';
$data = json_decode($json);
echo $data->name; // Output: Alice
```

## Handling JSON Errors
Use `json_last_error()` and `json_last_error_msg()` to detect errors in encoding or decoding.

```php
$json = "{name:John, age:30, city:New York}"; // Invalid JSON
$data = json_decode($json);

if (json_last_error() !== JSON_ERROR_NONE) {
    echo "JSON Error: " . json_last_error_msg();
}
```

## Working with External JSON Data
You can fetch and parse JSON from APIs using `file_get_contents()`.

```php
$url = "https://api.example.com/data";
$json = file_get_contents($url);
$data = json_decode($json, true);
print_r($data);
```

## Formatting JSON Output
Use `JSON_PRETTY_PRINT` for a more readable output.

```php
$data = ["name" => "John", "age" => 30, "city" => "New York"];
echo json_encode($data, JSON_PRETTY_PRINT);
```
**Output:**
```json
{
    "name": "John",
    "age": 30,
    "city": "New York"
}
```

