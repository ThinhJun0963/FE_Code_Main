import React, { Dispatch, SetStateAction, useState } from 'react';
import { Box, Breadcrumbs, Button, Dialog, DialogTitle, Divider, Link, Typography } from '@mui/material';
import UseMultipleStepForm from '../../../components/UseMultipleStepForm/UseMultipleStepForm';
import TypeOfBookingForm from './TypeOfBookingForm/TypeOfBookingForm';
import Calendar from './Calendar/Calendar';
import TimeSlots from '../components/TimeSlots/TimeSlots';
import ConfirmationForm from './CofirmationForm/ConfirmationForm';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import BookingStepper from './Stepper/Stepper';
import ServicesForm from '../components/ServicesForm/ServicesForm';
import RepeatForm from './RepeatForm/RepeatForm';
import { useNavigate, useParams } from 'react-router-dom';
import { BookingInformation, SetBookingInformation, PaymentInformation, BookingRegistrationModel, clinicService, TimeSlot } from '../../../utils/interfaces/interfaces';
import { handleBookingRegister } from '../../../utils/api/BookingRegister';
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

import styles from './BookingPageContent.module.css';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const BookingPageContent = () => {
    const { clinicId } = useParams<{ clinicId: string }>();
    const navigator = useNavigate();

    // ================= Booking information =============================
    const [formData, setFormData]: [BookingInformation, SetBookingInformation] = useState({
        clinic: clinicId || '',
        typeOfBooking: '',
        date: '',
        dentist: '2',
        is_repeated: 0,
        time: { id: '', start: '', end: '' },
        service: '',
    });

    const [paymentData, setPaymentData]: [PaymentInformation, Dispatch<SetStateAction<PaymentInformation>>] = useState({
        paymentMethod: '',
        amount: '',
        orderID: '',
        orderDetail: '',
    });
    // ================================================================

    const [alertMessage, setAlertMessage] = useState('');
    const [serviceDialogOpen, setServiceDialogOpen] = useState(false);
    const [repeatDialogOpen, setRepeatDialogOpen] = useState(false);

    const handleRepeatDialogClose = () => {
        setRepeatDialogOpen(false);
    };

    console.log("Type of booknig" + formData.typeOfBooking);
    console.log("Date" + formData.date);
    console.log("Time" + formData.time.start + " - " + formData.time.end);
    console.log("Clinic" + formData.clinic);
    console.log("Dentist" + formData.dentist);
    console.log("Service" + formData.service);
    console.log("Is repeated" + formData.is_repeated);
    console.log("Payment method" + paymentData.paymentMethod);

    const { steps, currentStep, step, isFirstStep, isFinalStep, next, back } = UseMultipleStepForm([
        <TypeOfBookingForm formData={formData} setFormData={setFormData} onStepComplete={() => next()} />,
        // <Calendar formData={formData} setFormData={setFormData} openRepeatDialog={handleRepeatDialogOpen} openSlotSelectingDialog={ } />,
        <Calendar
            formData={formData}
            setFormData={setFormData}
            onStepComplete={() => next()}
        />,
        // <TimeSlots formData={formData} setFormData={setFormData} onSlotSelect={() => handleSlotSelected} onClose={() => handleClose} />,
        <ConfirmationForm formData={formData} setFormData={setFormData} />,
        <CheckoutForm paymentData={paymentData} setPaymentData={setPaymentData} />,
    ]);


    const handleBack = () => {
        if (currentStep === 1) { // Type of booking step
            setFormData(prev => ({ ...prev, typeOfBooking: '' }));
        } else if (currentStep === 2) { // TimeSlots, Calendar step 
            setFormData(prev => ({ ...prev, time: { id: '', start: '', end: '' }, date: '' }));
        }

        back();
    };


    const payload: BookingRegistrationModel = {
        TimeSlotId: "feb80d31-e4b5-4ec0-9733-799976b318d0",
        AppointmentDate: formData.date,
        CustomerId: 1,
        DentistId: 2,
        ClinicId: parseInt(formData.clinic),
        ServiceId: null,
        RepeatCount: formData.is_repeated ? 1 : 0,
        IsRecurring: true,
    };

    return (
        <Box className={styles.container}>
            <Box className={styles.breadcrumbsContainer}>
                <Breadcrumbs separator={<Typography sx={{ color: '#FFFFFF', mx: 1, fontWeight: 'bold' }}>/</Typography>}>
                    <Link underline="hover" href="/" sx={{ fontSize: 22, color: ' #F8F8F8' }}>
                        Trang chủ
                    </Link>
                    <Box sx={{ fontSize: 24, color: ' #F8F8F8' }}>Trang đặt khám</Box>
                </Breadcrumbs>
            </Box>
            <Box className={styles.contentBox}>
                <Box className={`${styles.content} ${currentStep === 2 ? styles.step2 : ''}`}>
                    {currentStep !== 2 &&
                        <Box className={styles.informationTab}>
                            <Box className={styles.heading}>
                                Thông tin đặt khám
                            </Box>
                            <Box className={styles.informationTabContent}>
                                <Box>Phòng khám: {formData.clinic}</Box>
                                <Box>Hình thức khám: {formData.typeOfBooking}</Box>
                                <Box>Ngày khám: {formData.date}</Box>
                                <Box>Slot: {formData.time.start} - {formData.time.end}</Box>
                                <Box>Dịch vụ: </Box>
                                <Box>Lặp lại: {formData.is_repeated ? 'Có' : 'Không'}</Box>
                            </Box>
                        </Box>}
                    <Box className={styles.formContainer}>
                        {step}
                    </Box>
                </Box>
                <Box className={`${styles.buttonContainer} ${currentStep === 2 ? styles.step2 : ''}`}>
                    {!isFirstStep && (
                        <Button variant="text" className={styles.backButton} onClick={handleBack}>
                            <ArrowBack />
                            Quay lại
                        </Button>
                    )}
                    {currentStep == 2 && <Button variant="text" className={styles.nextButton} onClick={() => next()}>
                        <ArrowForward />
                        Xác nhận
                    </Button>}
                    {isFinalStep && <Button variant="contained" color="primary" type="submit" onClick={() => handleBookingRegister(payload, navigator)}>Xác nhận</Button>}
                </Box>
            </Box>
        </Box>
    );
};

export default BookingPageContent;

{/* <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{alertMessage}</DialogTitle>
            </Dialog>
            <Dialog open={serviceDialogOpen} onClose={handleServiceDialogClose} maxWidth="md" fullWidth className={styles.dialog}>
                <ServicesForm onServiceSelected={handleServiceSelected} />
            </Dialog>
            <Dialog open={repeatDialogOpen} onClose={handleRepeatDialogClose} maxWidth="md" className={styles.repeatDialog}>
                <RepeatForm onRepeatSelected={handleRepeatSelected} />
            </Dialog> */}


{/* {!isFirstStep && <Button variant="contained" onClick={back}>Bước trước</Button>}
                        {!isFinalStep && (
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
                        )} */}