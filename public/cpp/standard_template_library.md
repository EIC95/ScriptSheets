# Standard Template Library (STL) in C++

## Introduction  
The **Standard Template Library (STL)** in C++ provides a powerful set of generic classes and functions to handle common data structures and algorithms. It includes containers, iterators, algorithms, and function objects, enabling efficient and reusable code.

## STL Components  

| Component | Description |
|-----------|-------------|
| **Containers** | Data structures like `vector`, `list`, `map`, etc. |
| **Iterators** | Objects that allow traversal of container elements |
| **Algorithms** | Functions for sorting, searching, and modifying data |
| **Function Objects** | Customizable operations used with algorithms |
| **Utility Components** | Helper classes like `pair` and `tuple` |

## Containers  
STL provides different container types categorized as:

### Sequence Containers  
Sequence containers store elements in a linear arrangement.

| Container | Description |
|-----------|-------------|
| `vector` | Dynamic array (fast access, resizable) |
| `list` | Doubly linked list (fast insertion/deletion) |
| `deque` | Double-ended queue (fast insertions/removals at both ends) |
| `array` | Fixed-size array |
| `forward_list` | Singly linked list (efficient for insertions/removals) |

#### Example: 
```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    numbers.push_back(6); // Add element
    numbers.pop_back();   // Remove last element

    for (int num : numbers)
        std::cout << num << " ";

    return 0;
}
```

### Associative Containers
These containers store elements in sorted order or allow quick lookups.

| Container | Description |
|-----------|-------------|
| `set` | Unique elements in sorted order |
| `map` | Key-value pairs in sorted order |
| `multiset` | Allows duplicate elements |
| `multimap` | Allows duplicate keys |

#### Example:
```cpp
#include <iostream>
#include <map>

int main() {
    std::map<std::string, int> age = {{"Alice", 25}, {"Bob", 30}};

    age["Charlie"] = 22; // Add element

    for (const auto& entry : age)
        std::cout << entry.first << ": " << entry.second << std::endl;

    return 0;
}
```

### Unordered Containers
Unordered containers store elements with **fast lookup** (constant-time on average).

| Container | Description |
|-----------|-------------|
| `unordered_set` | Unique elements, not sorted |
| `unordered_map` | Key-value pairs, not sorted |
| `unordered_multiset` | Allows duplicates, not sorted |
| `unordered_multimap` | Allows duplicate keys, not sorted |

#### Example:
```cpp
#include <iostream>
#include <unordered_set>

int main() {
    std::unordered_set<int> nums = {10, 20, 30, 40};

    nums.insert(50); // Insert element

    for (int num : nums)
        std::cout << num << " ";

    return 0;
}
```

## Iterators
Iterators allow traversal of container elements.

| Iterator Type | Description |
|--------------|-------------|
| `begin()` | Points to the first element |
| `end()` | Points one past the last element |
| `rbegin()` | Reverse iterator (last element) |
| `rend()` | Reverse end iterator |

#### Example: Iterating with `vector`
```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> nums = {1, 2, 3, 4, 5};

    for (auto it = nums.begin(); it != nums.end(); ++it)
        std::cout << *it << " ";

    return 0;
}
```

## Algorithms
STL provides efficient algorithms for operations like **sorting, searching, and modifying** data.

| Algorithm | Description |
|-----------|-------------|
| `sort()` | Sorts elements |
| `reverse()` | Reverses elements |
| `find()` | Finds an element |
| `count()` | Counts occurrences |
| `accumulate()` | Computes sum |
| `binary_search()` | Performs binary search |

#### Example: Sorting a `vector`
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> nums = {5, 2, 8, 1, 3};

    std::sort(nums.begin(), nums.end()); // Sort in ascending order

    for (int num : nums)
        std::cout << num << " ";

    return 0;
}
```

## Function Objects
Function objects allow **custom operations** to be passed to algorithms.

#### Example: Custom Comparator for Sorting
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

struct Descending {
    bool operator()(int a, int b) {
        return a > b;
    }
};

int main() {
    std::vector<int> nums = {5, 2, 8, 1, 3};

    std::sort(nums.begin(), nums.end(), Descending()); // Sort in descending order

    for (int num : nums)
        std::cout << num << " ";

    return 0;
}
```

## Utility Components

### `pair`
A `pair` holds two values.

```cpp
#include <iostream>
#include <utility>

int main() {
    std::pair<std::string, int> person = {"Alice", 25};

    std::cout << person.first << " is " << person.second << " years old.\n";
    return 0;
}
```

### `tuple`
A `tuple` holds multiple values.

```cpp
#include <iostream>
#include <tuple>

int main() {
    std::tuple<std::string, int, double> person = {"Alice", 25, 5.6};

    std::cout << std::get<0>(person) << " is " << std::get<1>(person) << " years old and " 
              << std::get<2>(person) << " feet tall.\n";

    return 0;
}
```
