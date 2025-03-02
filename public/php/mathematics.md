# PHP Mathematics

## Basic Operations

PHP supports basic arithmetic operations using operators.

```php
<?php
$a = 10;
$b = 3;

$sum = $a + $b; // 13
$difference = $a - $b; // 7
$product = $a * $b; // 30
$quotient = $a / $b; // 3.3333
$modulus = $a % $b; // 1
?>
```

## Mathematical Functions

PHP provides various built-in functions for mathematical operations.

- `abs()`: Absolute value
- `ceil()`: Round up to the nearest integer
- `floor()`: Round down to the nearest integer
- `round()`: Round to the nearest integer
- `max()`: Find the highest value
- `min()`: Find the lowest value
- `pow()`: Exponentiation
- `sqrt()`: Square root

```php
<?php
$number = -5.7;

echo abs($number); // Outputs: 5.7
echo ceil($number); // Outputs: -5
echo floor($number); // Outputs: -6
echo round($number); // Outputs: -6

$values = [1, 3, 5, 7];
echo max($values); // Outputs: 7
echo min($values); // Outputs: 1

echo pow(2, 3); // Outputs: 8
echo sqrt(16); // Outputs: 4
?>
```

## Random Numbers

Generate random numbers using `rand()` or `mt_rand()`.

```php
<?php
echo rand(); // Random integer
echo rand(1, 10); // Random integer between 1 and 10
echo mt_rand(1, 10); // Better random integer between 1 and 10
?>
```

## Constants

PHP defines mathematical constants like `M_PI` for π (pi).

```php
<?php
echo M_PI; // Outputs: 3.1415926535898
?>
```

## Increment and Decrement

Use `++` and `--` to increment or decrement values.

```php
<?php
$counter = 5;
$counter++; // 6
$counter--; // 5
?>
```

## Trigonometric Functions

PHP supports trigonometric functions like `sin()`, `cos()`, and `tan()`.

```php
<?php
$angle = 90;
echo sin(deg2rad($angle)); // Outputs: 1
echo cos(deg2rad($angle)); // Outputs: 0
echo tan(deg2rad($angle)); // Outputs: 1.633123935319537E+16
?>
```