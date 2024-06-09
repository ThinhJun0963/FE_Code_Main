import { SetStateAction, useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import typeOfBooking from './data';

interface TypeOfBookingFormProps {
    setFormData: (value: SetStateAction<{ typeOfBooking: string; date: string; time: string; }>) => void;
}

const TypeOfBookingForm = ({ setFormData } : TypeOfBookingFormProps) => {
    const [selectedButtonIndex, setSelectedButtonIndex] = useState<null | number>(null);

    const handleButtonClick = (index: number, type: string) => {
        setSelectedButtonIndex(index);
        setFormData(prevState => ({
            ...prevState,
            typeOfBooking: type
        }))
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h4'>Chọn hình thức khám</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                    {typeOfBooking.map((type, index) => (
                        <Button
                            key={index}
                            variant={selectedButtonIndex === index ? 'contained' : 'outlined'}
                            sx={{
                                justifyContent: 'flex-start',
                                width: '100%',
                                textAlign: 'left',
                                margin: '0.5em',
                            }}
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
