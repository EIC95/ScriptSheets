import {Link} from "react-router-dom";
import Slider from "react-slick";


function Navbar(){
    const technologies = [
        {'name':'C', 'directory':'c'},
        {'name':'C++', 'directory':'cpp'},
        {'name':'Docker', 'directory':'docker'},
        {'name':'Java', 'directory':'java'},
        {'name':'JavaScript', 'directory':'javascript'},
        {'name':'Node.Js', 'directory':'node'},
        {'name':'PHP', 'directory':'php'},
        {'name':'Python', 'directory':'python'},
        {'name':'React', 'directory':'react'},
        {'name':'SQL', 'directory':'sql'},
        {'name':'Express.Js', 'directory':'express'},
        {'name':'MongoDB', 'directory':'mongodb'}
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