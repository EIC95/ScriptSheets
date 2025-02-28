# Object-Oriented Programming (OOP)

## Introduction
Java is an object-oriented programming (OOP) language, meaning it revolves around objects that encapsulate data and behavior. OOP provides modularity, reusability, and a clear structure for managing complex programs.

## Classes and Objects
A **class** is a blueprint for creating objects, defining their attributes (fields) and behaviors (methods). An **object** is an instance of a class.

### Defining a Class and Creating an Object
```java
class Car {
    String brand;
    int speed;
    
    void accelerate() {
        speed += 10;
        System.out.println("Speed: " + speed);
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car(); // Creating an object
        myCar.brand = "Toyota";
        myCar.speed = 50;
        myCar.accelerate();
    }
}
```

## Constructors
A **constructor** is a special method that initializes new objects.

```java
class Car {
    String brand;
    int speed;
    
    Car(String brand, int speed) { // Constructor
        this.brand = brand;
        this.speed = speed;
    }
}
```

## Inheritance
**Inheritance** allows a class to acquire properties and methods from another class.

```java
class Vehicle {
    int wheels;
    void move() {
        System.out.println("The vehicle is moving");
    }
}

class Car extends Vehicle {
    String brand;
}
```

## Polymorphism
**Polymorphism** allows methods to take different forms, either through method overriding or method overloading.

### Method Overriding
```java
class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Bark");
    }
}
```

### Method Overloading
```java
class MathOperations {
    int add(int a, int b) {
        return a + b;
    }
    
    double add(double a, double b) {
        return a + b;
    }
}
```

## Encapsulation
**Encapsulation** hides data and only exposes necessary functionalities.

```java
class Person {
    private String name;
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getName() {
        return name;
    }
}
```

## Abstraction
**Abstraction** hides implementation details and exposes only essential features.

```java
abstract class Animal {
    abstract void makeSound();
}

class Cat extends Animal {
    void makeSound() {
        System.out.println("Meow");
    }
}
```

## Interfaces
An **interface** is a contract that a class can implement, ensuring it provides certain behaviors.

```java
interface Animal {
    void makeSound();
}

class Dog implements Animal {
    public void makeSound() {
        System.out.println("Bark");
    }
}
```


