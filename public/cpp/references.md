# References

## Introduction  
A **reference** in C++ is an alias for an existing variable. Unlike pointers, references must be initialized when declared and cannot be reassigned to another variable. They provide a convenient way to pass variables to functions efficiently.

## Declaring and Initializing References  
A reference is declared using the `&` symbol.

```cpp
#include <iostream>

int main() {
    int value = 10;
    int& ref = value; // Reference to 'value'

    std::cout << "Value: " << value << std::endl;
    std::cout << "Reference: " << ref << std::endl;

    ref = 20; // Changing 'ref' also changes 'value'
    std::cout << "Updated Value: " << value << std::endl;

    return 0;
}
```

### Key Properties of References
- A reference must be initialized when declared.
- It cannot be changed to reference another variable.
- It provides a direct alias to the original variable.

## References as Function Parameters
Passing arguments by reference allows functions to modify the original variables.

```cpp
#include <iostream>

void modify(int& num) {
    num *= 2; // Modifies the original value
}

int main() {
    int number = 5;
    modify(number);
    std::cout << "Modified number: " << number << std::endl;

    return 0;
}
```

### Benefits of Passing by Reference
- **Avoids copying large objects**: More efficient than pass-by-value.
- **Allows modification**: The function can modify the original variable.

## References as Function Return Values
A function can return a reference, allowing modification of the original variable.

```cpp
#include <iostream>

int& getReference(int& num) {
    return num; // Returns a reference to the original variable
}

int main() {
    int value = 10;
    int& ref = getReference(value);
    ref = 50; // Modifies 'value' directly

    std::cout << "Value: " << value << std::endl; // 50

    return 0;
}
```

⚠ **Warning:** Returning a reference to a local variable is unsafe as it will be destroyed after function execution.

## Constant References
A **constant reference** prevents modification of the referenced variable.

```cpp
#include <iostream>

void display(const int& num) {
    // num = 20; // Error: cannot modify a const reference
    std::cout << "Value: " << num << std::endl;
}

int main() {
    int value = 15;
    display(value);

    return 0;
}
```

### Why Use Constant References?
- **Prevents accidental modification**.
- **Allows passing temporary values (rvalues)**.

Example with an rvalue:

```cpp
display(10); // Allowed because of const reference
```

## References vs Pointers
| Feature | References | Pointers |
|---------|-----------|----------|
| Can be null? | No | Yes (`nullptr`) |
| Can be reassigned? | No | Yes |
| Must be initialized? | Yes | No |
| Syntax | `int& ref = var;` | `int* ptr = &var;` |

## References in Range-Based Loops
Using references in loops avoids unnecessary copying.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4};

    for (int& num : numbers) {
        num *= 2; // Modifies the original elements
    }

    for (const int& num : numbers) {
        std::cout << num << " ";
    }

    return 0;
}
```
