# JavaScript Object-Oriented Programming (OOP)

## Introduction
Object-Oriented Programming (OOP) in JavaScript allows developers to structure their code using objects and classes, making it more modular and reusable. JavaScript supports OOP through prototypes and ES6 classes.

## Creating Objects
### Object Literals
```js
const person = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person.greet(); // Output: Hello, my name is Alice
```

### Using the `new Object()` Constructor
```js
const car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2022;
console.log(car);
```

## Constructor Functions
A constructor function is used to create multiple instances of an object.
```js
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name);
    };
}
const person1 = new Person("Bob", 30);
person1.greet(); // Output: Hello, my name is Bob
```

## Prototypes
Every JavaScript object has a prototype, which allows for inheritance.
```js
Person.prototype.sayAge = function() {
    console.log("I am " + this.age + " years old.");
};
person1.sayAge(); // Output: I am 30 years old.
```

## ES6 Classes
ES6 introduced a class syntax to make object-oriented programming easier.
```js
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    describe() {
        console.log(`${this.name} is a ${this.species}`);
    }
}
const lion = new Animal("Leo", "Lion");
lion.describe(); // Output: Leo is a Lion
```

## Inheritance
Classes can inherit from other classes using the `extends` keyword.
```js
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog");
        this.breed = breed;
    }
    bark() {
        console.log("Woof! Woof!");
    }
}
const beagle = new Dog("Buddy", "Beagle");
beagle.describe(); // Output: Buddy is a Dog
beagle.bark(); // Output: Woof! Woof!
```

## Encapsulation (Private Properties & Methods)
JavaScript now supports private properties using `#`.
```js
class BankAccount {
    #balance;
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    getBalance() {
        return this.#balance;
    }
}
const account = new BankAccount(1000);
console.log(account.getBalance()); // Output: 1000
// console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class
```

## Static Methods
Static methods belong to the class rather than an instance.
```js
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}
console.log(MathUtil.add(5, 3)); // Output: 8
```

