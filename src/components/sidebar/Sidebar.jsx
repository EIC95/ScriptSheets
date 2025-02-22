import Markdown from "react-markdown";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './sidebar.css'
import 'animate.css'

function Sidebar(){
    const [markdown , setMarkdown] = useState("");
    const { tech } = useParams();

    useEffect(()=>{
        fetch(`/${tech}/README.md`)
            .then(res => res.text())
            .then((text) => setMarkdown(text))
    }, [tech]);

    return(
        <div className='sidebar' id={'sidebar'}>
            <Markdown>{markdown}</Markdown>
        </div>
    )
}

export default Sidebar;