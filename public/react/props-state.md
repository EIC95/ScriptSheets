# Props & State

## Introduction

In React, **props** and **state** are two key concepts used to manage data and control component behavior.

- **Props (short for "properties")** are used to pass data from a parent component to a child.
- **State** allows a component to manage its own internal data and re-render when it changes.

## Props: Passing Data to Components

Props enable components to receive dynamic data from their parent.

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}
```

### Props Are Read-Only

Props cannot be modified inside the component.

```jsx
function Greeting({ name }) {
  name = "Bob"; // ❌ This will cause an error
  return <h1>Hello, {name}!</h1>;
}
```

## State: Managing Internal Data

Unlike props, **state** is managed inside the component and can change over time.

### Using `useState`

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Updating State

State updates trigger a re-render of the component.

```jsx
<button onClick={() => setCount(count + 1)}>+1</button>
```

## Props vs. State

| Feature   | Props | State |
|-----------|-------|-------|
| Mutability | Immutable (read-only) | Mutable (can be changed) |
| Scope | Passed from parent to child | Managed within the component |
| Update Triggers | Parent re-renders | Component re-renders |
| Purpose | Configure a component | Store dynamic data |


