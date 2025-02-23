import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Body from "./components/body/body.jsx";
import Home from "./components/home/Home.jsx";
import './style.css';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} /> {/* Home page */}
                <Route path="/:tech/:subject" element={<Body />} /> {/* Dynamic route based on tech and subject */}
                <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect unknown routes to Home */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;