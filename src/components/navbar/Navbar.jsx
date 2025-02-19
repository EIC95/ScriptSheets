import {Link, useLocation} from "react-router-dom";
import ThemeIcon from "../theme-icon/ThemeIcon.jsx";
import Slider from "react-slick";



function Navbar(){
    const technologies = [
        {'name':'C', 'directory':'c/basics' , 'icon':'c.svg' , 'color':'#3949AB'},
        {'name':'C++', 'directory':'cpp/basics' , 'icon':'cpp.svg' , 'color':'#0086D4'},
        {'name':'C#', 'directory':'csharp/basics' , 'icon':'csharp.svg' , 'color':'#5D3FD3'},
        {'name':'Docker', 'directory':'docker/basics' , 'icon':'docker.svg' , 'color':'#00599C'},
        {'name':'Express.Js', 'directory':'express/basics' , 'icon':'express.svg' , 'color':'#6cc24a'},
        {'name':'Java', 'directory':'java/basics' , 'icon':'java.svg' , 'color':'#ED8B00'},
        {'name':'JavaScript', 'directory':'javascript/basics' , 'icon':'javascript.svg' , 'color':'#FFBF00'},
        {'name':'Node.Js', 'directory':'node/basics' , 'icon':'node.svg' , 'color':'#6cc24a'},
        {'name':'PHP', 'directory':'php/basics' , 'icon':'php.svg' , 'color':'#5D3FD3'},
        {'name':'Python', 'directory':'python/basics' , 'icon':'python.svg' , 'color':'#FFBF00'},
        {'name':'React', 'directory':'react/basics' , 'icon':'react.svg' , 'color':'#61DBFB'},
        {'name':'SQL', 'directory':'sql/basics' , 'icon':'sql.svg' , 'color':'#61DBFB'},
        {'name':'MongoDB', 'directory':'mongodb/basics' , 'icon':'mongodb.svg' , 'color':'#00684A'}
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true,
    };

    const location = useLocation().pathname;
    let path = null;
    const root = document.querySelector(':root')

    for (const tech of technologies) {
        if (location.includes(tech.directory)) {
            root.style.setProperty('--primary' , tech.color)
            path = `/assets/${tech.icon}`;
            break;
        }
    }

    return(
        <nav>
            <div>
                <div>
                    {path ? <Link to={'/'}><img src={path} alt={'logo'} width={32} height={32} /></Link> : <h1>CheatSheet</h1>}
                </div>
                <div>
                    <a href='https://ko-fi.com/X8X511TO4J' target='_blank'><img height='32'  src='https://storage.ko-fi.com/cdn/kofi3.png?v=6' border={0} alt='Buy Me a Coffee at ko-fi.com' /></a>
                    <ThemeIcon />
                </div>
            </div>
            <Slider {...settings}>
                {technologies.map((tech) => {
                    return(
                        <div key={tech.name}>
                            <Link className='Link' to={tech.directory}>{tech.name}</Link>
                        </div>
                    )
                })}
            </Slider>
        </nav>
    )
}

export default Navbar;