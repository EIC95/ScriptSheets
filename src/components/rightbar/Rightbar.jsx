import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./rightbar.css";

function Rightbar() {
    const { tech, subject } = useParams();
    const [parts, setParts] = useState([]);

    // Récupération des titres du fichier Markdown
    useEffect(() => {
        fetch(`/${tech}/${subject}.md`)
            .then(res => res.text())
            .then(text => {
                const matches = text.match(/^##\s(.+)$/gm) || [];
                setParts(matches.map(title => title.replace(/^##\s/, "")));
            })
            .catch(() => setParts([]));
    }, [tech, subject]);

    // Ajout des IDs aux titres H2 existants
    useEffect(() => {
        if (parts.length === 0) return;

        const h2Elements = document.querySelectorAll("h2");

        h2Elements.forEach((title) => {
            const cleanTitle = title.textContent.trim();
            const id = cleanTitle.toLowerCase().replace(/\s+/g, "-");

            if (parts.includes(cleanTitle)) {
                title.setAttribute("id", id);
            }
        });
    }, [parts]);

    return (
        <div className="rightbar">
            <h4>
                On this page
            </h4>
            <ul>
                {parts.length > 0
                    ? parts.map((part, index) => (
                        <li key={index}>
                            <a href={`#${part.toLowerCase().replace(/\s+/g, "-")}`}>{part}</a>
                        </li>
                    ))
                    : "Nothing here"}
            </ul>
        </div>
    );
}

export default Rightbar;
