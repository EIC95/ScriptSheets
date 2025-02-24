# Type Casting in C

## Introduction
- **Type casting** is the conversion of one data type into another.
- There are **two types** of casting in C:
  1. **Implicit Casting (Type Promotion)** – Done automatically by the compiler.
  2. **Explicit Casting (Type Conversion)** – Done manually by the programmer.


## Implicit Casting (Type Promotion)
- Happens **automatically** when:
  - Assigning a **smaller** type to a **larger** type.
  - Performing arithmetic operations with mixed data types.

### Example:
```c
#include <stdio.h>

int main() {
    int a = 10;
    double b = a; // Implicit conversion (int → double)
    
    printf("Value of b: %f\n", b); // Output: 10.000000
    return 0;
}
```

### Type Promotion in Arithmetic:
```c
#include <stdio.h>

int main() {
    int a = 5;
    float b = 2.0;
    
    float result = a / b; // int is promoted to float
    printf("Result: %f\n", result); // Output: 2.500000
    return 0;
}
```


## Explicit Casting (Type Conversion)
- Done manually using **(type)** before a variable.
- Converts a **larger** type to a **smaller** type **(may cause data loss).**

### Syntax:
```c
(type) value;
```

### Example:
```c
#include <stdio.h>

int main() {
    double num = 5.99;
    int castedNum = (int) num; // Explicit conversion (double → int)
    
    printf("Original: %f\n", num);
    printf("Casted: %d\n", castedNum); // Output: 5 (decimal part removed)
    return 0;
}
```


## Type Casting in Expressions
- Used to **avoid unintended results**.

### Example: Integer Division Fix
```c
#include <stdio.h>

int main() {
    int a = 5, b = 2;
    
    float result = (float) a / b; // Convert 'a' to float
    printf("Result: %f\n", result); // Output: 2.500000
    
    return 0;
}
```

### Example: Avoiding Overflow
```c
#include <stdio.h>

int main() {
    char small = 130; // Overflow: char can store max 127
    printf("Small: %d\n", (int) small); // Output may be unexpected
    
    return 0;
}
```