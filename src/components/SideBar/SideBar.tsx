import { Link } from "react-router-dom";

interface Data { 
    title: string;
    path: string;
}

interface SidebarData { 
    sidebarData: Data[];
    styles: { [key: string]: string };
}

const SideBar = ({sidebarData, styles} : SidebarData) => {

    return (
        <div className={styles.sidebar}>
            <ul className={styles['sidebar-list']}>
                {sidebarData.map((item, index) => {
                    return (
                        <li className={styles.row} key={index}><Link id={styles.title} to={item.path}>{item.title}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBar;