# Custom Hooks

## Introduction

Custom hooks are **reusable functions** that allow you to extract and share logic between components. They follow the same rules as built-in hooks but provide better code organization and reuse.

## Why Use Custom Hooks?

**Avoid code duplication** by extracting repeated logic.
**Improve readability** by keeping components cleaner.
**Encapsulate side effects** and state logic.

## Creating a Custom Hook

A custom hook is a JavaScript function that starts with `use` and can use other hooks inside it.

### Example: `useCounter` Hook

This custom hook manages a counter state:

```jsx
import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  
  return { count, increment, decrement };
}
```

### Using `useCounter` in a Component

```jsx
function CounterComponent() {
  const { count, increment, decrement } = useCounter(5);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}
```

## Custom Hook with `useEffect`

### Example: `useFetch` Hook

This custom hook fetches data from an API:

```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
```

### Using `useFetch` in a Component

```jsx
function DataComponent() {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/1");

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>{data.title}</p>}
    </div>
  );
}
```


