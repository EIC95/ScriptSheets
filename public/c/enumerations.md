# Enumerations

## Introduction
- An **enumeration (`enum`)** is a type that assigns names to integer constants.
- Improves code readability.

## Declaration and Usage
```c
#include <stdio.h>

enum Day {SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY};

int main() {
    enum Day today = WEDNESDAY;
    
    if (today == WEDNESDAY) {
        printf("Today is Wednesday!\n");
    }
    
    return 0;
}
```

## Default and Custom Values
- By default, values start at `0` and increment by `1`:
```c
enum Colors {RED, GREEN, BLUE}; // RED = 0, GREEN = 1, BLUE = 2
```
- Custom values:
```c
enum Status {SUCCESS = 1, FAILURE = 0, PENDING = -1};
```

## Usage with `switch`
```c
#include <stdio.h>

enum Status {SUCCESS = 1, FAILURE = 0, PENDING = -1};

int main() {
    enum Status current_status = PENDING;

    switch (current_status) {
        case SUCCESS:
            printf("Operation successful!\n");
            break;
        case FAILURE:
            printf("Operation failed!\n");
            break;
        case PENDING:
            printf("Operation pending...\n");
            break;
    }

    return 0;
}
```
