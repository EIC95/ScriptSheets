# Exception Handling

## Introduction  
**Exception handling** in C++ is a mechanism that allows a program to handle runtime errors gracefully without crashing. It enables the detection, handling, and resolution of unexpected situations using the **try-catch** mechanism.

C++ provides three key keywords for exception handling:  
- `try` – Defines a block where exceptions may occur.  
- `catch` – Handles the exception when thrown.  
- `throw` – Generates an exception.

## Basic Exception Handling  
The **try-catch** mechanism is used to handle exceptions.

### Example: Basic Try-Catch Block  
```cpp
#include <iostream>

int main() {
    try {
        int denominator = 0;
        if (denominator == 0)
            throw "Division by zero error!";

        std::cout << 10 / denominator << std::endl;
    } 
    catch (const char* errorMsg) {
        std::cout << "Exception caught: " << errorMsg << std::endl;
    }

    return 0;
}
```
- If `denominator == 0`, the `throw` statement sends an error message.
- The `catch` block catches and displays the error.

## Handling Multiple Exceptions
Multiple `catch` blocks can be used to handle different types of exceptions.

```cpp
#include <iostream>

int main() {
    try {
        int value = -5;

        if (value < 0)
            throw std::string("Negative value not allowed");
        else if (value == 0)
            throw 0;
    } 
    catch (const std::string& errorMsg) {
        std::cout << "String Exception: " << errorMsg << std::endl;
    }
    catch (int errorCode) {
        std::cout << "Integer Exception: Value is zero" << std::endl;
    }

    return 0;
}
```
- Different `catch` blocks handle different exception types.

## Catching All Exceptions
A **generic exception handler** using `catch(...)` can be used when the exception type is unknown.

```cpp
#include <iostream>

int main() {
    try {
        throw 3.14; // Throwing a double
    }
    catch (...) {
        std::cout << "An exception occurred!" << std::endl;
    }

    return 0;
}
```
- `catch(...)` catches **any** exception type.

## Using Exception Objects
Instead of throwing simple values, we can use **exception classes**.

```cpp
#include <iostream>
#include <stdexcept>

int main() {
    try {
        throw std::runtime_error("Custom runtime error");
    } 
    catch (const std::exception& e) {
        std::cout << "Exception: " << e.what() << std::endl;
    }

    return 0;
}
```
- The `std::runtime_error` class provides an error message using `e.what()`.

## Custom Exception Classes
We can create our own **exception class** to provide detailed error information.

```cpp
#include <iostream>
#include <exception>

class CustomException : public std::exception {
public:
    const char* what() const noexcept override {
        return "Custom Exception Occurred!";
    }
};

int main() {
    try {
        throw CustomException();
    } 
    catch (const CustomException& e) {
        std::cout << "Caught Exception: " << e.what() << std::endl;
    }

    return 0;
}
```
- Inheriting from `std::exception` allows us to define custom exceptions.

## Exception Handling in Functions
Functions can also **throw** exceptions.

```cpp
#include <iostream>

void divide(int a, int b) {
    if (b == 0)
        throw std::runtime_error("Division by zero");

    std::cout << "Result: " << a / b << std::endl;
}

int main() {
    try {
        divide(10, 0);
    }
    catch (const std::exception& e) {
        std::cout << "Error: " << e.what() << std::endl;
    }

    return 0;
}
```
- The function `divide()` throws an exception when `b == 0`, which is handled in `main()`.

## Exception Handling with Constructors and Destructors
Exceptions inside a **constructor** can prevent object creation.

```cpp
#include <iostream>

class Test {
public:
    Test() {
        throw std::runtime_error("Constructor failed!");
    }
};

int main() {
    try {
        Test obj;
    }
    catch (const std::exception& e) {
        std::cout << "Exception: " << e.what() << std::endl;
    }

    return 0;
}
```
- If an exception is thrown in a constructor, the object **is not created**.