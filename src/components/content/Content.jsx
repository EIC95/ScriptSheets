import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Markdown from "react-markdown";
import './content.css'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from "rehype-highlight";
import 'highlight.js/styles/github-dark.css'
import { CiEdit } from "react-icons/ci";

function Content (){
    const [content, setContent] = useState("");
    const { tech, subject } = useParams();

    const technologies = [
        { name: 'C Language', directoryTech: 'c', doc: 'https://en.cppreference.com/w/c', docSite: 'cppreference.com' },
        { name: 'C++', directoryTech: 'cpp', doc: 'https://en.cppreference.com/w/cpp', docSite: 'cppreference.com' },
        { name: 'C#', directoryTech: 'csharp', doc: 'https://learn.microsoft.com/en-us/dotnet/csharp/', docSite: 'microsoft.com' },
        { name: 'Docker', directoryTech: 'docker', doc: 'https://docs.docker.com/', docSite: 'docker.com' },
        { name: 'Express.Js', directoryTech: 'express', doc: 'https://expressjs.com/', docSite: 'expressjs.com' },
        { name: 'Java', directoryTech: 'java', doc: 'https://docs.oracle.com/en/java/', docSite: 'oracle.com' },
        { name: 'JavaScript', directoryTech: 'javascript', doc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', docSite: 'MDN' },
        { name: 'Node.Js', directoryTech: 'node', doc: 'https://nodejs.org/en/docs/', docSite: 'nodejs.org' },
        { name: 'PHP', directoryTech: 'php', doc: 'https://www.php.net/docs.php', docSite: 'php.net' },
        { name: 'Python', directoryTech: 'python', doc: 'https://docs.python.org/3/', docSite: 'python.org' },
        { name: 'React', directoryTech: 'react', doc: 'https://react.dev/', docSite: 'React.dev' },
        { name: 'SQL', directoryTech: 'sql', doc: 'https://www.w3schools.com/sql/', docSite: 'W3Schools' },
        { name: 'MongoDB', directoryTech: 'mongodb', doc: 'https://www.mongodb.com/docs/', docSite: 'mongodb.com' }
    ];


    let doc = '';
    let name = '';
    let website = '';

    for (const technology of technologies) {
        if (technology.directoryTech === tech) {
            doc = technology.doc;
            name = technology.name;
            website = technology.docSite;
            break;
        }
    }


    useEffect(()=>{
        fetch(`/${tech}/${subject}.md`)
            .then((res) => res.text())
            .then((text)=>{setContent(text)})
    }, [tech, subject]);

    return(
        <div className='content'>
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{content}</Markdown>
            <hr/>
            <div>
                <p>{`Learn more about ${name} on `}<a className={'underline'} href={doc} target='_blank'>{`${website}`}</a></p>
                <a className='edit' href='https://github.com/EIC95/CheatSheet.git' target='_blank'><CiEdit style={{marginRight : '5px'}}/> Edit this page on GitHub</a>
                <p>Inspired by <a href='https://www.javascriptcheatsheet.org/' target='_blank' className='underline'>javascriptcheatsheet</a></p>
                <p>Made with ❤️ by <a href='https://eic.codes' target='_blank' className='underline'>eic.codes</a></p>
            </div>
        </div>

    )
}

export default Content;