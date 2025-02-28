# PHP Iterators

## Introduction

Iterators are used to traverse data structures, such as arrays or objects, in a standardized way. PHP provides several built-in iterators and interfaces for creating custom iterators.

## Built-in Iterators

### ArrayIterator

Iterate over arrays and objects.

```php
<?php
$fruits = ["apple", "banana", "cherry"];
$iterator = new ArrayIterator($fruits);

foreach ($iterator as $fruit) {
    echo $fruit . "\n";
}
?>
```

### DirectoryIterator

Iterate over files and directories.

```php
<?php
$iterator = new DirectoryIterator('.');

foreach ($iterator as $fileInfo) {
    if ($fileInfo->isFile()) {
        echo $fileInfo->getFilename() . "\n";
    }
}
?>
```

## SPL Iterators

The Standard PHP Library (SPL) provides various iterator interfaces and classes.

### Iterator Interface

Implement the `Iterator` interface to create custom iterators.

```php
<?php
class MyIterator implements Iterator {
    private $items = [];
    private $position = 0;

    public function __construct($items) {
        $this->items = $items;
    }

    public function current() {
        return $this->items[$this->position];
    }

    public function key() {
        return $this->position;
    }

    public function next() {
        ++$this->position;
    }

    public function rewind() {
        $this->position = 0;
    }

    public function valid() {
        return isset($this->items[$this->position]);
    }
}

$items = ["apple", "banana", "cherry"];
$iterator = new MyIterator($items);

foreach ($iterator as $item) {
    echo $item . "\n";
}
?>
```

### IteratorAggregate Interface

Use `IteratorAggregate` to create an external iterator.

```php
<?php
class MyCollection implements IteratorAggregate {
    private $items = [];

    public function __construct($items) {
        $this->items = $items;
    }

    public function getIterator() {
        return new ArrayIterator($this->items);
    }
}

$items = ["apple", "banana", "cherry"];
$collection = new MyCollection($items);

foreach ($collection as $item) {
    echo $item . "\n";
}
?>
```

## Iterator Usage

- **Traversal**: Iterate over data structures in a consistent manner.
- **Encapsulation**: Encapsulate iteration logic within objects.
- **Flexibility**: Customize iteration behavior for complex data structures.

## Benefits of Iterators

- **Standardization**: Provide a standard way to iterate over different data structures.
- **Reusability**: Reuse iteration logic across different parts of an application.
- **Separation of Concerns**: Separate iteration logic from data structure implementation.