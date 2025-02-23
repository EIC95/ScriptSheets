import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./rightbar.css";

function Rightbar() {
    // Extracting parameters from the URL (technology and subject)
    const { tech, subject } = useParams();

    // State to store section titles from the Markdown file
    const [parts, setParts] = useState([]);
    const [error, setError] = useState(false); // State to track fetch errors

    // Fetching H2 titles (##) from the Markdown file
    useEffect(() => {
        fetch(`/${tech}/${subject}.md`)
            .then(res => {
                if (!res.ok) throw new Error("Markdown fetch failed");
                return res.text();
            })
            .then(text => {
                // Find all H2 titles (`## Title`) in the Markdown text
                const matches = text.match(/^##\s(.+)$/gm) || [];
                // Clean up titles and update the state
                setParts(matches.map(title => title.replace(/^##\s/, "")));
                setError(false); // Reset error state on success
            })
            .catch(() => {
                setParts([]); // Clear sections
                setError(true); // Set error state
            });
    }, [tech, subject]);

    // Adds IDs to H2 elements in the DOM to allow smooth scrolling to sections
    useEffect(() => {
        if (parts.length === 0) return;

        // Select all H2 elements in the document
        const h2Elements = document.querySelectorAll("h2");

        h2Elements.forEach((title) => {
            const cleanTitle = title.textContent.trim(); // Clean the title text
            const id = cleanTitle.toLowerCase().replace(/\s+/g, "-"); // Generate a valid ID (e.g., "Section Title" -> "section-title")

            // Check if the title is part of the detected subsections and add the ID
            if (parts.includes(cleanTitle)) {
                title.setAttribute("id", id);
            }
        });
    }, [parts]);

    return (
        <div className="rightbar">
            <h4>On this page</h4>
            {error ? (
                <p className="error-message">⚠ A problem occurred while fetching the Markdown content.</p>
            ) : parts.length > 0 ? (
                <ul>
                    {parts.map((part, index) => (
                        <li key={index}>
                            <a href={`#${part.toLowerCase().replace(/\s+/g, "-")}`}>{part}</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{marginTop : 10}}>No sections available for this topic.</p>
            )}
        </div>
    );
}

export default Rightbar;
