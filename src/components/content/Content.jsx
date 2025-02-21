import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Markdown from "react-markdown";
import './content.css'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from "rehype-highlight";
import 'highlight.js/styles/github-dark.css'

function Content (){
    const [content, setContent] = useState("");
    const { tech, subject } = useParams();

    useEffect(()=>{
        fetch(`/${tech}/${subject}.md`)
            .then((res) => res.text())
            .then((text)=>{setContent(text)})
    }, [tech, subject]);

    return(
        <div className='content'>
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{content}</Markdown>
        </div>
    )
}

export default Content;