# Enumerations

## Introduction  
An **enumeration** (`enum`) in C++ is a user-defined data type that consists of a set of named integral constants. It is useful for defining a collection of related values with meaningful names, improving code readability and maintainability.

## Defining and Using an Enumeration  
An `enum` is defined using the `enum` keyword.

```cpp
#include <iostream>

// Define an enumeration
enum Color {
    RED,
    GREEN,
    BLUE
};

int main() {
    // Declare an enum variable
    Color myColor = GREEN;

    // Output the value
    std::cout << "Selected color: " << myColor << std::endl; // Outputs 1 (GREEN)

    return 0;
}
```

### Default Values of Enumerators
By default, the first enumerator has a value of `0`, the second `1`, and so on.

```cpp
enum Day {
    SUNDAY,    // 0
    MONDAY,    // 1
    TUESDAY,   // 2
    WEDNESDAY, // 3
    THURSDAY,  // 4
    FRIDAY,    // 5
    SATURDAY   // 6
};
```

## Assigning Custom Values
You can manually assign specific values to the enumerators.

```cpp
enum Status {
    ERROR = -1,
    OK = 1,
    WARNING = 2
};
```

If a value is assigned to one enumerator, the following ones increment from it.

```cpp
enum Size {
    SMALL = 10,
    MEDIUM,  // 11
    LARGE = 20,
    XLARGE   // 21
};
```

## Strongly Typed Enumerations (`enum class`)
C++ introduces **scoped enumerations** using `enum class`, which improves type safety by preventing implicit conversions to integers.

```cpp
#include <iostream>

// Define a strongly typed enumeration
enum class Direction {
    NORTH,
    SOUTH,
    EAST,
    WEST
};

int main() {
    Direction d = Direction::EAST;

    // Output the value (must use static_cast)
    std::cout << "Direction value: " << static_cast<int>(d) << std::endl; // Outputs 2

    return 0;
}
```

### Differences Between `enum` and `enum class`
| Feature | `enum` | `enum class` |
|---------|--------|-------------|
| Implicit conversion to `int` | Yes | No |
| Scoped access | No | Yes (`EnumName::VALUE`) |
| Name conflicts | Possible | Avoided |

## Using Enums in Switch Statements
Enumerations are commonly used in `switch` statements for better readability.

```cpp
#include <iostream>

enum TrafficLight {
    RED,
    YELLOW,
    GREEN
};

int main() {
    TrafficLight light = GREEN;

    switch (light) {
        case RED:
            std::cout << "Stop!" << std::endl;
            break;
        case YELLOW:
            std::cout << "Prepare to stop!" << std::endl;
            break;
        case GREEN:
            std::cout << "Go!" << std::endl;
            break;
    }

    return 0;
}
```

## Using Enums in Functions
You can pass enumerations as function parameters.

```cpp
#include <iostream>

enum Animal {
    DOG,
    CAT,
    BIRD
};

void describeAnimal(Animal a) {
    switch (a) {
        case DOG:
            std::cout << "This is a dog." << std::endl;
            break;
        case CAT:
            std::cout << "This is a cat." << std::endl;
            break;
        case BIRD:
            std::cout << "This is a bird." << std::endl;
            break;
    }
}

int main() {
    describeAnimal(CAT);
    return 0;
}
```
