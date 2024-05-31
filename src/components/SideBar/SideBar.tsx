import { Link } from "react-router-dom";
import styles from './SideBar.module.css';

interface Data {
    title: string;
    path: string;
}

interface SidebarData {
    sidebarData: Data[];
}

const SideBar = ({ sidebarData }: SidebarData) => {
    return (
        <div className={styles.sidebar}>
            <ul className={styles['sidebar-list']}>
                {sidebarData.map((item, index) => {
                    return (
                        <li className={styles['sidebar-item']} key={index}><Link id='title' to={item.path}>{item.title}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBar;