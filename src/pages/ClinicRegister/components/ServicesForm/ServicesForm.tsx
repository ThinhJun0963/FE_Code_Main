import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';
import { SetStateAction, useEffect, useState } from 'react';
import { Service, Clinic, setClinic } from '../../../../utils/interfaces/ClinicRegister/Clinic';
import styles from './ServicesForm.module.css';

interface ServicesFormProps {
    formData: Clinic;
    setFormData: setClinic;
    services: Service[];
    onStepComplete: () => void;
}

function ServicesForm({ formData, setFormData, services, onStepComplete }: ServicesFormProps) {
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

    useEffect(() => {
        if (selectedServices.length === 7) {
            onStepComplete();
        }
    }, [selectedServices, onStepComplete]);


    return (
        <Box className={styles.container}>
            <Box className={styles.headingBox}>
                <Box className={styles.heading}>Chọn loại dịch vụ</Box>
                <Box className={styles.subHeading}>Chọn 7 loại dịch vụ căn bản</Box>
            </Box>
            <Box className={styles.gridContainer}> {/* Use Box with grid styles */}
                {services.map((service, index) => (
                    <Box key={index} className={styles.gridItem}> {/* Apply grid item styles */}
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
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default ServicesForm;
