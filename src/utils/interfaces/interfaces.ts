//-------------------------------------------

import { SetStateAction, useState } from "react";

//-------------------------------
//Trang ClinicDetail
export interface clinicService {
    serviceId: string;
    serviceName: string;
    // price: number;
    // description: string;
}

export interface databaseService {
    serviceId: string;
    serviceName: string;
}

export interface Clinic {
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
//-------------------------------


//-------------------------------
//Trang Booking
export interface BookingRegistrationModel {
    TimeSlotId: string,
    AppointmentDate: string,
    CustomerId: number,
    DentistId: number,
    ClinicId: number,
    ServiceId: string | null,
    RepeatCount: number,
    IsRecurring: boolean,
}


export interface BookingInformation {
    clinic: string,
    typeOfBooking: string,
    date: string,
    dentist: string,
    //----------------------------------
    is_repeated: number,
    //----------------------------------
    time: TimeSlot,
    // service: '',
    serviceId: string,
    serviceName: string,
}

export interface BookingInformationToSend {
    TimeSlotId: string,
    AppointmentDate: string,
    CustomerId: number,
    DentistId: number,
    ClinicId: number,
    ServiceId: string | null,
    RepeatCount: number,
    IsRecurring: boolean,
}

interface BookingInformationToDisplay {
    StartTime: string, // Thời gian bắt đầu
    EndTime: string,// Thời gian kết thúc
    //Hai cái dưới chắc đi chung với nhau
    //---------------------
    AppointmentDate: string,// Ngày đặt
    DateOfWeek: number, // Thứ trong tuần
    //---------------------
    ClinicName: string,// Tên phòng khám
    //-------------------
    CustomerName: string,// Thông tin cá nhân của khách hàng
    CustomerPhone: string,
    CustomerEmail: string,
    //-------------------
}

export interface SetBookingInformation {
    (value: SetStateAction<BookingInformation>): void;
}

export interface TimeSlot {
    id: string,
    start: string,
    end: string,
}

interface ScheduledSlotsToDisplay {
    Date: string, // Để hiện bên trang lịch nếu đã đặt hay full
    StartTime: string, // Thời gian bắt đầu
    EndTime: string, // Thời gian kết thúc
    ClinicId: number, // Để biết của phòng khám nào
    IsFull: boolean, // Để biết đầy hay không
}

interface ScheduledSlotsToSend {
    Date: string, // Ngày trả về backend
    ClinicId: number, // Clinic ID trả về backend
    DateOfWeek: number, // Ngày trong tuần trả về backend
    SlotId: string, // Slot ID trong bảng slot trả về backend
}



export interface PaymentInformation {
    paymentMethod: string,
    amount: string,
    orderID: string,
    orderDetail: string,
}

export interface CheckoutFormProps {
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


//-------------------------
//Trang clinic register

interface Service {
    serviceId: string;
    serviceName: string;
}

interface FormData {
    name: string;
    address: string;
    phone: string;
    email: string;
    openHour: string;
    closeHour: string;
    clinicServices: Service[];
    certifications: string[];
}


//-------------------------

//-------------------------------------------------