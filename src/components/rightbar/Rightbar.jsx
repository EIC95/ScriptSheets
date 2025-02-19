import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Rightbar() {
    const { tech, subject } = useParams();
    const [parts, setParts] = useState([]);
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        fetch(`/${tech}/${subject}.md`)
            .then(res => res.text())
            .then(text => {
                const matches = text.match(/^###\s(.+)$/gm) || [];
                setParts(matches.map(title => title.replace(/^###\s/, "")));
            })
            .catch(() => setParts([]));
    }, [tech, subject]);

    useEffect(() => {
        const h3Elements = Array.from(document.getElementsByTagName('h3'));
        setTitles(h3Elements);
    }, []);

    useEffect(() => {
        if (titles.length === 0 || parts.length === 0) return;

        titles.forEach((title) => {
            const cleanTitle = title.textContent.trim();
            const id = cleanTitle.toLowerCase().replace(/\s+/g, '-');

            if (parts.includes(cleanTitle)) {
                title.setAttribute('id', id);
            }
        });
    }, [parts, titles]);

    return (
        <div>
            <ul>
                {parts.length > 0 ? parts.map((part, index) => (
                    <li key={index}>
                        <a href={`#${part.toLowerCase().replace(/\s+/g, '-')}`}>{part}</a>
                    </li>
                )) : ""}
            </ul>
        </div>
    );
}

export default Rightbar;
