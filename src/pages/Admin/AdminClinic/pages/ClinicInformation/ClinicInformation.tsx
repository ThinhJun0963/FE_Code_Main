import styles from './ClinicInformation.module.css'
import SideBar from "../../../../../components/SideBar/SideBar";
import { sidebarData } from '../../data';
import Calendar from 'react-calendar';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { slots } from './data';

const ClinicInformation = () => {

    const [activeStep, setActiveStep] = useState(-1);

    const toggle = (index: number) => {
        if (activeStep === index) {
            return setActiveStep(-1);
        }
        setActiveStep(index);
    };

    return (
        <div className={styles.box}>
            <SideBar sidebarData={sidebarData} />
            <div className={styles['main-container']}>
                <div className={styles.header}><h1>Trang thông tin phòng khám</h1></div>
                <div className={styles['content-container']}>
                    <div className={styles['form-container']}>
                        <h2>Thiết lập thông tin cơ bản</h2>
                        <div className={styles['form']}>
                            <div className='row'>
                                <label className="form-label" htmlFor="clinic-name">Tên phòng khám</label>
                                <input className="form-control" type="text" id="clinic-name" />
                            </div>

                            <div className='row'>
                                <label className="form-label" htmlFor="clinic-address">Địa chỉ</label>
                                <input className="form-control" type="text" id="clinic-address" />
                            </div>

                            <div className='row'>
                                <label className="form-label" htmlFor="phone-number">Số điện thoại</label>
                                <input className="form-control" type="text" id="phone-number" />
                            </div>

                            <div className='row'>
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

                            <div className='row'>
                                <label className="form-label" htmlFor="description">Mô tả</label>
                                <textarea className="form-control" id="description" rows={4}></textarea>
                            </div>

                            <div className='row'>
                                <label className="form-label" htmlFor="image">Ảnh</label>
                                <input className="form-control" type="file" id="image" />
                            </div>
                        </div>
                        <div className={styles['button-box']}>
                            <button className="btn btn-primary">Lưu</button>
                        </div>
                    </div>

                    <div className={styles['slots-container']}>
                        <h2>Thiết lập slot khám</h2>
                        <div className={styles.accordion}>
                            <div className={styles.item} key={1}>
                                <div className={styles.title} onClick={() => toggle(1)}>
                                    <h3>Chọn ngày</h3>
                                    <span className={styles.icon}>
                                        {activeStep === 1 ? <ChevronUpIcon boxSize={8} /> : <ChevronDownIcon boxSize={8} />}
                                    </span>
                                </div>
                                {activeStep === 1 && <div className={styles.content}><div className={styles['calendar-container']}><Calendar /></div></div>}
                            </div>
                            <div className={styles['slot-table-container']}>
                                <table className={`table table-striped ${styles.table}`}>
                                    <thead>
                                        <tr>
                                            <th className=''>Slot</th>
                                            <th>Trạng thái</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {slots.map((slot: string, index) => (
                                            <tr key={index}>
                                                <td className={styles['margin-left']}>{slot}</td>
                                                <td><button className="btn btn-success">Trống</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ClinicInformation