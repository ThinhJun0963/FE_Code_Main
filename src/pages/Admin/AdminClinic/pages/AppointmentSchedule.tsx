import React from 'react'
import styles from '../AdminClinic.module.css'
import SideBar from "../../../../components/SideBar/SideBar";
import { sidebarData } from '../data';

const AppointmentSchedule = () => {
    return (
        <div className={styles.box}>
            <SideBar sidebarData={sidebarData}/>
            <div className={styles['content-container']}>
                <div><h1>Trang thông tin lịch hẹn</h1></div>

            </div>
        </div>
    )
}

export default AppointmentSchedule