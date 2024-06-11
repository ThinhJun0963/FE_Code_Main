import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';
import { SetStateAction, useState } from 'react';

interface Service {
    serviceId: string;
    serviceName: string;
}

interface ServicesFormProps {
    formData: {
        clinicServices: Service[];
    };
    services: Service[];
    setFormData: React.Dispatch<SetStateAction<{
        name: string;
        address: string;
        phone: string;
        email: string;
        openHour: string;
        closeHour: string;
        clinicServices: Service[];
        certifications: string[];
    }>>;
}

function ServicesForm({ services, formData, setFormData }: ServicesFormProps) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const serviceId = event.target.id;
        const checked = event.target.checked;

        if (checked) {
            setFormData((prevData) => ({
                ...prevData,
                services: [...prevData.clinicServices, services.find(service => service.serviceId === serviceId)!]
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                services: prevData.clinicServices.filter(service => service.serviceId !== serviceId)
            }));
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '20px' }}>
            <Typography variant="h6">Chọn loại dịch vụ</Typography>
            <Grid container spacing={2}>
                {services.map((service, index) => (
                    <Grid item xs={4} key={index}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    id={`${service.serviceId}`}
                                    onChange={handleChange} 
                                />
                            }
                            label={service.serviceName}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ServicesForm;