# Object-Oriented Programming

## Introduction
Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects and classes. PHP supports OOP, allowing developers to create modular, reusable, and scalable applications.

## Classes and Objects
A class is a blueprint for objects, defining properties and methods. An object is an instance of a class.

```php
class Car {
    public $brand;
    public $color;
    
    public function __construct($brand, $color) {
        $this->brand = $brand;
        $this->color = $color;
    }
    
    public function displayInfo() {
        return "This car is a $this->color $this->brand.";
    }
}

$myCar = new Car("Toyota", "Red");
echo $myCar->displayInfo();
```

## Encapsulation
Encapsulation is the concept of restricting direct access to certain properties and methods of a class. This is achieved using access modifiers: `public`, `private`, and `protected`.

```php
class BankAccount {
    private $balance = 0;
    
    public function deposit($amount) {
        if ($amount > 0) {
            $this->balance += $amount;
        }
    }
    
    public function getBalance() {
        return $this->balance;
    }
}

$account = new BankAccount();
$account->deposit(100);
echo $account->getBalance(); // Output: 100
```

## Inheritance
Inheritance allows a class to inherit properties and methods from another class using the `extends` keyword.

```php
class Animal {
    public function makeSound() {
        return "Some sound";
    }
}

class Dog extends Animal {
    public function makeSound() {
        return "Bark";
    }
}

$dog = new Dog();
echo $dog->makeSound(); // Output: Bark
```

## Polymorphism
Polymorphism allows methods to be overridden in derived classes.

```php
class Shape {
    public function area() {
        return 0;
    }
}

class Circle extends Shape {
    private $radius;
    
    public function __construct($radius) {
        $this->radius = $radius;
    }
    
    public function area() {
        return pi() * $this->radius * $this->radius;
    }
}

$circle = new Circle(5);
echo $circle->area(); // Output: 78.54
```

## Static Methods and Properties
Static properties and methods belong to the class rather than any object instance. They are accessed using the `self` keyword inside the class and `ClassName::` outside.

```php
class MathUtils {
    public static $pi = 3.14159;
    
    public static function square($num) {
        return $num * $num;
    }
}

echo MathUtils::$pi; // Output: 3.14159
echo MathUtils::square(4); // Output: 16
```

