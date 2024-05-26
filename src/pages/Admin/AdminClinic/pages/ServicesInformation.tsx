import React from 'react'
import styles from '../AdminClinic.module.css'
import SideBar from "../../../../components/SideBar/SideBar";
import { sidebarData } from '../data';

const ServicesInformation = () => {
    return (
        <div className={styles.box}>
            <SideBar sidebarData={sidebarData} styles={styles} />
            <div className={styles['content-container']}>
                <div><h1>Trang thông tin dịch vụ</h1></div>

            </div>
        </div>
    )
}

export default ServicesInformation