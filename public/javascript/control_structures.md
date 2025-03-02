# JavaScript Control Structures

## Introduction
Control structures in JavaScript allow you to dictate the flow of execution in a program. These include conditional statements and loops that help manage decision-making and repetitive tasks.

## Conditional Statements
Conditional statements execute different blocks of code based on certain conditions.

### If Statement
Executes a block of code if a specified condition is `true`.
```js
let num = 10;
if (num > 5) {
    console.log("Number is greater than 5");
}
```

### If-Else Statement
Executes a block of code if the condition is `true`, otherwise executes another block.
```js
let age = 18;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
```

### Else If Statement
Allows checking multiple conditions sequentially.
```js
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C or lower");
}
```

### Switch Statement
Used to select one of many code blocks to execute.
```js
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend is near");
        break;
    default:
        console.log("Regular day");
}
```

## Loops
Loops allow executing a block of code multiple times.

### For Loop
Executes a block of code a fixed number of times.
```js
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}
```

### While Loop
Executes a block of code as long as a condition is `true`.
```js
let count = 0;
while (count < 5) {
    console.log("Count: " + count);
    count++;
}
```

### Do-While Loop
Executes the block of code at least once, then repeats while the condition is `true`.
```js
let num = 0;
do {
    console.log("Number: " + num);
    num++;
} while (num < 5);
```

## Break and Continue
### Break Statement
Exits the loop immediately when encountered.
```js
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}
```

### Continue Statement
Skips the current iteration and moves to the next one.
```js
for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    console.log(i);
}
```
