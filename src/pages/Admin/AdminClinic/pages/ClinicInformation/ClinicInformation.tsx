import React from 'react'
import styles from './ClinicInformation.module.css'
import SideBar from "../../../../../components/SideBar/SideBar";
import { sidebarData } from '../../data';

const ClinicInformation = () => {
    return (
        <div className={styles.box}>
            <SideBar sidebarData={sidebarData} styles={styles} />
            <div className={styles['main-container']}>
                <div><h1>Trang thông tin phòng khám</h1></div>
                <div className={styles['content-container']}>
                    
                    <div className={styles['form-container']}>
                        <form className={styles['form']}>
                            <div>
                                <label className="form-label" htmlFor="clinic-name">Tên phòng khám</label>
                                <input className="form-control" type="text" id="clinic-name" />
                            </div>

                            <div>
                                <label className="form-label" htmlFor="clinic-address">Địa chỉ</label>
                                <input className="form-control" type="text" id="clinic-address" />
                            </div>

                            <div>
                                <label className="form-label" htmlFor="phone-number">Số điện thoại</label>
                                <input className="form-control" type="text" id="phone-number" />
                            </div>

                            <div>
                                <label className="form-label" htmlFor="email">Email</label>
                                <input className="form-control" type="email" id="email" />
                            </div>
                            <div className='row'>
                                <div className={`col ${styles.hour}`}>
                                    <label className="form-label" htmlFor="open-hour">Giờ mở cửa</label>
                                    <input className="form-control" type="text" id="open-hour" />
                                </div>

                                <div className={`col ${styles.hour}`}>
                                    <label className="form-label" htmlFor="close-hour">Giờ đóng cửa</label>
                                    <input className="form-control" type="text" id="close-hour" />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div>
                        <p style={{ color: "black", fontSize: "40px" }}>Hello</p>
                        {/* <button className={styles['save-button']}>Lưu</button> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ClinicInformation