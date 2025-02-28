# Control Structures

## Introduction
Control structures in Java determine the flow of program execution. They include conditional statements and loops, allowing developers to make decisions and repeat actions efficiently.

## Conditional Statements
Conditional statements execute different code blocks based on conditions.

### if Statement
```java
int number = 10;
if (number > 0) {
    System.out.println("The number is positive.");
}
```

### if-else Statement
```java
int number = -5;
if (number > 0) {
    System.out.println("Positive number");
} else {
    System.out.println("Negative number");
}
```

### if-else if-else Statement
```java
int number = 0;
if (number > 0) {
    System.out.println("Positive number");
} else if (number < 0) {
    System.out.println("Negative number");
} else {
    System.out.println("Zero");
}
```

### Switch Statement
The `switch` statement selects one of many blocks of code to execute based on a variable's value.

```java
int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Invalid day");
}
```

## Looping Statements
Loops allow the execution of a block of code multiple times.

### for Loop
```java
for (int i = 1; i <= 5; i++) {
    System.out.println("Iteration: " + i);
}
```

### while Loop
```java
int i = 1;
while (i <= 5) {
    System.out.println("Iteration: " + i);
    i++;
}
```

### do-while Loop
```java
int i = 1;
do {
    System.out.println("Iteration: " + i);
    i++;
} while (i <= 5);
```

## Break and Continue Statements

### Break Statement
Exits a loop when a certain condition is met.
```java
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    System.out.println(i);
}
```

### Continue Statement
Skips the current iteration and moves to the next one.
```java
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    System.out.println(i);
}
```

