import React, { useState } from 'react';
import { clinicServices } from '../../../../utils/mockData';
import { Box, Button, Typography, Grid } from '@mui/material';
import { clinicService } from '../../../../utils/interfaces/interfaces';

interface ServicesFormProps {
    onServiceSelected: (service: clinicService) => void;
}

const ServicesForm: React.FC<ServicesFormProps> = ({ onServiceSelected }) => {
    const [selectedService, setSelectedService] = useState<clinicService>();

    const handleServiceClick = (service: clinicService) => {
        setSelectedService(service);
        onServiceSelected(service);
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 , padding: '20px'}}>
            <Typography variant="h6">Dịch vụ</Typography>
            <Grid container spacing={2}>
                {clinicServices.map((service, index) => (
                    <Grid item xs={4} key={index}>
                        <Button
                            variant={selectedService === service ? 'contained' : 'outlined'}
                            onClick={() => handleServiceClick(service)}
                            sx={{ whiteSpace: 'nowrap', width: '250px' }}
                        >
                            {service.serviceName}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ServicesForm;