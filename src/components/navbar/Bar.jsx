import { FaBars } from "react-icons/fa6";
import { useState } from "react";

function Bar() {
    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => {
        const sidebar = document.getElementById('sidebar');

        if (sidebar) {
            // Toggle sidebar visibility
            sidebar.style.display = isVisible ? "none" : "block";
            setIsVisible(prev => !prev);
        }
    };

    return <FaBars className="bar" size={22} onClick={toggle} />;
}

export default Bar;
