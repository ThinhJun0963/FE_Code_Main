import { SetStateAction, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import typeOfBooking from './data';

// Changing how booking information is stored
interface TypeOfBookingFormProps {
    formData: { clinic: string, typeOfBooking: string; date: string; time: string, service: string},
    setFormData: (value: SetStateAction<{ clinic: string, typeOfBooking: string; date: string; time: string; service: string}>) => void
}

const TypeOfBookingForm = ({ formData, setFormData } : TypeOfBookingFormProps) => {
    const [selectedButtonIndex, setSelectedButtonIndex] = useState<null | number>(-1);
    
    const handleButtonClick = (index: number, type: string) => {
        // Debuging purposes
        console.log('old type: ', formData.typeOfBooking);
        console.log('new type: ', type);

        setSelectedButtonIndex(index)

        setFormData(prevState => ({ ...prevState, typeOfBooking: type}));
    };
    
    
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h4'>Chọn hình thức khám</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                    {typeOfBooking.map((type, index) => (
                        <Button
                            key={index}
                            variant={selectedButtonIndex === index || type === formData.typeOfBooking ? 'contained' : 'outlined'}
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
