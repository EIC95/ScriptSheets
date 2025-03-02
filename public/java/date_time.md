# Date & Time

## Introduction
Java provides the `java.time` package to work with date and time. It includes classes for representing dates, times, durations, and formatting.

## Importing Date & Time Classes
Before using date and time functionality, import the necessary classes:

```java
import java.time.*;
import java.time.format.DateTimeFormatter;
```

## Working with LocalDate
The `LocalDate` class represents a date without time.

```java
LocalDate today = LocalDate.now();
System.out.println("Today's Date: " + today);
```

### Custom Date
A specific date can be created using `of()`:

```java
LocalDate customDate = LocalDate.of(2023, 5, 10);
System.out.println("Custom Date: " + customDate);
```

## Working with LocalTime
The `LocalTime` class represents time without a date.

```java
LocalTime now = LocalTime.now();
System.out.println("Current Time: " + now);
```

### Custom Time
A specific time can be created using `of()`:

```java
LocalTime customTime = LocalTime.of(14, 30, 0);
System.out.println("Custom Time: " + customTime);
```

## Working with LocalDateTime
The `LocalDateTime` class represents both date and time.

```java
LocalDateTime current = LocalDateTime.now();
System.out.println("Current Date and Time: " + current);
```

### Formatting Date and Time
The `DateTimeFormatter` class allows formatting date and time.

```java
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
String formattedDateTime = current.format(formatter);
System.out.println("Formatted Date and Time: " + formattedDateTime);
```

## Working with ZonedDateTime
The `ZonedDateTime` class includes time zones.

```java
ZonedDateTime zonedNow = ZonedDateTime.now();
System.out.println("Current Date and Time with Zone: " + zonedNow);
```

### Convert to a Specific Time Zone

```java
ZonedDateTime parisTime = ZonedDateTime.now(ZoneId.of("Europe/Paris"));
System.out.println("Paris Time: " + parisTime);
```

## Measuring Duration
The `Duration` class measures time intervals.

```java
LocalTime start = LocalTime.of(10, 0);
LocalTime end = LocalTime.of(12, 30);
Duration duration = Duration.between(start, end);
System.out.println("Duration in minutes: " + duration.toMinutes());
```

## Measuring Period
The `Period` class measures date intervals.

```java
LocalDate startDate = LocalDate.of(2022, 1, 1);
LocalDate endDate = LocalDate.of(2023, 1, 1);
Period period = Period.between(startDate, endDate);
System.out.println("Period in years: " + period.getYears());
```

