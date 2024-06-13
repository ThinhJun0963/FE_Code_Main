import { Box, Breadcrumbs, Button, Dialog, DialogTitle, Divider, Link, Typography } from '@mui/material'
import UseMultipleStepForm from '../../../components/UseMultipleStepForm/UseMultipleStepForm'
import TypeOfBookingForm from './TypeOfBookingForm/TypeOfBookingForm';
import Calendar from './Calendar/Calendar';
import TimeSlots from '../components/TimeSlots/TimeSlots';
import ConfirmationForm from './CofirmationForm/ConfirmationForm';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import BookingStepper from './Stepper/Stepper';
import ClinicServices from '../components/ServicesForm/ServicesForm';
import ServicesForm from '../components/ServicesForm/ServicesForm';
import { TimeSlot } from './TimeSlots/data';
import RepeatForm from './RepeatForm/RepeatForm';

interface BookingInformation {
    clinic: string,
    typeOfBooking: string,
    date: string,
    dentist: string,
    //----------------------------------
    is_repeated: number,
    //----------------------------------
    time: TimeSlot,
    // service: '',
    service: string,
}

interface PaymentInformation {
    paymentMethod: string,
    amount: string,
    orderID: string,
    orderDetail: string,
}

const BookingPageContent = () => {

    // ================= Booking information =============================
    const [formData, setFormData]: [BookingInformation, Dispatch<SetStateAction<BookingInformation>>] = useState({
        clinic: '',
        typeOfBooking: '',
        date: '',
        dentist: '',
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

    const handleSubmit = () => {
        // Handle submission logic here
        console.log(formData); // Contains booking information
        console.log(paymentData); // Contains payment information
        const payload = {
            ...formData,
            paymentMethod: paymentData.paymentMethod,
            amount: paymentData.amount,
            orderID: paymentData.orderID,
            orderDetail: paymentData.orderDetail
        };
    
        console.log('Payload to be sent:', payload);
    };


    // Old Code
    //const { steps, currentStep, step, isFirstStep, isFinalStep, next, back } = UseMultipleStepForm([<TypeOfBookingForm setFormData={setFormData} />, <Calendar setFormData={setFormData} />, <TimeSlot setFormData={setFormData} />, <ConfirmationForm formData={formData} setFormData={setFormData} />, <CheckoutForm />]);

    // ======== Better passing value and handler to the childrens ============
    const { steps, currentStep, step, isFirstStep, isFinalStep, next, back } = UseMultipleStepForm([<TypeOfBookingForm formData={formData} setFormData={setFormData} />,
    <Calendar formData={formData} setFormData={setFormData} openRepeatDialog={handleRepeatDialogOpen}/>,
    <TimeSlots formData={formData} setFormData={setFormData} />,
    <ConfirmationForm formData={formData} setFormData={setFormData} />,
    <CheckoutForm paymentData={paymentData} setPaymentData={setPaymentData}/>]);
    // =======================================================================

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
                                        if (isFinalStep) {
                                            
                                        }
                                    }
                                }}
                            >
                                Bước tiếp
                            </Button>
                        }
                        {isFinalStep && <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>Xác nhận</Button>}
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
                        <RepeatForm onRepeatSelected={handleRepeatSelected}/>
                    </Dialog>
                </Box>
            </Box>
        </Box>
    )
}

export default BookingPageContent
