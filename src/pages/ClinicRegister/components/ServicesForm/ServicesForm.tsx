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
    const [selectedServices, setSelectedServices] = useState<Service[]>(formData.clinicServices);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, service: Service) => {
        let updatedServices;
        if (event.target.checked) {
            updatedServices = [...selectedServices, service];
        } else {
            updatedServices = selectedServices.filter((selectedService) => selectedService.serviceId !== service.serviceId);
        }
        setSelectedServices(updatedServices);
        setFormData(prevState => ({ ...prevState, clinicServices: updatedServices }));
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
                                    checked={selectedServices.some((selectedService) => selectedService.serviceId === service.serviceId)}
                                    onChange={(event) => handleChange(event, service)}
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
