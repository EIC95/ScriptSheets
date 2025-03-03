import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './sidebar.css';
import 'animate.css';

function Sidebar() {
    // State to store the fetched Markdown content
    const [markdown, setMarkdown] = useState("");
    const { tech,subject } = useParams(); // Extracts the technology parameter from the URL

    // Fetch the README.md file based on the selected technology
    useEffect(() => {
        fetch(`/${tech}/README.md`)
            .then(res => res.text())
            .then((text) => setMarkdown(text));
    }, [tech]); // Runs whenever the "tech" parameter changes

    //Highlight link based on the page
    useEffect(() => {
        const links = document.querySelectorAll('#sidebar ul li a');
        links.forEach((link)=> {
            if(link.getAttribute('href') === subject){
                link.style.color = 'var(--primary)';
                link.style.borderLeft = 'solid 2px var(--primary)'
            }
        });

    }, [markdown,subject]);

    return (
        <div className='sidebar' id='sidebar'>
            {/* Renders the summary of the technology */}
            <Markdown>{markdown}</Markdown>
        </div>
    );
}

export default Sidebar;
