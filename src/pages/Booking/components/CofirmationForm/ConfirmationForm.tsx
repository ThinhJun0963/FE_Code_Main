import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText, AccordionDetails, Accordion, AccordionSummary, Icon } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import the ExpandMoreIcon component
import { BookingInformation, SetBookingInformation } from '../../../../utils/interfaces/interfaces';
import styles from './ConfirmationForm.module.css';
import PersonIcon from '@mui/icons-material/Person'; // Example person icon

interface ConfirmationFormProps {
    formData: BookingInformation;
    setFormData: SetBookingInformation;
}

const ConfirmationForm: React.FC<ConfirmationFormProps> = ({ formData, setFormData }) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(''); // For payment method
    const [name, setName] = useState(''); // For name
    const [phoneNumber, setPhoneNumber] = useState(''); // For phone number

    const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPaymentMethod((event.target as HTMLInputElement).value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

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
                    <Box fontWeight="bold">Hình thức khám:</Box>
                    <Box>{formData.typeOfBooking}</Box>
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
                    <Box fontWeight="bold">Dịch vụ:</Box>
                    <Box></Box>
                </Box>
                <Box className={styles.informationItem}>
                    <Box fontWeight="bold">Lặp lại:</Box>
                    <Box>{formData.is_repeated ? 'Có' : 'Không'}</Box>
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
                            {/* User Information */}
                            <Box className={styles.profileItem}>
                                <Box fontWeight="bold" className={styles.label}>Họ và tên:</Box>
                                <Box className={styles.value}></Box>
                            </Box>
                            <Box className={styles.profileItem}>
                                <Box fontWeight="bold" className={styles.label}>Số điện thoại:</Box>
                                <Box className={styles.value}></Box>
                            </Box>

                            <Box className={styles.profileItem}>
                                <Box fontWeight="bold" className={styles.label}>Giới tính:</Box>
                                <Box className={styles.value}></Box>
                            </Box>

                            <Box className={styles.profileItem}>
                                <Box fontWeight="bold" className={styles.label}>Địa chỉ:</Box>
                                <Box className={styles.value}></Box>
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box >
    );
};

export default ConfirmationForm;

{/* <Grid item xs={12}>
<FormControl>
    <FormLabel id="payment-method">Phương thức thanh toán</FormLabel>
    <RadioGroup
        aria-labelledby="payment-method"
        name="paymentMethod"
        value={selectedPaymentMethod}
        onChange={handlePaymentMethodChange}
    >
        <FormControlLabel value="cash" control={<Radio />} label="Tiền mặt" />
        <FormControlLabel value="card" control={<Radio />} label="Thẻ" />
    </RadioGroup>
    {!selectedPaymentMethod && <FormHelperText error>Vui lòng chọn phương thức thanh toán</FormHelperText>} 
</FormControl>
</Grid> */}