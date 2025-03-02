# Dates

## Introduction

Python provides the `datetime` module to work with dates and times. This module allows for date manipulation, formatting, and calculations.

## Getting the Current Date and Time

You can retrieve the current date and time using `datetime.now()`.

```python
from datetime import datetime

now = datetime.now()
print(now)  # Output: 2025-03-01 14:30:45.123456 (example)
```

## Formatting Dates

The `strftime` method allows formatting a date into a readable string.

```python
formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")
print(formatted_date)  # Output: 2025-03-01 14:30:45
```

| Format Code | Description            | Example |
|-------------|------------------------|---------|
| `%Y`        | Full year (4 digits)   | 2025    |
| `%m`        | Month (01-12)          | 03      |
| `%d`        | Day of the month (01-31) | 01    |
| `%H`        | Hour (00-23)           | 14      |
| `%M`        | Minute (00-59)         | 30      |
| `%S`        | Second (00-59)         | 45      |

## Creating a Specific Date

You can create a date object using `datetime`.

```python
specific_date = datetime(2024, 12, 25, 10, 30)
print(specific_date)  # Output: 2024-12-25 10:30:00
```

## Working with Time Differences

You can calculate time differences using `timedelta`.

```python
from datetime import timedelta

future_date = now + timedelta(days=10)
print(future_date)  # Output: Current date + 10 days
```

## Converting Strings to Dates

You can parse a date string into a `datetime` object using `strptime`.

```python
date_string = "2025-03-01 14:30:45"
parsed_date = datetime.strptime(date_string, "%Y-%m-%d %H:%M:%S")
print(parsed_date)
```
