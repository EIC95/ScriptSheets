import './home.css';
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { HiArrowRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

// GitHub repository link (used in multiple places)
const GITHUB_REPO = "https://github.com/EIC95/ScriptSheets";

function Home() {
    // useMemo ensures that the technologies array is created only once
    const technologies = useMemo(() => [
        { name: 'C', path: 'c/basics', icon: 'c.svg' },
        { name: 'C++', path: 'cpp/basics', icon: 'cpp.svg' },
        { name: 'C#', path: 'csharp/basics', icon: 'csharp.svg' },
        { name: 'Docker', path: 'docker/introduction', icon: 'docker.svg' },
        { name: 'Express.Js', path: 'express/basics', icon: 'express.svg' },
        { name: 'Java', path: 'java/basics', icon: 'java.svg' },
        { name: 'JavaScript', path: 'javascript/basics', icon: 'javascript.svg' },
        { name: 'Node.Js', path: 'node/introduction', icon: 'node.svg' },
        { name: 'PHP', path: 'php/basics', icon: 'php.svg' },
        { name: 'Python', path: 'python/basics', icon: 'python.svg' },
        { name: 'React', path: 'react/introduction', icon: 'react.svg' },
        { name: 'SQL', path: 'sql/databases', icon: 'sql.svg' },
        { name: 'MongoDB', path: 'mongodb/basics', icon: 'mongodb.svg' },
        { name: 'Git', path: 'git/getting_started', icon: 'git.svg' },
        { name: 'Django', path: 'django/introduction', icon: 'django.svg' }
    ], []); // Empty dependency array ensures it is created only once

    return (
        <section className="home">
            {/* Hero section with an introduction and call-to-action buttons */}
            <div className="hero">
                <div>
                    <h1 className="home-title">Stay on Track</h1>
                    <p>
                        Working with multiple technologies is great…but it can also be a real headache.
                        Syntax can get mixed up, and it&#39;s easy to forget how to do certain things.
                        That&#39;s why these notes exist—to help everyone stay on track.
                        After all, no one can remember everything!
                    </p>
                    <div className="cta-container">
                        <a href="#cheatsheets">
                            <span>
                                Getting Started
                                <HiArrowRight />
                            </span>
                        </a>
                        <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
                            <span>
                                <FaGithub />
                                Contribute
                            </span>
                        </a>
                    </div>
                </div>
                {/* Illustration */}
                <img loading={'lazy'} src="/assets/Coder.svg" alt="Coder illustration" width={250} />
            </div>

            {/* Cheat Sheets section listing available technologies */}
            <div>
                <h1 id="cheatsheets" className="home-title">Cheat sheets</h1>
                <div className="cheatsheets-container">
                    {technologies.map((tech) => (
                        <Link key={tech.name} to={tech.path}>
                            <img 
                                src={`/assets/${tech.icon}`} 
                                width={76} 
                                height={76} 
                                alt={`${tech.name} icon`}
                                loading="lazy"
                            />
                            <span>{tech.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Footer section */}
            <hr />
            <footer>
                <p style={{ marginBottom: 10 }}>
                    Inspired by{" "}
                    <a 
                        href="https://www.javascriptcheatsheet.org/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline"
                    >
                        javascriptcheatsheet
                    </a>
                </p>
                <p>
                    Made with ❤️ by{" "}
                    <a 
                        href="https://eic.codes" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline"
                    >
                        eic.codes
                    </a>
                </p>
            </footer>
        </section>
    );
}

export default Home;
