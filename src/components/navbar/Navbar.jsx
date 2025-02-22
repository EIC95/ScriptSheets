import {Link, useLocation} from "react-router-dom";
import ThemeIcon from "../theme-icon/ThemeIcon.jsx";
import './Navbar.css'
import {useState} from "react";
import Bar from './Bar.jsx'
import { FaSheetPlastic } from "react-icons/fa6";
import { PiCoffeeBold } from "react-icons/pi";



function Navbar(){
    const [open, setOpen] = useState(false);

    const technologies = [
        {'name':'C', 'directory' : 'c' , 'path':'c/basics' , 'icon':'c.svg' , 'color':'#3848A9'},
        {'name':'C++', 'directory' : 'cpp' , 'path':'cpp/basics' , 'icon':'cpp.svg' , 'color':'#0086D4'},
        {'name':'C#', 'directory' : 'csharp' , 'path':'csharp/basics' , 'icon':'csharp.svg' , 'color':'#5D3FD3'},
        {'name':'Docker', 'directory' : 'docker' , 'path':'docker/basics' , 'icon':'docker.svg' , 'color':'#00599C'},
        {'name':'Express.Js', 'directory' : 'express' , 'path':'express/basics' , 'icon':'express.svg' , 'color':'#6cc24a'},
        {'name':'Java', 'directory' : 'java' , 'path':'java/basics' , 'icon':'java.svg' , 'color':'#D43A02'},
        {'name':'JavaScript', 'directory' : 'javascript' , 'path':'javascript/basics' , 'icon':'javascript.svg' , 'color':'#FFBF00'},
        {'name':'Node.Js', 'directory' : 'node' , 'path':'node/basics' , 'icon':'node.svg' , 'color':'#6cc24a'},
        {'name':'PHP', 'directory' : 'php' , 'path':'php/basics' , 'icon':'php.svg' , 'color':'#5D3FD3'},
        {'name':'Python', 'directory' : 'python' , 'path':'python/basics' , 'icon':'python.svg' , 'color':'#FFBF00'},
        {'name':'React', 'directory' : 'react' , 'path':'react/basics' , 'icon':'react.svg' , 'color':'#61DBFB'},
        {'name':'SQL', 'directory' : 'sql' , 'path':'sql/basics' , 'icon':'sql.svg' , 'color':'#61DBFB'},
        {'name':'MongoDB', 'directory' : 'mongodb' , 'path':'mongodb/basics' , 'icon':'mongodb.svg' , 'color':'#00684A'}
    ];

    const location = useLocation();
    const regex = new RegExp(/\/(.*?)\//)
    const match = location.pathname.match(regex);
    const subject = location.pathname
            .replace(regex, ' ')
            .trim()
            .split(' ')[0]
            .charAt(0).toUpperCase()
            + location.pathname.replace(regex, ' ').trim().split(' ')[0].slice(1).toLowerCase();
    const extractedLocation = match ? match[1] : null;
    let path = null;
    const root = document.querySelector(':root');
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.text = 'Cheat Sheets';

    if(extractedLocation){
        for (const tech of technologies) {
            if (tech.directory ===  extractedLocation) {
                titleElement.text = `${tech.name} - ${subject}`
                root.style.setProperty('--primary' , tech.color)
                path = `/assets/${tech.icon}`;
                break;
            }
        }
    }
    

    return(
        <nav>
            <div className={'nav-left'}>
                {extractedLocation ? <Bar/> : ""}
                {path ? <Link to={'/'}><img src={path} alt={'logo'} className={'logo'} /></Link> : <Link to={'/'} ><FaSheetPlastic  className={'default-logo logo'}/></Link>}
                <div className="dropdown" onClick={() => setOpen(!open)} onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)}>
                    <p className={'hover'}>Cheat Sheets <span className='arrow'>{open ? "▲" : "▼"}</span></p>
                    <div className="dropdown-options">
                        {technologies.map((tech) => {
                            return (
                                <Link key={tech.name} className='Link' to={tech.path}>{tech.name}</Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='nav-right'>
                <a className={'support'} href='https://ko-fi.com/X8X511TO4J' target='_blank'><PiCoffeeBold style={{marginRight:5}}/> Buy me a coffee</a>
                <ThemeIcon />
            </div>
        </nav>
    )
}

export default Navbar;