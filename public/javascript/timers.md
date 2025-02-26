# JavaScript Timers

## Introduction
JavaScript provides built-in timer functions to execute code after a specified delay or repeatedly at specified intervals.

## `setTimeout()` - Delayed Execution
The `setTimeout()` function executes a function after a specified delay (in milliseconds).

### Syntax:
```js
setTimeout(function, delay, param1, param2, ...);
```

### Example:
```js
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);
```

### Clearing a Timeout
You can cancel a timeout using `clearTimeout()`.
```js
const timeoutId = setTimeout(() => {
    console.log("This will not be logged");
}, 5000);
clearTimeout(timeoutId);
```

## `setInterval()` - Repeated Execution
The `setInterval()` function executes a function repeatedly at a specified interval (in milliseconds).

### Syntax:
```js
setInterval(function, interval, param1, param2, ...);
```

### Example:
```js
const intervalId = setInterval(() => {
    console.log("This logs every 3 seconds");
}, 3000);
```

### Clearing an Interval
You can cancel an interval using `clearInterval()`.
```js
clearInterval(intervalId);
```

## Using Timers in Practice
### Creating a Countdown Timer
```js
let count = 5;
const countdown = setInterval(() => {
    console.log(count);
    count--;
    if (count < 0) {
        clearInterval(countdown);
        console.log("Time's up!");
    }
}, 1000);
```
