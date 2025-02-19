import { IoIosSunny, IoLogoGithub } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

function ThemeIcon() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <>
            {theme === "light" ? (
                <>
                    <IoIosSunny onClick={toggleTheme} size={32} color="black" className={'hover'}/>
                    <IoLogoGithub size={32} color="black" className={'hover'} />
                </>
            ) : (
                <>
                    <FaMoon onClick={toggleTheme} color="white" size={32} className={'hover'} />
                    <IoLogoGithub size={32} color="white" className={'hover'} />
                </>
            )}
        </>
    );
}

export default ThemeIcon;
