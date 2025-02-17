import {Link} from "react-router-dom";
import Slider from "react-slick";


function Navbar(){
    const technologies = [
        {'name':'C', 'directory':'c/basics'},
        {'name':'C++', 'directory':'cpp/basics'},
        {'name':'Docker', 'directory':'docker/basics'},
        {'name':'Java', 'directory':'java/basics'},
        {'name':'JavaScript', 'directory':'javascript/basics'},
        {'name':'Node.Js', 'directory':'node/basics'},
        {'name':'PHP', 'directory':'php/basics'},
        {'name':'Python', 'directory':'python/basics'},
        {'name':'React', 'directory':'react/basics'},
        {'name':'SQL', 'directory':'sql/basics'},
        {'name':'Express.Js', 'directory':'express/basics'},
        {'name':'MongoDB', 'directory':'mongodb/basics'}
    ]

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true,
    };

    return(
        <nav>
            <Slider {...settings}>
                {technologies.map((tech) => {
                    return(
                        <div key={tech.name}>
                            <Link to={tech.directory}>{tech.name}</Link>
                        </div>
                    )
                })}
            </Slider>
        </nav>
    )
}

export default Navbar;