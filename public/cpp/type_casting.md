# Type Casting

## Introduction  
**Type casting** in C++ allows converting a variable from one type to another. It is essential when working with different data types to avoid errors or improve code compatibility.  

There are two types of type casting in C++:  
- **Implicit type casting (Automatic conversion)**: Performed by the compiler when there is no risk of data loss.  
- **Explicit type casting (Forced conversion)**: Done manually to convert one type to another, even if data loss is possible.  

## Implicit Type Casting  
The compiler automatically performs certain conversions when a smaller type is converted to a larger type without data loss risk.  

```cpp
#include <iostream>

int main() {
    int intValue = 42;
    double doubleValue = intValue; // Implicit conversion from int to double

    std::cout << "intValue: " << intValue << std::endl;
    std::cout << "doubleValue: " << doubleValue << std::endl; // Displays 42.0

    return 0;
}
```

### Common Examples of Implicit Conversions
- **int → float / double**: `int` is converted to `double` without loss.
- **char → int**: A `char` is converted to its ASCII code.
- **float → double**: No loss of precision.
- **int → bool**: `0` becomes `false`, any other value becomes `true`.

Example with `char` to `int`:

```cpp
#include <iostream>

int main() {
    char letter = 'A';
    int asciiValue = letter; // 'A' becomes 65 in ASCII

    std::cout << "ASCII of 'A': " << asciiValue << std::endl;

    return 0;
}
```

## Explicit Type Casting
When the compiler cannot perform the conversion automatically or there is a risk of data loss, explicit conversion is used.

### Conversion Using `(type)`
The `(type)` operator forces a conversion.

```cpp
#include <iostream>

int main() {
    double pi = 3.14159;
    int intPi = (int) pi; // Explicit conversion from double to int

    std::cout << "Double: " << pi << std::endl;
    std::cout << "Int: " << intPi << std::endl; // Displays 3

    return 0;
}
```

### Conversion Using `static_cast`
`static_cast` is recommended for standard type conversions in C++.

```cpp
#include <iostream>

int main() {
    double number = 9.99;
    int truncated = static_cast<int>(number); // Explicit conversion

    std::cout << "Truncated: " << truncated << std::endl; // Displays 9

    return 0;
}
```