import { useEffect, useState } from 'react';
import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import UseMultipleStepForm from '../../../components/UseMultipleStepForm/UseMultipleStepForm';
import ServicesForm from './ServicesForm/ServicesForm';
import CertificationForm from './CertificationForm/CertificationForm';
import BasicForm from './BasicForm/BasicForm';
import styles from './ClinicRegisterContent.module.css';
import { Service, Clinic, Slot } from '../../../utils/interfaces/ClinicRegister/Clinic';
import { servicesData } from '../../../utils/mockData'
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ClinicRegistrationModel } from '../../../utils/interfaces/ClinicRegister/Clinic';
import { handleClinicRegister } from '../../../utils/api/ClinicRegister';

const ClinicRegisterContent = () => {
    const navigator = useNavigate();
    const [services, setServices] = useState<Service[]>(servicesData);

    const [formData, setFormData] = useState<Clinic>({
        ownerId: 0,
        name: '',
        description: '',
        address: '',
        phone: '',
        email: '',
        openHour: '',
        closeHour: '',
        clinicServices: [],
        clinicSlots: [],
        clinicMedia: [],
    });

    function formatTime(timeString: string): string {
        const timeParts = timeString.split(':');
        let hours = parseInt(timeParts[0], 10);
        let minutes = parseInt(timeParts[1], 10);

        if (timeString.includes('AM') && hours === 12) {
            hours = 0;
        } else if (timeString.includes('PM') && hours !== 12) {
            hours += 12;
        }

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00.0000000`;
    }

    const payload: ClinicRegistrationModel = {
        OwnerId: 2,
        Name: formData.name,
        Description: formData.description,
        Address: formData.address,
        Phone: formData.phone,
        Email: formData.email,
        OpenHour: formatTime(formData.openHour),
        CloseHour: formatTime(formData.closeHour),
        ClinicServices: formData.clinicServices.map(service => service.serviceId),
        ClinicSlots: [{ slotId: 0, maxAppointments: 0 }],
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleClinicRegister(payload, navigator);
    }

    const handleBack = () => {
        if (currentStep === 1) {
            setFormData(prev => ({ ...prev, name: '', description: '', address: '', phone: '', email: '', openHour: '', closeHour: '', clinicServices: [], clinicSlots: [], clinicMedia: [] }));
        } else if (currentStep === 2) {
            setFormData(prev => ({ ...prev, clinicServices: [] }));
        }
        else if (currentStep === 3) {
            setFormData(prev => ({ ...prev, clinicSlots: [] }));
        }
        else if (currentStep === 4) {
            setFormData(prev => ({ ...prev, clinicMedia: [] }));
        }
        back();
    };

    const { steps, currentStep, step, isFirstStep, isFinalStep, next, back } =
        UseMultipleStepForm([
            <BasicForm setFormData={setFormData} formData={formData} onStepComplete={() => next()} />,
            <ServicesForm formData={formData} services={services} onStepComplete={() => next()} setFormData={setFormData} />,

            <CertificationForm formData={formData} setFormData={setFormData} />
        ]);

    return (
        <Box className={styles.container} component="form" onSubmit={handleSubmit}>
            <Box className={styles.breadcrumbsContainer}>
                <Breadcrumbs separator={<Typography sx={{ color: '#FFFFFF', mx: 1, fontWeight: 'bold' }}>/</Typography>}>
                    <Link underline="hover" href="/" sx={{ fontSize: 22, color: ' #F8F8F8' }}>
                        Trang chủ
                    </Link>
                    <Box sx={{ fontSize: 24, color: ' #F8F8F8' }}>Đăng ký phòng khám</Box>
                </Breadcrumbs>
            </Box>

            <Box className={styles.contentBox}>
                <Box className={styles.content}>
                    <Box className={styles.formContainer}>
                        {step}
                    </Box>
                </Box>

                <Box className={styles.buttonContainer}>
                    {!isFirstStep && (
                        <Button variant="text" className={styles.backButton} onClick={handleBack}>
                            <ArrowBack />
                            Quay lại
                        </Button>
                    )}
                    {isFinalStep && <Button variant="contained" color="primary" type="submit">Xác nhận</Button>}
                </Box>
            </Box>
        </Box>
    );
}

export default ClinicRegisterContent;

