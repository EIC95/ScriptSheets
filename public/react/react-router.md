# React Router

## Introduction

**React Router** is a library for handling navigation in React applications. It enables **client-side routing**, allowing users to switch between views without full page reloads.

## Installing React Router

To use React Router, install it via npm:

```sh
npm install react-router-dom
```

## Setting Up Routes

Define routes using `BrowserRouter`, `Routes`, and `Route`.

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

## Navigating Between Pages

Use the `Link` component instead of `<a>` tags to enable navigation without reloading the page.

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

## Dynamic Routes & URL Parameters

You can create **dynamic routes** using `useParams()` to extract URL parameters.

```jsx
import { useParams } from "react-router-dom";

function UserProfile() {
  const { username } = useParams();
  return <h1>Profile of {username}</h1>;
}
```

Define the route:

```jsx
<Route path="/user/:username" element={<UserProfile />} />
```

## Redirecting with `useNavigate()`

To programmatically navigate, use `useNavigate()`.

```jsx
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return <button onClick={() => navigate("/about")}>Go to About</button>;
}
```
