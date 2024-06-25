import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText, AccordionDetails, Accordion, AccordionSummary, Icon } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import the ExpandMoreIcon component
import { BookingInformation, SetBookingInformation } from '../../../../utils/interfaces/interfaces';
import styles from './ConfirmationForm.module.css';
import PersonIcon from '@mui/icons-material/Person'; // Example person icon
import { getUserData } from '../../../../utils/api/UserAccountUtils';

interface ConfirmationFormProps {
    formData: BookingInformation;
}

const ConfirmationForm: React.FC<ConfirmationFormProps> = ({ formData }) => {

    const [userInfo, setUserInfo] = useState({
        fullName: '',
        phoneNumber: '',
        sex: '',
    });

    const fetchUserData = async () => {
        try {
            const usersData = await getUserData(5);
            const { fullname, phone, gender } = usersData;
            setUserInfo({
                fullName: fullname ?? '',
                phoneNumber: phone ?? '',
                sex: gender ?? '',
            });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);
    return (
        <Box component="form" className={styles.confirmationContainer}>
            <Box className={styles.heading}>
                Thông tin đặt khám
            </Box>

            <Box className={styles.informationContent}>
                <Box className={styles.informationItem}>
                    <Box fontWeight="bold">Phòng khám:</Box>
                    <Box>{formData.clinic}</Box>
                </Box>
                <Box className={styles.informationItem}>
                    <Box fontWeight="bold">Ngày khám:</Box>
                    <Box>{formData.date}</Box>
                </Box>
                <Box className={styles.informationItem}>
                    <Box fontWeight="bold">Giờ khám:</Box>
                    <Box>{formData.time.start} - {formData.time.end}</Box>
                </Box>
                <Box className={styles.informationItem}>
                    <Box fontWeight="bold">Dịch vụ</Box>
                    <Box>{formData.serviceName}</Box>
                </Box>
                <Accordion className={styles.userProfile}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="user-info-content"
                        id="user-info-header"
                        className={styles.accordionSummary}
                        sx={{
                            '& .MuiTypography-root': { fontSize: 20 },
                        }}
                    >
                        <Icon component={PersonIcon} sx={{ mr: 1 }} />
                        <Typography className={styles.profileHeader}>Thông tin bệnh nhân</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles.accordionDetails}>
                        <Box className={styles.profileContent}>
                            <Box className={styles.profileItem}>
                                <Box fontWeight="bold" className={styles.label}>Họ và tên:</Box>
                                <Box className={styles.value}>{userInfo.fullName}</Box>
                            </Box>
                            <Box className={styles.profileItem}>
                                <Box fontWeight="bold" className={styles.label}>Số điện thoại:</Box>
                                <Box className={styles.value}>{userInfo.phoneNumber}</Box>
                            </Box>

                            <Box className={styles.profileItem}>
                                <Box fontWeight="bold" className={styles.label}>Giới tính:</Box>
                                <Box className={styles.value}>{userInfo.sex}</Box>
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box >
    );
};

export default ConfirmationForm;
