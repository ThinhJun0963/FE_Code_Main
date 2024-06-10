import { Box, TextField, Typography, styled } from '@mui/material';
import { SetStateAction, useEffect, useState } from 'react';

const generalContent = [
    { id: 'name', name:'name',type: 'text', label: 'Tên phòng khám', placeholder: 'Tên phòng khám' },
    { id: 'address', name: 'address',type: 'text', label: 'Địa chỉ', placeholder: 'Địa chỉ' },
    { id: 'phone', name: 'phone',type: 'text', label: 'Số điện thoại', placeholder: 'Số điện thoại' },
    { id: 'email', name:'email',type: 'email', label: 'Email', placeholder: 'Email' }
];

interface Service {
    serviceId: string;
    serviceName: string;
}

interface BasicFormProps {
    setFormData: (value: SetStateAction<{
        name: string;
        address: string;
        phone: string;
        email: string;
        openHour: string;
        closeHour: string;
        clinicServices: Service[];
        certifications: string[];
    }>) => void;
}


const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'transparent',
        },
        '&:hover fieldset': {
            borderColor: 'transparent',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'transparent',
        },
    },
    '& .MuiOutlinedInput-input': {
        borderBottom: '1px solid', // Bottom border style
    },
    '&:hover .MuiOutlinedInput-input': {
        borderBottom: '2px solid', // Bottom border style on hover
    },
    '& .Mui-focused .MuiOutlinedInput-input': {
        borderBottom: '2px solid', // Bottom border style on focus
    },
    width: '100%',
    height: '50%',
});

function Form({ setFormData }: BasicFormProps) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6">Các thông tin cơ bản</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {generalContent.map((field) => (
                    <Box key={field.id}>
                        <StyledTextField
                            id={field.id}
                            name={field.id}
                            label={field.label}
                            placeholder={field.placeholder}
                            type={field.type}
                            onChange={handleChange}
                        />
                    </Box>
                ))}
                <Box sx={{ display: 'flex', gap: '.5rem' }}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: 5 }}>
                    <StyledTextField id="openHour"  name="openHour" label="Giờ mở cửa" placeholder='7:00' onChange={handleChange}/>
                    <StyledTextField id="closeHour" name="closeHour" label="Giờ đóng cửa" placeholder='17:00' onChange={handleChange}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Form;