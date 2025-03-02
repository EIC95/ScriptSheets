# Lists & Keys

## Introduction

In React, rendering lists is a common task when displaying dynamic data. Each list item needs a **unique key** to help React efficiently update and re-render components.

## Rendering Lists with `.map()`

The `.map()` function is used to render a list dynamically.

```jsx
const fruits = ["Apple", "Banana", "Cherry"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
```

## Importance of Keys

Keys help React identify which items have changed, been added, or removed. **Each key must be unique among siblings.**

### Correct Usage: Unique IDs

```jsx
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### Incorrect Usage: Using Index as Key

```jsx
{fruits.map((fruit, index) => (
  <li key={index}>{fruit}</li>
))}
```

Using the **array index as a key** can cause issues if the order changes, leading to unnecessary re-renders and incorrect UI behavior.

## Conditional Rendering with Lists

You can conditionally render list items based on a condition.

```jsx
function FilteredList({ items }) {
  return (
    <ul>
      {items
        .filter((item) => item.startsWith("A"))
        .map((filteredItem) => (
          <li key={filteredItem}>{filteredItem}</li>
        ))}
    </ul>
  );
}
```