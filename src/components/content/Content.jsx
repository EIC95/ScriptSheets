import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Markdown from "react-markdown";

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
            <Markdown>{content}</Markdown>
        </div>
    )
}

export default Content;