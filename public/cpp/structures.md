# Structures

## Introduction  
A **structure** in C++ (declared using `struct`) is a user-defined data type that groups different variables under a single name. It is useful for organizing related data, such as information about a person, a book, or a student.

## Defining and Using a Structure  
A structure is defined using the `struct` keyword.

```cpp
#include <iostream>

// Define a structure
struct Person {
    std::string name;
    int age;
    double height;
};

int main() {
    // Create a structure variable
    Person person1;
    
    // Assign values to the structure members
    person1.name = "Alice";
    person1.age = 25;
    person1.height = 1.68;

    // Access structure members
    std::cout << "Name: " << person1.name << std::endl;
    std::cout << "Age: " << person1.age << std::endl;
    std::cout << "Height: " << person1.height << "m" << std::endl;

    return 0;
}
```

## Initializing a Structure
A structure can be initialized at the time of declaration.

```cpp
Person person2 = {"Bob", 30, 1.75};
```

### Using C++11 Braced List Initialization
```cpp
Person person3 {"Charlie", 28, 1.80};
```

## Structure with a Function
A structure can be passed to a function by value or by reference.

```cpp
#include <iostream>

struct Car {
    std::string brand;
    int year;
};

// Function that takes a structure by reference
void displayCar(const Car& car) {
    std::cout << "Brand: " << car.brand << ", Year: " << car.year << std::endl;
}

int main() {
    Car myCar = {"Toyota", 2020};
    displayCar(myCar);

    return 0;
}
```

## Structures with Arrays
A structure can contain an array.

```cpp
#include <iostream>

struct Student {
    std::string name;
    int grades[3];
};

int main() {
    Student student1 = {"John", {85, 90, 78}};

    std::cout << "Name: " << student1.name << std::endl;
    std::cout << "Grades: ";
    for (int grade : student1.grades) {
        std::cout << grade << " ";
    }

    return 0;
}
```

## Structures with Pointers
A structure can also use pointers to dynamically allocate memory.

```cpp
#include <iostream>

struct Employee {
    std::string name;
    int* salary;
};

int main() {
    Employee emp;
    emp.name = "David";
    emp.salary = new int(5000); // Dynamic allocation

    std::cout << "Employee: " << emp.name << ", Salary: $" << *emp.salary << std::endl;

    delete emp.salary; // Free allocated memory
    return 0;
}
```

## Nested Structures
A structure can contain another structure.

```cpp
#include <iostream>

struct Address {
    std::string city;
    std::string country;
};

struct Company {
    std::string name;
    Address location;
};

int main() {
    Company company = {"TechCorp", {"San Francisco", "USA"}};

    std::cout << "Company: " << company.name << std::endl;
    std::cout << "Location: " << company.location.city << ", " << company.location.country << std::endl;

    return 0;
}
```

## Structure with Constructors
Unlike `class`, `struct` in C++ can have constructors.

```cpp
#include <iostream>

struct Laptop {
    std::string brand;
    double price;

    // Constructor
    Laptop(std::string b, double p) {
        brand = b;
        price = p;
    }

    void display() {
        std::cout << "Brand: " << brand << ", Price: $" << price << std::endl;
    }
};

int main() {
    Laptop myLaptop("Dell", 999.99);
    myLaptop.display();

    return 0;
}
```
