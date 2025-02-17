import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Body from "./components/body/Body.jsx";
import Home from "./components/home/Home.jsx";

function App() {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:tech/:subject" element={<Body />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
