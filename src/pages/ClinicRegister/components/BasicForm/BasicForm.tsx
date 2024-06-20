import React, { useState } from 'react'
import { Clinic, setClinic } from '../../../../utils/interfaces/ClinicRegister/Clinic'
import { Box, Button } from '@mui/material';
import styles from './BasicForm.module.css';


interface BasicFormProps {
    formData: Clinic;
    setFormData: setClinic;
    onStepComplete: () => void;
}


const BasicForm = ({ formData, setFormData, onStepComplete }: BasicFormProps) => {
    const [localFormData, setLocalFormData] = useState<Clinic>(formData);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLocalFormData((prevData: Clinic) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        setFormData(localFormData);
        onStepComplete();
    };

    // component="form" onSubmit={handleSubmit}
    return (
        <Box  className={styles.container}>
            <Box className={styles.headingBox}>
                <Box className={styles.heading}>Đăng kí SmileCare ngay cho phòng khám!</Box>
                <Box className={styles.subHeading}>Nhập thông tin cơ bản của phòng khám</Box>
            </Box>
            <Box className={styles.formContent}>
                <Box>
                    <label htmlFor="name" className={styles.label}>Tên phòng khám:</label>
                    <input name="name" id="name" type="text" className={styles.input} value={localFormData.name} onChange={handleChange} />
                </Box>

                <Box>
                    <label htmlFor="address" className={styles.label}>Địa chỉ:</label>
                    <input name="address" id="address" type="text" className={styles.input} value={localFormData.address} onChange={handleChange} />
                </Box>


                <Box>
                    <label htmlFor="phone" className={styles.label}>Số điện thoại:</label>
                    <input name="phone" id="phone" type="text" className={styles.input} value={localFormData.phone} onChange={handleChange} />
                </Box>


                <Box>
                    <label htmlFor="email" className={styles.label}>Địa chỉ email:</label>
                    <input name="email" id="email" type="email" className={styles.input} value={localFormData.email} onChange={handleChange} />
                </Box>

                <Box className={styles.inputGrid}>
                    <label htmlFor="open-hour" className={styles.label}>Giờ mở cửa:</label>
                    <input name="openHour" id="open-hour" type="text" className={styles.input} value={localFormData.openHour} onChange={handleChange} />

                    <label htmlFor="close-hour" className={styles.label}>Giờ đóng cửa:</label>
                    <input name="closeHour" id="close-hour" type="text" className={styles.input} value={localFormData.closeHour} onChange={handleChange} />
                </Box>

                <Box className={styles.buttonContainer}>
                    <Button variant="contained" className={styles.button} onClick={handleSubmit}>
                        Gửi
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default BasicForm