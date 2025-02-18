import Sidebar from "../sidebar/Sidebar.jsx";
import Content from "../content/Content.jsx";
import Rightbar from "../rightbar/Rightbar.jsx";

function Body(){
    return(
        <section>
            <Sidebar />
            <Content />
            <Rightbar />
        </section>
    )
}

export default Body;