import { FaBars } from "react-icons/fa6";

function Bar(){

    const toggle = () => {
        const sidebar = document.getElementById('sidebar');

        if(sidebar.style.display === "none"){
            sidebar.classList.remove('animate__fadeOutLeft');
            sidebar.classList.add('animate__fadeInLeft');
            sidebar.style.display = 'block';
        }else{
            sidebar.classList.remove('animate__fadeInLeft');
            sidebar.classList.add('animate__fadeOutLeft');
            setTimeout(() => {
                sidebar.style.display = "none";
            }, 500);
        }
    };

    return (
        <FaBars className={'bar'} onClick={toggle}/>
    )
}

export default Bar;