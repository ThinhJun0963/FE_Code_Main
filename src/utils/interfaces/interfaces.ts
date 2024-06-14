//-------------------------------------------

import { SetStateAction, useState } from "react";

//-------------------------------
//Trang ClinicDetail
interface clinicService {
    serviceId: string;
    serviceName: string;
  }

interface Clinic {
    clinic_id: number;
    logo: string;
    images: string[];
    imageToShow: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    open_hour: string;
    close_hour: string;
    description: string;
    services: clinicService[];
}

interface TimeSlot {
    id: string,
    start: string,
    end: string,
}

//-------------------------------


//-------------------------------
//Trang Booking
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

interface CheckoutFormProps {
    paymentData: {
        paymentMethod: string,
        amount: string,
        orderID: string,
        orderDetail: string
    },
    setPaymentData: (
        value: SetStateAction<{
            paymentMethod: string,
            amount: string,
            orderID: string,
            orderDetail: string
        }>) => void;
}

//-------------------------
//Trang homepage carousel
interface ImageListProps {
    images: string[];
}
//-------------------------

//-------------------------------------------------