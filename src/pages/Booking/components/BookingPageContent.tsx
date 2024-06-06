import { Box, Breadcrumbs, Button, Dialog, DialogTitle, Link, Typography } from '@mui/material'
import UseMultipleStepForm from '../../../components/UseMultipleStepForm/UseMultipleStepForm'
import TypeOfBookingForm from './TypesOfBookingForm/TypeOfBookingForm';
import Calendar from './Calendar/Calendar';
import TimeSlot from '../components/TimeSlots/TimeSlots';
import ConfirmationForm from './CofirmationForm/ConfirmationForm';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { useEffect, useState } from 'react';
import BookingStepper from './Stepper/Stepper';
import ClinicServices from '../components/ServicesForm/ServicesForm';
import ServicesForm from '../components/ServicesForm/ServicesForm';

const BookingPageContent = () => {

    const [formData, setFormData] = useState({
        typeOfBooking: '',
        date: '',
        time: '',
    })

    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [serviceDialogOpen, setServiceDialogOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleServiceDialogClose = () => {
        setServiceDialogOpen(false);
    };

    const handleServiceSelected = (service: string) => {
        setFormData(prevState => ({ ...prevState, typeOfBooking: service }));
        handleServiceDialogClose();
        next();
    }

    useEffect(() => {
        if (formData.typeOfBooking === 'Khám theo dịch vụ') {
            setServiceDialogOpen(true);
        }
    }, [formData.typeOfBooking]);

    const { steps, currentStep, step, isFirstStep, isFinalStep, next, back } = UseMultipleStepForm([<TypeOfBookingForm setFormData={setFormData} />, <Calendar setFormData={setFormData} />, <TimeSlot setFormData={setFormData} />, <ConfirmationForm formData={formData} setFormData={setFormData} />, <CheckoutForm />]);


    return (
        <Box sx={{ marginTop: '5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '80%', marginTop: '-3em', textAlign: 'right', color: 'black' }}>
                <Breadcrumbs>
                    <Link underline="hover" color="inherit" href="/">
                        Trang chủ
                    </Link>
                    <Typography color="text.primary">Trang đặt khám</Typography>
                </Breadcrumbs>
            </Box>
            <Box sx={{ marginTop: '50px' }}>
                <BookingStepper activeStep={currentStep} />
            </Box>
            <Box sx={{ position: 'relative', height: 'auto', width: '900px', padding: '30px', fontFamily: 'Arial, Helvetica, sans-serif', color: 'black', backgroundColor: '#ffffff', margin: '40px auto 40px auto', borderRadius: '20px', border: '2px solid #e0e0e0' }}>
                <Box sx={{ width: '100%', height: '100%', margin: '0 auto', padding: '50px' }}>
                    {step}
                </Box>
                <Box sx={{ position: 'absolute', bottom: '20px', right: '50px', display: 'flex', gap: '.5rem', justifyContent: 'flex-end', marginTop: '1em', }}>
                    {!isFirstStep && <Button variant="contained" onClick={back}>Bước trước</Button>}
                    {!isFinalStep &&
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                if (currentStep === 0 && (!formData.typeOfBooking || formData.typeOfBooking === '')) {
                                    setAlertMessage('Hãy chọn 1 hình thức khám trước khi tiếp tục.');
                                    setOpen(true);
                                } else if (currentStep === 1 && (!formData.date || formData.date === '')) {
                                    setAlertMessage('Hãy chọn 1 ngày khám trước khi tiếp tục.');
                                    setOpen(true);
                                } else if (currentStep === 2 && (!formData.time || formData.time === '')) {
                                    setAlertMessage('Hãy chọn 1 khung giờ khám trước khi tiếp tục.');
                                    setOpen(true);
                                } else {
                                    next();
                                    if (isFinalStep) {
                                        setFormData({
                                            typeOfBooking: '',
                                            date: '',
                                            time: '',
                                        });
                                    }
                                }
                            }}
                        >
                            Bước tiếp
                        </Button>
                    }
                    {isFinalStep && <Button variant="contained" color="primary" type="submit">Xác nhận</Button>}
                </Box>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{alertMessage}</DialogTitle>
                </Dialog>

                <Dialog
                    open={serviceDialogOpen}
                    onClose={handleServiceDialogClose}
                    maxWidth="md" 
                    fullWidth 
                    sx={{ overflow: 'hidden' }} 
                >
                    <ServicesForm onServiceSelected={handleServiceSelected}/>
                </Dialog>
            </Box>
        </Box>
    )
}

export default BookingPageContent