import { SetStateAction, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import typeOfBooking from './data';

import { BookingInformation, SetBookingInformation } from '../../../../utils/interfaces/interfaces';
import styles from './TypeOfBookingForm.module.css';

interface TypeOfBookingFormProps {
    formData: BookingInformation;
    setFormData: SetBookingInformation;
    onStepComplete: () => void;
}

const TypeOfBookingForm = ({ formData, setFormData, onStepComplete }: TypeOfBookingFormProps) => {
    const [selectedButtonIndex, setSelectedButtonIndex] = useState<null | number>(-1);

    const handleButtonClick = (index: number, type: string) => {
        setSelectedButtonIndex(index);
        setFormData(prevState => ({ ...prevState, typeOfBooking: type }));
        onStepComplete(); 
    };

    return (
        <Box className={styles.container}>
            <Box className={styles.headingBox}>
                <Box className={styles.heading}>Chọn dịch vụ khám</Box>
            </Box>
            <Box className={styles.buttonContainer}>
                {typeOfBooking.map((type, index) => (
                    <Button
                        key={index}
                        variant={selectedButtonIndex === index || type === formData.typeOfBooking ? 'contained' : 'outlined'}
                        className={styles.button}
                        onClick={() => handleButtonClick(index, type)}
                    >
                        {type}
                    </Button>
                ))}
            </Box>
        </Box>
    );
}

export default TypeOfBookingForm;
