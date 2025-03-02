# Object-Oriented Programming (OOP)

## Introduction

Object-Oriented Programming (OOP) is a programming paradigm based on objects, which are instances of classes. It helps in organizing code into reusable structures and promotes better software design.

## Defining a Class and Creating Objects

A class is a blueprint for creating objects. It defines attributes (variables) and methods (functions).

```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def display_info(self):
        print(f"Car: {self.brand} {self.model}")

# Creating an object
car1 = Car("Toyota", "Corolla")
car1.display_info()  # Output: Car: Toyota Corolla
```

## Attributes and Methods

### Instance Attributes
Instance attributes are specific to each object.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person1 = Person("Alice", 30)
print(person1.name)  # Output: Alice
```

### Class Attributes
Class attributes are shared across all instances of a class.

```python
class Employee:
    company = "TechCorp"  # Class attribute

    def __init__(self, name):
        self.name = name  # Instance attribute

emp1 = Employee("John")
print(emp1.company)  # Output: TechCorp
```

## Inheritance

Inheritance allows a class to derive properties and behaviors from another class, promoting code reuse.

```python
class Animal:
    def make_sound(self):
        print("Some sound")

class Dog(Animal):
    def make_sound(self):
        print("Bark")

dog = Dog()
dog.make_sound()  # Output: Bark
```

## Polymorphism

Polymorphism allows different classes to define the same method in different ways.

```python
class Bird:
    def move(self):
        print("Flying")

class Fish:
    def move(self):
        print("Swimming")

animals = [Bird(), Fish()]
for animal in animals:
    animal.move()
```

## Encapsulation

Encapsulation restricts direct access to some attributes and methods to protect data integrity.

```python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private attribute

    def get_balance(self):
        return self.__balance

account = BankAccount(1000)
print(account.get_balance())  # Output: 1000
```

