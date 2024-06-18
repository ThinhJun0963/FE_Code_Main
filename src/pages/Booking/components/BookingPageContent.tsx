import { Box, Breadcrumbs, Button, Dialog, DialogTitle, Divider, Link, Typography } from '@mui/material'
import UseMultipleStepForm from '../../../components/UseMultipleStepForm/UseMultipleStepForm'
import TypeOfBookingForm from './TypeOfBookingForm/TypeOfBookingForm';
import Calendar from './Calendar/Calendar';
import TimeSlots from '../components/TimeSlots/TimeSlots';
import ConfirmationForm from './CofirmationForm/ConfirmationForm';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import BookingStepper from './Stepper/Stepper';
import ServicesForm from '../components/ServicesForm/ServicesForm';
import RepeatForm from './RepeatForm/RepeatForm';
import { useNavigate, useParams } from 'react-router-dom';
import { BookingInformation, SetBookingInformation, PaymentInformation, BookingRegistrationModel, clinicService } from '../../../utils/interfaces/interfaces';
import { handleBookingRegister } from '../../../utils/api/BookingRegister';


const BookingPageContent = () => {

    const { clinicId } = useParams<{ clinicId: string }>();
    const navigator = useNavigate();

    // ================= Booking information =============================
    const [formData, setFormData]: [BookingInformation, SetBookingInformation] = useState({
        clinic: clinicId || '',
        typeOfBooking: '',
        date: '',
        dentist: '2',
        //--------------------------
        is_repeated: 0,
        //--------------------------
        time: { id: '', start: '', end: '' },
        service: '',
    });

    const [paymentData, setPaymentData]: [PaymentInformation, Dispatch<SetStateAction<PaymentInformation>>] = useState({
        paymentMethod: '',
        amount: '',
        orderID: '',
        orderDetail: '',
    })
    // ================================================================

    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [serviceDialogOpen, setServiceDialogOpen] = useState(false);
    const [repeatDiaglogOpen, setRepeatDialogOpen] = useState(false);

    const handleRepeatDialogClose = () => {
        setRepeatDialogOpen(false);
    }

    const handleRepeatDialogOpen = () => {
        setRepeatDialogOpen(true);
    }

    const handleRepeatSelected = (is_repeated: number) => {
        setFormData(prevState => ({ ...prevState, is_repeated: is_repeated }));
        handleRepeatDialogClose();
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleServiceDialogClose = () => {
        setServiceDialogOpen(false);
    };

    const handleServiceSelected = (service: clinicService) => {
        setFormData(prevState => ({ ...prevState, typeOfBooking: service.serviceName }));
        handleServiceDialogClose();
        next();
    }

    // useEffect(() => {
    //     if (formData.typeOfBooking === 'Khám theo dịch vụ') {
    //         setServiceDialogOpen(true);
    //     }

    // }, [formData.typeOfBooking]);


    console.log('formDataDate:', formData.date);
    console.log('formDataClinic', formData.clinic);
    console.log('formDataRepeatCount', formData.is_repeated);

    const payload: BookingRegistrationModel = {
        TimeSlotId: "feb80d31-e4b5-4ec0-9733-799976b318d0",
        AppointmentDate: formData.date,
        CustomerId: 1,
        DentistId: 2,
        ClinicId: parseInt(formData.clinic),
        ServiceId: null,
        RepeatCount: formData.is_repeated ? 1 : 0, // Convert boolean to 0/1
        IsRecurring: true
    };



    // Old Code
    //const { steps, currentStep, step, isFirstStep, isFinalStep, next, back } = UseMultipleStepForm([<TypeOfBookingForm setFormData={setFormData} />, <Calendar setFormData={setFormData} />, <TimeSlot setFormData={setFormData} />, <ConfirmationForm formData={formData} setFormData={setFormData} />, <CheckoutForm />]);

    // ======== Better passing value and handler to the childrens ============
    const { steps, currentStep, step, isFirstStep, isFinalStep, next, back } = UseMultipleStepForm([
        <TypeOfBookingForm formData={formData} setFormData={setFormData} />,
        <Calendar formData={formData} setFormData={setFormData} openRepeatDialog={handleRepeatDialogOpen} />,
        <TimeSlots formData={formData} setFormData={setFormData} />,
        <ConfirmationForm formData={formData} setFormData={setFormData} />,
        <CheckoutForm paymentData={paymentData} setPaymentData={setPaymentData} />]);
    // =======================================================================

    if (isFinalStep) {
        console.log('Payload to be sent:', payload);
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '5em', paddingBottom: '5em' }}>
            <Box sx={{ width: '90%', textAlign: 'right', color: 'black' }}>
                <Breadcrumbs>
                    <Link underline="hover" color="inherit" href="/">
                        Trang chủ
                    </Link>
                    <Typography color="text.primary">Trang đặt khám</Typography>
                </Breadcrumbs>
            </Box>
            <Divider sx={{ backgroundColor: 'black', width: '90%', margin: '1em auto' }} />
            <Box sx={{ marginTop: '50px' }}>
                <BookingStepper activeStep={currentStep} />
                {/* <Box component="form" sx={{ position: 'relative', height: 'auto', width: '900px', padding: '30px', fontFamily: 'Arial, Helvetica, sans-serif', color: 'black', backgroundColor: '#ffffff', margin: '40px auto 40px auto', borderRadius: '20px', border: '2px solid #e0e0e0' }}> */}
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
                                        setRepeatDialogOpen(true);
                                        setAlertMessage('Hãy chọn 1 ngày khám trước khi tiếp tục.');
                                        setOpen(true);
                                    } else if (currentStep === 2 && (!formData.time || formData.time === null)) {
                                        setAlertMessage('Hãy chọn 1 khung giờ khám trước khi tiếp tục.');
                                        setOpen(true);
                                    } else {
                                        next();

                                    }
                                }}
                            >
                                Bước tiếp
                            </Button>
                        }
                        {isFinalStep && <Button variant="contained" color="primary" type="submit" onClick={() => handleBookingRegister(payload, navigator)}>Xác nhận</Button>}
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
                        <ServicesForm onServiceSelected={handleServiceSelected} />
                    </Dialog>

                    <Dialog
                        open={repeatDiaglogOpen}
                        onClose={handleRepeatDialogClose}
                        maxWidth="md"
                        sx={{ overflow: 'hidden', width: '20%', margin: '0 auto' }}
                    >
                        <RepeatForm onRepeatSelected={handleRepeatSelected} />
                    </Dialog>
                </Box>
            </Box>
        </Box>
    )
}

export default BookingPageContent
