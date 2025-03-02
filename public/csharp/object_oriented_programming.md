# Object-Oriented Programming in C#

## Introduction to OOP
C# is an object-oriented programming language that follows the principles of:
- **Encapsulation**: Bundling data and methods that operate on the data.
- **Abstraction**: Hiding implementation details and exposing only necessary functionalities.
- **Inheritance**: Allowing a class to inherit properties and behaviors from another class.
- **Polymorphism**: Enabling a method or function to work in different ways.

## Classes and Objects
A **class** is a blueprint for creating objects. An **object** is an instance of a class.

### Declaring a Class
```csharp
class Car
{
    public string Brand;
    public string Model;
    public int Year;
}
```

### Creating an Object
```csharp
class Program
{
    static void Main()
    {
        Car myCar = new Car();
        myCar.Brand = "Toyota";
        myCar.Model = "Corolla";
        myCar.Year = 2023;
        Console.WriteLine($"{myCar.Brand} {myCar.Model} ({myCar.Year})");
    }
}
```

## Constructors
A constructor is a special method that initializes an object when it is created.
```csharp
class Car
{
    public string Brand;
    public string Model;
    public int Year;

    public Car(string brand, string model, int year)
    {
        Brand = brand;
        Model = model;
        Year = year;
    }
}
```

### Using the Constructor
```csharp
class Program
{
    static void Main()
    {
        Car myCar = new Car("Toyota", "Corolla", 2023);
        Console.WriteLine($"{myCar.Brand} {myCar.Model} ({myCar.Year})");
    }
}
```

## Encapsulation
Encapsulation restricts direct access to object data and requires controlled access through methods.

### Example with Properties
```csharp
class Person
{
    private int age;

    public int Age
    {
        get { return age; }
        set { if (value >= 0) age = value; }
    }
}
```

### Using Encapsulation
```csharp
class Program
{
    static void Main()
    {
        Person person = new Person();
        person.Age = 25;
        Console.WriteLine(person.Age); // Outputs 25
    }
}
```

## Inheritance
Inheritance allows a class (child) to acquire properties and behaviors from another class (parent).

### Example
```csharp
class Vehicle
{
    public string Brand = "Ford";
}

class Car : Vehicle
{
    public string Model = "Mustang";
}

class Program
{
    static void Main()
    {
        Car myCar = new Car();
        Console.WriteLine(myCar.Brand + " " + myCar.Model); // Outputs "Ford Mustang"
    }
}
```

## Polymorphism
Polymorphism allows methods to have different implementations in different classes.

### Method Overriding
```csharp
class Animal
{
    public virtual void MakeSound()
    {
        Console.WriteLine("Animal makes a sound");
    }
}

class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Bark!");
    }
}
```

### Using Polymorphism
```csharp
class Program
{
    static void Main()
    {
        Animal myAnimal = new Dog();
        myAnimal.MakeSound(); // Outputs "Bark!"
    }
}
```

## Abstract Classes and Interfaces
### Abstract Classes
An abstract class cannot be instantiated and must be inherited.
```csharp
abstract class Animal
{
    public abstract void MakeSound();
}

class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Bark!");
    }
}
```

### Interfaces
An interface defines a contract that implementing classes must follow.
```csharp
interface IAnimal
{
    void MakeSound();
}

class Dog : IAnimal
{
    public void MakeSound()
    {
        Console.WriteLine("Bark!");
    }
}
```
