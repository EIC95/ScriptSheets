# PHP Control Structures

## Conditional Statements

### If Statement

Execute code if a condition is true.

```php
<?php
$age = 20;

if ($age >= 18) {
    echo "You are an adult.";
}
?>
```

### If-Else Statement

Execute code if a condition is true, otherwise execute alternative code.

```php
<?php
$age = 15;

if ($age >= 18) {
    echo "You are an adult.";
} else {
    echo "You are a minor.";
}
?>
```

### Elseif Statement

Check multiple conditions.

```php
<?php
$score = 85;

if ($score >= 90) {
    echo "Grade: A";
} elseif ($score >= 80) {
    echo "Grade: B";
} else {
    echo "Grade: C";
}
?>
```

### Switch Statement

Execute one block of code among many based on a variable's value.

```php
<?php
$day = "Monday";

switch ($day) {
    case "Monday":
        echo "Start of the work week.";
        break;
    case "Friday":
        echo "Last day of the work week.";
        break;
    default:
        echo "Midweek day.";
}
?>
```

## Loops

### While Loop

Execute code while a condition is true.

```php
<?php
$i = 1;

while ($i <= 5) {
    echo "Iteration: $i\n";
    $i++;
}
?>
```

### Do-While Loop

Execute code at least once, then repeat while a condition is true.

```php
<?php
$i = 1;

do {
    echo "Iteration: $i\n";
    $i++;
} while ($i <= 5);
?>
```

### For Loop

Execute code a specific number of times.

```php
<?php
for ($i = 1; $i <= 5; $i++) {
    echo "Iteration: $i\n";
}
?>
```

### Foreach Loop

Iterate over arrays.

```php
<?php
$colors = ["red", "green", "blue"];

foreach ($colors as $color) {
    echo "Color: $color\n";
}
?>
```

## Break and Continue

- `break`: Exit a loop prematurely.
- `continue`: Skip the current iteration and proceed to the next.

```php
<?php
for ($i = 1; $i <= 5; $i++) {
    if ($i == 3) {
        continue; // Skip iteration 3
    }
    if ($i == 5) {
        break; // Exit loop at iteration 5
    }
    echo "Iteration: $i\n";
}
?>
```