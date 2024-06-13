import { CheckCircle } from "@mui/icons-material";
import { Box, Button } from "@mui/material";


interface clinicService {
    serviceId: string;
    serviceName: string;
}

interface ClinicServicesProps {
    services: clinicService[];
}

const ClinicServices = ({ services }: ClinicServicesProps) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {services.map((service, index) => (
                <Button key={index}
                    id={service.serviceId}
                    sx={{
                        whiteSpace: 'nowrap',
                        border: '2px solid #888',
                        '&:hover': {
                            backgroundColor: '#f0f0f0',
                        },
                        padding: 1,
                    }} variant="text" startIcon={<CheckCircle />}>
                    {service.serviceName}
                </Button>
            ))}
        </Box>
    );
};

export default ClinicServices;