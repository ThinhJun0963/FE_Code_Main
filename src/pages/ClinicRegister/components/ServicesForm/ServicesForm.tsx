import { Box, Checkbox, FormControlLabel, Grid, Typography, Button } from '@mui/material';
import { SetStateAction, useState } from 'react';
import AddServiceForm from '../AddServiceForm/AddServiceForm';;

interface Service {
    id: string;
    name: string;
    price: string;
}

interface ServiceFormProps {
    services: Service[];
    formData: {
        name: string;
        address: string;
        phone: string;
        email: string;
        openHour: string;
        closeHour: string;
        services: Service[];
        certifications: string[];
    };
    setFormData: (value: SetStateAction<{
        name: string;
        address: string;
        phone: string;
        email: string;
        openHour: string;
        closeHour: string;
        services: Service[];
        certifications: string[];
    }>) => void;
}

function ServicesForm({ services, formData, setFormData }: ServiceFormProps) {
    const [selectedServices, setSelectedServices] = useState<Service[]>(formData.services);
    const [open, setOpen] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, service: Service) => {
        let updatedServices;
        if (event.target.checked) {
            updatedServices = [...selectedServices, service];
        } else {
            updatedServices = selectedServices.filter((selectedService) => selectedService.id !== service.id);
        }
        setSelectedServices(updatedServices);
        setFormData(prevState => ({ ...prevState, services: updatedServices }));
    };

    const handleAddService = (newService: Service) => {
        const updatedServices = [...services, newService];
        setFormData(prevState => ({ ...prevState, services: [...prevState.services, newService] }));
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '20px' }}>
            <Typography variant="h6">Chọn loại dịch vụ</Typography>
            <Grid container spacing={2}>
                {services.map((service, index) => (
                    <Grid item xs={4} key={index}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={selectedServices.some(s => s.id === service.id)}
                                    onChange={(event) => handleChange(event, service)}
                                />
                            }
                            label={service.name}
                        />
                    </Grid>
                ))}
            </Grid>
            <Button variant="outlined" color="primary" onClick={handleOpen} sx={{marginTop: '3em'}}>
                Thêm dịch vụ khác
            </Button>
            <AddServiceForm open={open} handleClose={handleClose} onAddService={handleAddService} />
        </Box>
    );
}

export default ServicesForm;
