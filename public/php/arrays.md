# PHP Arrays

## Introduction

Arrays store multiple values in a single variable. PHP supports three types of arrays: indexed, associative, and multidimensional.

## Indexed Arrays

Use numeric indices to access elements.

```php
<?php
$fruits = ["apple", "banana", "cherry"];
echo $fruits[0]; // Outputs: apple
?>
```

## Associative Arrays

Use named keys to access elements.

```php
<?php
$person = [
    "first_name" => "John",
    "last_name" => "Doe",
    "age" => 30
];
echo $person["first_name"]; // Outputs: John
?>
```

## Multidimensional Arrays

Arrays containing other arrays.

```php
<?php
$matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
echo $matrix[1][2]; // Outputs: 6
?>
```

## Array Functions

PHP provides various functions to manipulate arrays.

- `count()`: Count the number of elements.
- `array_values()`: Return all values.
- `array_keys()`: Return all keys.
- `array_merge()`: Merge arrays.
- `array_push()`: Add elements to the end.
- `array_pop()`: Remove the last element.

```php
<?php
$numbers = [1, 2, 3];
echo count($numbers); // Outputs: 3

array_push($numbers, 4);
print_r($numbers); // Outputs: [1, 2, 3, 4]
?>
```

## Looping Through Arrays

Use loops to iterate over array elements.

```php
<?php
$colors = ["red", "green", "blue"];

foreach ($colors as $color) {
    echo "Color: $color\n";
}
?>
```

## Sorting Arrays

- `sort()`: Sort in ascending order.
- `rsort()`: Sort in descending order.
- `asort()`: Sort associative arrays by value.
- `ksort()`: Sort associative arrays by key.

```php
<?php
$numbers = [3, 1, 4, 2];
sort($numbers);
print_r($numbers); // Outputs: [1, 2, 3, 4]
?>
```

## Array Destructuring

Extract array values into variables.

```php
<?php
$fruits = ["apple", "banana", "cherry"];
list($a, $b, $c) = $fruits;
echo $a; // Outputs: apple
?>
```

## Checking if an Array

Use `is_array()` to check if a variable is an array.

```php
<?php
$array = [1, 2, 3];
echo is_array($array); // Outputs: 1 (true)
?>
```

## Array Searching

Use `in_array()` to check if a value exists in an array.

```php
<?php
$fruits = ["apple", "banana", "cherry"];
echo in_array("banana", $fruits); // Outputs: 1 (true)
?>
```

## Array Mapping

Use `array_map()` to apply a function to each element.

```php
<?php
$numbers = [1, 2, 3];
$squared = array_map(function($n) {
    return $n * $n;
}, $numbers);
print_r($squared); // Outputs: [1, 4, 9]
?>
```