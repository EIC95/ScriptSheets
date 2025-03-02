# JavaScript Date Manipulation

## Introduction
JavaScript provides the `Date` object to work with dates and times. It allows creating, formatting, and manipulating date and time values.

## Creating Date Objects
### Using `new Date()`
```js
const now = new Date();
console.log(now); // Output: Current date and time
```

### Creating a Specific Date
```js
const specificDate = new Date(2023, 11, 25); // Month is zero-based (0 = January, 11 = December)
console.log(specificDate);
```

### Using a Date String
```js
const dateFromString = new Date("2023-12-25T12:00:00");
console.log(dateFromString);
```

### Timestamp (Milliseconds Since Jan 1, 1970)
```js
const timestamp = Date.now();
console.log(timestamp); // Output: Current timestamp in milliseconds
```

## Getting Date Components
| Method | Description |
|--------|-------------|
| `getFullYear()` | Gets the year |
| `getMonth()` | Gets the month (0-11) |
| `getDate()` | Gets the day of the month (1-31) |
| `getDay()` | Gets the day of the week (0 = Sunday, 6 = Saturday) |
| `getHours()` | Gets the hour (0-23) |
| `getMinutes()` | Gets the minutes (0-59) |
| `getSeconds()` | Gets the seconds (0-59) |
| `getMilliseconds()` | Gets the milliseconds (0-999) |

Example:
```js
const date = new Date();
console.log(date.getFullYear()); // Output: 2024
console.log(date.getMonth()); // Output: 1 (February)
console.log(date.getDate()); // Output: 26
```

## Setting Date Components
```js
const date = new Date();
date.setFullYear(2025);
date.setMonth(5);
date.setDate(15);
console.log(date);
```

## Formatting Dates
```js
const date = new Date();
console.log(date.toDateString()); // Example: "Tue Feb 26 2025"
console.log(date.toISOString()); // Example: "2025-02-26T12:00:00.000Z"
console.log(date.toLocaleDateString()); // Example: "2/26/2025"
```

## Date Calculations
### Adding Days
```js
const date = new Date();
date.setDate(date.getDate() + 5);
console.log(date);
```

### Difference Between Dates
```js
const date1 = new Date("2025-01-01");
const date2 = new Date("2025-02-01");
const difference = date2 - date1; // Difference in milliseconds
console.log(difference / (1000 * 60 * 60 * 24)); // Convert to days
```
