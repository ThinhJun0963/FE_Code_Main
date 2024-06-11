import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import UseMultipleStepForm from '../../../components/UseMultipleStepForm/UseMultipleStepForm';
import ServicesForm from './ServicesForm/ServicesForm';
import CertificationForm from './CertificationForm/CertificationForm';
import BasicForm from './BasicForm/BasicForm';
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

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <Box sx={{ marginTop: '5%', display: 'flex', height: 'auto', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '80%', marginTop: '-3em', textAlign: 'right', color: 'black' }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Trang chủ
                    </Link>
                    <Typography color="text.primary">Phòng khám</Typography>
                </Breadcrumbs>
            </Box>

            <Box sx={{ position: 'relative', height: '65vh', width: '900px', fontFamily: 'Arial, Helvetica, sans-serif', color: 'black', backgroundColor: '#ffffff', margin: '40px auto 40px auto', borderRadius: '20px', border: '2px solid #e0e0e0' }}>
                <Box sx={{ width: '100%', height: '100%', margin: '0 auto', padding: '50px' }}>
                    {step}
                    <Box sx={{ position: 'absolute', bottom: '20px', right: '50px', display: 'flex', gap: '.5rem', justifyContent: 'flex-end', marginTop: '1em' }}>
                        {!isFirstStep && <Button variant="contained" onClick={back}>Bước trước</Button>}
                        {!isFinalStep && <Button variant="contained" color="primary" onClick={next}>Bước tiếp</Button>}
                        {isFinalStep && <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>Hoàn thành</Button>}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ClinicRegisterContent;
