import { IoIosSunny, IoLogoGithub } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";

function ThemeIcon() {
    // State to track the current theme (default to light or saved preference)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Apply theme changes to the document and save to localStorage
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Toggle between light and dark mode
    function toggleTheme() {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <>
            {theme === "light" ? (
                <>
                    {/* Sun icon for light mode, click to switch */}
                    <IoIosSunny onClick={toggleTheme} size={32} color="black" className={'hover icon'} />
                    {/* GitHub icon */}
                    <a href='https://github.com/EIC95/CheatSheet.git' target={'_blank'}>
                        <IoLogoGithub size={32} color="black" className={'hover icon'} />
                    </a>
                </>
            ) : (
                <>
                    {/* Moon icon for dark mode, click to switch */}
                    <FiMoon onClick={toggleTheme} color="white" size={32} className={'hover icon'} />
                    {/* GitHub icon */}
                    <a href='https://github.com/EIC95/CheatSheet.git' target={'_blank'}>
                        <IoLogoGithub size={32} color="white" className={'hover icon'} />
                    </a>
                </>
            )}
        </>
    );
}

export default ThemeIcon;
