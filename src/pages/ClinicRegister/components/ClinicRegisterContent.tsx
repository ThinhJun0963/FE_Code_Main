import { Box, Breadcrumbs, Button, Divider, Link, Typography } from '@mui/material';
import UseMultipleStepForm from '../../../components/UseMultipleStepForm/UseMultipleStepForm';
import ServicesForm from './ServicesForm/ServicesForm';
import CertificationForm from './CertificationForm/CertificationForm';
import BasicForm from './BasicForm/BasicForm';
import RegistingStepper from './Stepper/Stepper';
import { getServiceList, registerClinic } from './apiServices';
import { useEffect, useState } from 'react';

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

    // useEffect(() => {
    //     console.log(formData);
    // }, [formData]);

    return (
        <Box sx={{ paddingTop: '5em', paddingBottom: '5em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '90%', textAlign: 'right', color: 'black' }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Trang chủ
                    </Link>
                    <Typography color="text.primary">Phòng khám</Typography>
                </Breadcrumbs>
            </Box>

            <Divider sx={{ backgroundColor: 'black', width: '90%', margin: '1em auto' }} />

            <Box sx={{ width: '90%' }}>
                <Typography variant="h4" gutterBottom>
                    Trang đăng ký phòng khám
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '900px', height: '600px',margin: '40px auto 40px auto' }}>
                
                <RegistingStepper activeStep={currentStep} />

                <Box sx={{ width: '100%', height: '100%', margin: '0 auto', padding: '50px', borderRadius: '20px', border: '2px solid #e0e0e0',  fontFamily: 'Arial, Helvetica, sans-serif', color: 'black', backgroundColor: '#ffffff' }}>
                    {step}
                </Box>

                <Box sx={{ display: 'flex', gap: '.5rem', justifyContent: 'flex-end', marginTop: '1em' }}>
                    {!isFirstStep && <Button variant="contained" onClick={back}>Bước trước</Button>}
                    {!isFinalStep && <Button variant="contained" color="primary" onClick={next}>Bước tiếp</Button>}
                    {isFinalStep && <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>Hoàn thành</Button>}
                </Box>
            </Box>
        </Box>
    );
}

export default ClinicRegisterContent;
