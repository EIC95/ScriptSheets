import { FaBars } from "react-icons/fa6";

function Bar(){

    const toggle = () => {
        const sidebar = document.getElementById('sidebar');

        if(sidebar.style.display === "none" || sidebar.style.display === ""){
            sidebar.style.display = 'block';
        }else{
            sidebar.style.display = "none";
        }
    };

    return (
        <FaBars className={'bar'} size={22} onClick={toggle}/>
    )
}

export default Bar;