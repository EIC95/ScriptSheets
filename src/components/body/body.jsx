import Sidebar from "../sidebar/Sidebar.jsx";
import Content from "../content/Content.jsx";
import Rightbar from "../rightbar/Rightbar.jsx";
import './body.css'

function Body(){
    return(
        <section className='main-body'>
            <Sidebar />
            <Content />
            <Rightbar />
        </section>
    )
}

export default Body;