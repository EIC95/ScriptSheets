import Sidebar from "../sidebar/Sidebar.jsx";
import Content from "../content/Content.jsx";
import Rightbar from "../rightbar/Rightbar.jsx";
import './body.css';

function Body() {
    return (
        <section className='main-body'> {/* Main layout containing the sidebar, content, and right panel */}
            <Sidebar />  {/* Left navigation panel */}
            <Content />  {/* Main content area */}
            <Rightbar /> {/* Right panel for navigation or additional info */}
        </section>
    );
}

export default Body;
