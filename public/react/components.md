# Components

## Introduction

In React, **components** are the building blocks of the UI. They allow you to split the interface into independent, reusable pieces. The most common way to create components is by using **functional components**.

## Functional Components

Functional components are simple JavaScript functions that return JSX.

```jsx
function Greeting() {
  return <h1>Hello, World!</h1>;
}
```

### Props in Functional Components

Props allow components to receive data from their parent.

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

Usage:

```jsx
<Greeting name="Alice" />
```

## Component Composition

Components can be **nested** inside each other to build complex UIs.

```jsx
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}
```
