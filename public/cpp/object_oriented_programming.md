# Object-Oriented Programming

## Introduction  
**Object-Oriented Programming (OOP)** is a programming paradigm that organizes code into objects. It allows for better code reuse, modularity, and maintainability. C++ supports OOP with key concepts such as **classes, objects, encapsulation, inheritance, polymorphism, and abstraction**.

## Classes and Objects  
A **class** is a blueprint for creating objects, and an **object** is an instance of a class.

### Defining a Class  
```cpp
#include <iostream>

// Define a class
class Car {
public:
    std::string brand;
    int year;

    void displayInfo() {
        std::cout << "Brand: " << brand << ", Year: " << year << std::endl;
    }
};

int main() {
    Car car1; // Create an object
    car1.brand = "Toyota";
    car1.year = 2022;

    car1.displayInfo();
    return 0;
}
```

- `Car` is a class with attributes (`brand`, `year`) and a method (`displayInfo`).
- `car1` is an object of the class `Car`.

## Encapsulation
**Encapsulation** means restricting direct access to certain parts of an object and using methods to access them.

### Using Private and Public Members
```cpp
#include <iostream>

class Person {
private:
    int age; // Private member

public:
    void setAge(int a) {
        if (a >= 0) age = a; // Data validation
    }

    int getAge() {
        return age;
    }
};

int main() {
    Person p1;
    p1.setAge(25);
    std::cout << "Age: " << p1.getAge() << std::endl;
    return 0;
}
```

- Private members (`age`) **cannot** be accessed directly.
- Public methods (`setAge`, `getAge`) provide controlled access.

## Constructors and Destructors
A **constructor** initializes an object, and a **destructor** is called when an object is destroyed.

### Constructor Example
```cpp
#include <iostream>

class Car {
public:
    std::string brand;
    int year;

    // Constructor
    Car(std::string b, int y) {
        brand = b;
        year = y;
    }

    void display() {
        std::cout << "Brand: " << brand << ", Year: " << year << std::endl;
    }
};

int main() {
    Car car1("Honda", 2023);
    car1.display();
    return 0;
}
```

- The constructor **automatically** sets the values when an object is created.

### Destructor Example
```cpp
#include <iostream>

class Example {
public:
    Example() {
        std::cout << "Object created!" << std::endl;
    }

    ~Example() {
        std::cout << "Object destroyed!" << std::endl;
    }
};

int main() {
    Example obj;
    return 0;
}
```

- The destructor (`~Example()`) is called **automatically** when the object goes out of scope.

## Inheritance
**Inheritance** allows one class to inherit attributes and methods from another.

### Single Inheritance
```cpp
#include <iostream>

// Base class
class Animal {
public:
    void makeSound() {
        std::cout << "Animal makes a sound" << std::endl;
    }
};

// Derived class
class Dog : public Animal {
public:
    void bark() {
        std::cout << "Dog barks" << std::endl;
    }
};

int main() {
    Dog myDog;
    myDog.makeSound(); // Inherited method
    myDog.bark();
    return 0;
}
```

### Types of Inheritance
| Type | Syntax | Description |
|------|--------|-------------|
| **Public** | `class Derived : public Base` | Public members of `Base` stay public in `Derived`. |
| **Protected** | `class Derived : protected Base` | Public members of `Base` become protected in `Derived`. |
| **Private** | `class Derived : private Base` | Public members of `Base` become private in `Derived`. |

## Polymorphism
**Polymorphism** allows functions to behave differently based on the object calling them.

### Function Overloading
```cpp
#include <iostream>

class Math {
public:
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
};

int main() {
    Math obj;
    std::cout << "Int sum: " << obj.add(2, 3) << std::endl;
    std::cout << "Double sum: " << obj.add(2.5, 3.5) << std::endl;
    return 0;
}
```

### Function Overriding
```cpp
#include <iostream>

class Animal {
public:
    virtual void makeSound() {
        std::cout << "Animal sound" << std::endl;
    }
};

class Cat : public Animal {
public:
    void makeSound() override {
        std::cout << "Meow" << std::endl;
    }
};

int main() {
    Animal* animal = new Cat();
    animal->makeSound(); // Calls Cat's makeSound()
    delete animal;
    return 0;
}
```

- The `virtual` keyword ensures **dynamic dispatch**, meaning the correct function is called at runtime.

## Abstraction
**Abstraction** hides implementation details and only exposes necessary functionalities.

### Abstract Class with Pure Virtual Function
```cpp
#include <iostream>

class Shape {
public:
    virtual void draw() = 0; // Pure virtual function
};

class Circle : public Shape {
public:
    void draw() override {
        std::cout << "Drawing a circle" << std::endl;
    }
};

int main() {
    Shape* shape = new Circle();
    shape->draw();
    delete shape;
    return 0;
}
```

- `draw()` is a **pure virtual function**, making `Shape` an **abstract class**.
- Objects **cannot** be created from abstract classes.
