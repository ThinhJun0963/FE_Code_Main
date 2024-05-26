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
            <ul className={styles.sidebarlist}>
                {sidebarData.map((item, index) => {
                    return (
                        <li className={styles.row} key={index}><div id={styles.title}>{item.title}</div></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBar;