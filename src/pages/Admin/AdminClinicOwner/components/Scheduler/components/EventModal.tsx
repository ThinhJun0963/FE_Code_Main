import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from "reactstrap";
import styles from "./EventModal.module.css";

interface Booking {
  id: string;
  start: string;
  end: string;
  date: string;
  customerName: string;
  dentistName: string;
  serviceType: string;
  duration: number;
  dentistStatus?: string;
  bookingStatus?: string;
}

interface EventModalProps {
  isOpen: boolean;
  toggle: () => void;
  booking: Booking | undefined;
  onSave: (booking: Booking) => void;
  onDelete: (id: string) => void;
}

const EventModal: React.FC<EventModalProps> = ({
  isOpen,
  toggle,
  booking,
  onSave,
  onDelete
}) => {
  const [customerName, setCustomerName] = useState<string>("");
  const [dentistName, setDentistName] = useState<string>("");
  const [serviceType, setServiceType] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [duration, setDuration] = useState<number>(0);
  const [dentistStatus, setDentistStatus] = useState<boolean>(false);
  const [bookingStatus, setBookingStatus] = useState<boolean>(false);


  useEffect(() => {
    if (booking) {
      setCustomerName(booking.customerName);
      setDentistName(booking.dentistName);
      setServiceType(booking.serviceType);
      setStartTime(booking.start.slice(11, 16));;
      setDuration(booking.duration || 0);
      setDentistStatus(booking.dentistStatus === "Available");
      setBookingStatus(booking.bookingStatus === "Confirmed");
    }
  }, [booking]);

  const calculateEndDateTime = (startDateTime: string, duration: number): string => {
    const [startHours, startMinutes] = startDateTime.split(":").map(Number);
    const startTimeInMinutes = startHours * 60 + startMinutes;
    const endTimeInMinutes = startTimeInMinutes + duration;
    const endHours = Math.floor(endTimeInMinutes / 60);
    const endMinutes = endTimeInMinutes % 60;

    const formattedEndHours = endHours.toString().padStart(2, "0");
    const formattedEndMinutes = endMinutes.toString().padStart(2, '0');
    return `${formattedEndHours}:${formattedEndMinutes}`;
  };

  const datePart = booking?.start.slice(0, 10);

  const handleSave = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log('booking at modal', booking);
    if (booking) {
      setStartTime(booking.start.slice(11, 16));
      console.log('start at modal', startTime);
      setEndTime(calculateEndDateTime(booking.start.slice(11, 16), booking.duration));
      console.log('end at modal', endTime);
      // const endTime = `${datePart}T${calculateEndDateTime(startTime.slice(11, 16), booking.duration)}:00+07:00`;
      // console.log('endTime at modal', endTime);
      const startTimeString = `${datePart}T${startTime}:00+07:00`;

      const endTimeString = `${datePart}T${endTime}:00+07:00`;


      const returnStartTime = startTimeString;
      const returnEndTime = endTimeString;
      onSave({
        ...booking,
        start: returnStartTime,
        end: returnEndTime,
      });
    }
  };

  const handleDelete = (e: React.FormEvent<HTMLButtonElement>) => {
    if (booking) {
      onDelete(booking.id);
    }
  };

  const handleClose = () => {
    toggle();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "customerName":
        setCustomerName(value);
        break;
      case "dentistName":
        setDentistName(value);
        break;
      case "serviceType":
        setServiceType(value);
        break;
      case "start":
        setStartTime(value);
        setEndTime(calculateEndDateTime(value, duration)); 
        break;
      case "end":
        setEndTime(value);
        break;
      case "duration":
        const newDuration = Number(value);
        setDuration(newDuration);
        setEndTime(calculateEndDateTime(startTime, newDuration)); 
        break;
      default:
        break;
    }
  };


  if (!isOpen || !booking) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Sửa Booking</ModalHeader>
      <ModalBody>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="customerName">Tên bệnh nhân:</label>
            <input
              type="text"
              className="form-control"
              id="customerName"
              name="customerName"
              value={customerName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="dentistName">Nha sĩ:</label>
            <input
              type="text"
              className="form-control"
              id="dentistName"
              name="dentistName"
              value={dentistName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="serviceType">Loại dịch vụ:</label>
            <input
              type="text"
              className="form-control"
              id="serviceType"
              name="serviceType"
              value={serviceType}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="start">Thời gian bắt đầu:</label>
            <input
              type="time"
              className="form-control"
              id="start"
              name="start"
              value={startTime}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="end">Thời gian dự kiến kết thúc:</label>
            <input
              type="time"
              className="form-control"
              id="end"
              name="end"
              value={endTime}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="dentistStatus">Trạng thái nha sĩ:</label>
            <Button
              color={dentistStatus ? "success" : "secondary"}
              className={`${styles.toggleButton} ml-2`}
            >
              {dentistStatus ? "Có mặt" : "Bận"}
            </Button>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="bookingStatus">Booking Status:</label>
            <Button
              color={bookingStatus ? "success" : "secondary"}
              className={`${styles.toggleButton} ml-2`}
            >
              {bookingStatus ? "Đã xác nhận" : "Đang chờ xác nhận"}
            </Button>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={handleDelete}>
          Xóa
        </Button>{" "}
        <Button color="primary" onClick={handleSave}>
          Thay đổi
        </Button>{" "}
        <Button color="secondary" onClick={handleClose}>
          Hủy
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EventModal;