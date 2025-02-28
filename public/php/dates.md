# PHP Dates

## Introduction

PHP provides various functions to work with dates and times. The `DateTime` class is particularly useful for date manipulation.

## Current Date and Time

Use `date()` to get the current date and time.

```php
<?php
echo date("Y-m-d H:i:s"); // Outputs: 2023-10-01 14:30:00
?>
```

## Formatting Dates

Format dates using format characters in `date()`.

- `Y`: Four-digit year
- `m`: Numeric month (with leading zeros)
- `d`: Day of the month (with leading zeros)
- `H`: 24-hour format of an hour (with leading zeros)
- `i`: Minutes (with leading zeros)
- `s`: Seconds (with leading zeros)

```php
<?php
echo date("F j, Y"); // Outputs: October 1, 2023
?>
```

## DateTime Class

Create and manipulate dates using the `DateTime` class.

```php
<?php
$date = new DateTime();
echo $date->format("Y-m-d H:i:s"); // Outputs: 2023-10-01 14:30:00
?>
```

## Modifying Dates

Use `modify()` to change the date.

```php
<?php
$date = new DateTime();
$date->modify("+1 day");
echo $date->format("Y-m-d"); // Outputs: 2023-10-02
?>
```

## Date Intervals

Add or subtract intervals using `DateInterval`.

```php
<?php
$date = new DateTime();
$interval = new DateInterval("P1D"); // 1 day
$date->add($interval);
echo $date->format("Y-m-d"); // Outputs: 2023-10-02
?>
```

## Comparing Dates

Compare two dates to determine which is earlier or later.

```php
<?php
$date1 = new DateTime("2023-10-01");
$date2 = new DateTime("2023-10-02");

if ($date1 < $date2) {
    echo "Date1 is earlier than Date2.";
}
?>
```

## Time Zones

Set and get time zones using `DateTimeZone`.

```php
<?php
$date = new DateTime();
$timezone = new DateTimeZone("America/New_York");
$date->setTimezone($timezone);
echo $date->format("Y-m-d H:i:s"); // Outputs: 2023-10-01 09:30:00
?>
```

## Parsing Dates

Convert strings to dates using `DateTime::createFromFormat()`.

```php
<?php
$dateString = "2023-10-01 14:30:00";
$date = DateTime::createFromFormat("Y-m-d H:i:s", $dateString);
echo $date->format("F j, Y"); // Outputs: October 1, 2023
?>
```

## Unix Timestamp

Get the Unix timestamp with `time()`.

```php
<?php
echo time(); // Outputs: 1696152600
?>
```

## Strtotime Function

Convert English textual datetime descriptions to Unix timestamps.

```php
<?php
echo strtotime("now"), "\n"; // Outputs: 1696152600
echo strtotime("10 September 2023"), "\n"; // Outputs: 1694304000
echo strtotime("+1 day"), "\n"; // Outputs: 1696239000
?>
```