# Functions

## Introduction  
**Functions** in C++ allow breaking a program into reusable blocks of code. They improve readability, modularity, and maintainability. A function in C++ is defined with a return type, a name, and optional parameters.

## Function Declaration and Definition  
A function must be declared before it is used. It can be defined before `main()` or declared in a separate header file.

### Basic Syntax  
```cpp
return_type function_name(parameters) {
    // Function body
    return value; // Optional if return_type is void
}
```

### Example of a Simple Function
```cpp
#include <iostream>

void sayHello() {
    std::cout << "Hello, World!" << std::endl;
}

int main() {
    sayHello(); // Function call
    return 0;
}
```

## Functions with Parameters
A function can take arguments to process dynamic data.

```cpp
#include <iostream>

void greet(std::string name) {
    std::cout << "Hello, " << name << "!" << std::endl;
}

int main() {
    greet("Alice");
    greet("Bob");
    return 0;
}
```

## Returning a Value
A function can return a value using `return`.

```cpp
#include <iostream>

int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    std::cout << "Sum: " << result << std::endl;
    return 0;
}
```

## Function Overloading
C++ allows multiple functions with the same name but different parameters.

```cpp
#include <iostream>

int multiply(int a, int b) {
    return a * b;
}

double multiply(double a, double b) {
    return a * b;
}

int main() {
    std::cout << multiply(2, 3) << std::endl;   // Calls int version
    std::cout << multiply(2.5, 3.5) << std::endl; // Calls double version
    return 0;
}
```

## Default Function Parameters
Functions can have default values for parameters.

```cpp
#include <iostream>

void displayMessage(std::string message = "Hello, World!") {
    std::cout << message << std::endl;
}

int main() {
    displayMessage();           // Prints "Hello, World!"
    displayMessage("Hi there!"); // Prints "Hi there!"
    return 0;
}
```

## Functions with References
Arguments can be passed by reference to modify the original value.

```cpp
#include <iostream>

void increment(int& x) {
    x++;
}

int main() {
    int num = 5;
    increment(num);
    std::cout << "Num: " << num << std::endl; // Prints 6
    return 0;
}
```

## Recursive Functions
A function can call itself to solve problems like factorial calculation.

```cpp
#include <iostream>

int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}

int main() {
    std::cout << "Factorial of 5: " << factorial(5) << std::endl;
    return 0;
}
```
