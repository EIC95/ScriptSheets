# Control Structures

## Introduction
- Control structures determine the **flow of execution** in a C program.

## Conditional Statements

### `if` Statement
- Executes a block **only if** the condition is true.
```c
int num = 10;
if (num > 0) {
    printf("Positive number\n");
}
```

### `if-else` Statement
- Adds an **alternative block** if the condition is false.
```c
int num = -5;
if (num > 0) {
    printf("Positive\n");
} else {
    printf("Not positive\n");
}
```

### `if-else if-else` Statement
- Used for **multiple conditions**.
```c
int num = 0;
if (num > 0) {
    printf("Positive\n");
} else if (num < 0) {
    printf("Negative\n");
} else {
    printf("Zero\n");
}
```

### `switch` Statement
- Used for **multiple fixed cases**.
```c
int day = 3;
switch (day) {
    case 1: printf("Monday\n"); break;
    case 2: printf("Tuesday\n"); break;
    case 3: printf("Wednesday\n"); break;
    default: printf("Invalid day\n");
}
```

## Loops

### `for` Loop
- Runs a block **a fixed number of times**.
```c
for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
}
```

### `while` Loop
- Runs **as long as** the condition is true.
```c
int i = 1;
while (i <= 5) {
    printf("%d ", i);
    i++;
}
```

### `do-while` Loop
- **Always executes at least once**, then repeats if the condition is true.
```c
int i = 1;
do {
    printf("%d ", i);
    i++;
} while (i <= 5);
```

## Jump Statements

### `break`
- **Exits** a loop or `switch` statement immediately.
```c
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    printf("%d ", i);
}
```

### `continue`
- **Skips** the current iteration and continues with the next.
```c
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    printf("%d ", i);
}
```