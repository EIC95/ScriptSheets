# Control Structures in C++

## Conditional Statements  

### `if`, `else if`, `else`  
The `if` statement allows conditional execution of code.

```cpp
#include <iostream>

int main() {
    int number = 10;

    if (number > 0) {
        std::cout << "Positive number" << std::endl;
    } else if (number < 0) {
        std::cout << "Negative number" << std::endl;
    } else {
        std::cout << "Zero" << std::endl;
    }

    return 0;
}
```

### Ternary Operator
The ternary operator `condition ? value1 : value2` provides a shorthand for simple `if-else`.

```cpp
#include <iostream>

int main() {
    int a = 5, b = 10;
    int max = (a > b) ? a : b;

    std::cout << "Maximum: " << max << std::endl;

    return 0;
}
```

### `switch` Statement
The `switch` statement is used when multiple conditions are checked against the same variable.

```cpp
#include <iostream>

int main() {
    int day = 3;

    switch (day) {
        case 1:
            std::cout << "Monday" << std::endl;
            break;
        case 2:
            std::cout << "Tuesday" << std::endl;
            break;
        case 3:
            std::cout << "Wednesday" << std::endl;
            break;
        default:
            std::cout << "Invalid day" << std::endl;
    }

    return 0;
}
```

## Looping Structures

### `for` Loop
The `for` loop is used for iterating over a range.

```cpp
#include <iostream>

int main() {
    for (int i = 1; i <= 5; i++) {
        std::cout << "Iteration " << i << std::endl;
    }

    return 0;
}
```

### `while` Loop
The `while` loop runs as long as the condition is true.

```cpp
#include <iostream>

int main() {
    int count = 1;

    while (count <= 5) {
        std::cout << "Count: " << count << std::endl;
        count++;
    }

    return 0;
}
```

### `do-while` Loop
The `do-while` loop executes at least once before checking the condition.

```cpp
#include <iostream>

int main() {
    int num = 0;

    do {
        std::cout << "Enter a positive number: ";
        std::cin >> num;
    } while (num <= 0);

    std::cout << "You entered: " << num << std::endl;

    return 0;
}
```

## Loop Control Statements

### `break` Statement
The `break` statement exits a loop immediately.

```cpp
#include <iostream>

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i == 5) break;
        std::cout << i << std::endl;
    }

    return 0;
}
```

### `continue` Statement
The `continue` statement skips the current iteration and moves to the next.

```cpp
#include <iostream>

int main() {
    for (int i = 1; i <= 5; i++) {
        if (i == 3) continue;
        std::cout << i << std::endl;
    }

    return 0;
}
```
