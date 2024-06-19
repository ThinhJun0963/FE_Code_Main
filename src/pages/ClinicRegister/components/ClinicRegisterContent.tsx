import React, { useEffect, useState } from 'react';
import { Box, Breadcrumbs, Button, Divider, Link, Typography } from '@mui/material';
import UseMultipleStepForm from '../../../components/UseMultipleStepForm/UseMultipleStepForm';
import ServicesForm from './ServicesForm/ServicesForm';
import CertificationForm from './CertificationForm/CertificationForm';
import BasicForm from './BasicForm/BasicForm';
import RegistingStepper from './Stepper/Stepper';
import { getServiceList, registerClinic } from './apiServices';
import styles from './ClinicRegisterContent.module.css'; // Import the CSS module

const ClinicRegisterContent = () => {
    interface Service {
        serviceId: string;
        serviceName: string;
    }

    const [services, setServices] = useState<Service[]>([]);

    const [formData, setFormData] = useState<{
        name: string;
        address: string;
        phone: string;
        email: string;
        openHour: string;
        closeHour: string;
        clinicServices: Service[];
        certifications: string[];
    }>({
        name: '',
        address: '',
        phone: '',
        email: '',
        openHour: '',
        closeHour: '',
        clinicServices: [],
        certifications: []
    });

    useEffect(() => {
        const fetchServices = async () => {
            const servicesData: Service[] = await getServiceList();
            setServices(servicesData);
        };

        fetchServices();
    }, []);

    const handleSubmit = async () => {
        try {
            const response = await registerClinic(formData);
            console.log('Clinic registration successful:', response);
        } catch (error) {
            console.error('Error during clinic registration:', error);
        }
    };

    const { steps, currentStep, step, isFirstStep, isFinalStep, next, back } =
        UseMultipleStepForm([
            <BasicForm setFormData={setFormData} />,
            <ServicesForm formData={formData} services={services} setFormData={setFormData} />,
            <CertificationForm />
        ]);

    return (
        <Box className={styles.container}>
            <Box className={styles.breadcrumbsContainer}>
                <Breadcrumbs separator={<Typography sx={{ color: '#FFFFFF', mx: 1, fontWeight: 'bold' }}>/</Typography>}>
                    <Link underline="hover" href="/" sx={{ fontSize: 22, color: ' #F8F8F8' }}>
                        Trang chủ
                    </Link>
                    <Box sx={{ fontSize: 24, color: ' #F8F8F8' }}>Đăng ký phòng khám</Box>
                </Breadcrumbs>
            </Box>

            {/* <RegistingStepper activeStep={currentStep} /> */}

            <Box className={styles.content}>
                <Box className={styles.stepper}>
                    {step}
                </Box>

                <Box className={styles.actions}>
                    {!isFirstStep && <Button variant="contained" onClick={back}>Bước trước</Button>}
                    {!isFinalStep && <Button variant="contained" color="primary" onClick={next}>Bước tiếp</Button>}
                    {isFinalStep && <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>Hoàn thành</Button>}
                </Box>
            </Box>
        </Box>
    );
}

export default ClinicRegisterContent;
