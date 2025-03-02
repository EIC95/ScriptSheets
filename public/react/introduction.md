# Introduction

## What is React?

React is a **JavaScript library** for building user interfaces, primarily for web applications. It is component-based, declarative, and enables developers to create dynamic, interactive UIs efficiently.

## How React Works

React follows a **component-based architecture**, meaning UIs are built by composing reusable components. Each component represents a part of the UI and can manage its own state.

### Components

Components in React can be **functional** or **class-based**:

#### Functional Component

```jsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}
```

#### Class Component

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
```

### JSX (JavaScript XML)

React uses **JSX**, a syntax extension that allows writing HTML-like code inside JavaScript.

```jsx
const element = <h1>Hello, React!</h1>;
```

JSX is compiled into standard JavaScript:

```js
const element = React.createElement("h1", null, "Hello, React!");
```

### Virtual DOM

React uses a **Virtual DOM** to optimize rendering. Instead of updating the real DOM directly, React:
1. Creates a virtual representation of the UI.
2. Detects changes between the new and previous versions.
3. Updates only the necessary parts of the real DOM.

This improves performance compared to traditional DOM manipulation.

### State and Props

- **State**: Stores dynamic data that changes over time.
- **Props**: Short for "properties", used to pass data from a parent component to a child.

Example of a stateful component:

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

### Unidirectional Data Flow

React enforces a **one-way data flow**, meaning data is passed down from parent components to child components via **props**, ensuring predictable UI updates.

```jsx
function Child({ message }) {
  return <p>{message}</p>;
}

function Parent() {
  return <Child message="Hello from Parent" />;
}
```

## Setting Up a React Project

### Using Vite

Vite is a fast build tool optimized for modern frameworks like React.

```sh
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
```

### Using Create React App (CRA)

Create React App provides a simple way to set up a React project with zero configuration.

```sh
npx create-react-app my-app
cd my-app
npm start
```