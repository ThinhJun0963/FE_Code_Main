import { Link } from "react-router-dom";
import './SideBar.css';

interface Data { 
    title: string;
    path: string;
}

interface SidebarData { 
    sidebarData: Data[];
}

const SideBar = ({sidebarData} : SidebarData) => {

    return (
        <div className='sidebar'>
            <ul className='sidebar-list'>
                {sidebarData.map((item, index) => {
                    return (
                        <li className='sidebar-row' key={index}><Link id='title' to={item.path}>{item.title}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBar;