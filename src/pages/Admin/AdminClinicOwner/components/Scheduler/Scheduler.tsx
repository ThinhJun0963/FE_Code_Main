import React, { useState, useRef, useEffect } from "react";
import './CalendarTwo.css';
import styles from "./Scheduler.module.css";
import FullCalendar from "@fullcalendar/react";
import { CalendarApi, EventClickArg } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import EventModal from "./components/EventModal";

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

// Mock data
const predefinedBookings: Booking[] = [
  {
    id: "1",
    start: "2024-06-23T09:00:00",
    end: "2024-06-23T10:00:00",
    date: "2024-06-23",
    customerName: "John Doe",
    dentistName: "Dr. Smith",
    serviceType: "Cleaning",
    duration: 60, // Duration in minutes
    dentistStatus: "Có mặt",
    bookingStatus: "Đã xác nhận",
  },
  {
    id: "2",
    start: "2024-06-23T10:00:00",
    end: "2024-06-23T11:00:00",
    date: "2024-06-23",
    customerName: "Jane Roe",
    dentistName: "Dr. Brown",
    serviceType: "Filling",
    duration: 60, // Duration in minutes
    dentistStatus: "Bận",
    bookingStatus: "Đang chờ xác nhận",
  },
  // Add more mock data here
];

// Render event content
function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.event.title}</b><br />
      {/* <i>{eventInfo.event.extendedProps.serviceType}</i><br /> */}
    </>
  );
}

const App: React.FC = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [allBookings, setAllBookings] = useState<Booking[]>(predefinedBookings);
  const [selectedBooking, setSelectedBooking] = useState<Booking | undefined>(undefined);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBookingType, setSelectedBookingType] = useState<string>("Khám");
  const [checkupDuration, setCheckupDuration] = useState<number>(45);
  const [treatmentDuration, setTreatmentDuration] = useState<number>(90);

  useEffect(() => {
    console.log('allBookings', allBookings)
    calendarRef.current?.getApi().refetchEvents()
  }, [allBookings])

  const handleSaveBooking = (updatedBooking: Booking) => {
    const updatedBookings = allBookings.map((b) =>
      b.id === updatedBooking.id ? updatedBooking : b
    );
    setAllBookings(updatedBookings);
    setModalOpen(false);
  };

  const handleDeleteBooking = (id: string) => {
    const updatedBookings = allBookings.filter((booking) => booking.id !== id);
    setAllBookings(updatedBookings);
    setModalOpen(false);
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    const { event } = clickInfo;
    const isoStart = event.startStr;
    const datePart = isoStart.slice(0, 10);
    const startTime = `${datePart}T${event.startStr.slice(11, 16)}:00+07:00`;
    const endTime = `${datePart}T${event.endStr.slice(11, 16)}:00+07:00`;

    setSelectedBooking({
      id: event.id,
      start: startTime,
      end: endTime,
      date: datePart,
      customerName: event.extendedProps.customerName,
      dentistName: event.extendedProps.dentistName,
      serviceType: event.extendedProps.serviceType,
      duration: event.extendedProps.duration,
      dentistStatus: event.extendedProps.dentistStatus,
      bookingStatus: event.extendedProps.bookingStatus,
    });

    setModalOpen(true);
  };

  const addBooking = (data: DateClickArg, serviceType: string) => {
    const localOffset = new Date().getTimezoneOffset() * 60000;
    const startDate = new Date(new Date(data.date).getTime() - localOffset);
    let endDate: Date;

    if (serviceType === "Khám") {
      endDate = new Date(startDate.getTime() + checkupDuration * 60000);
    } else if (serviceType === "Điều trị") {
      endDate = new Date(startDate.getTime() + treatmentDuration * 60000);
    } else {
      return;
    }

    const startTimeString = startDate.toISOString().slice(0, 16) + ":00+07:00";
    const endTimeString = endDate.toISOString().slice(0, 16) + ":00+07:00";

    const newBooking: Booking = {
      id: `booking-${Date.now()}`,
      start: startTimeString,
      end: endTimeString,
      date: startDate.toISOString().slice(0, 10),
      customerName: "New Customer",
      dentistName: "New Dentist",
      serviceType: serviceType,
      duration: serviceType === "Khám" ? checkupDuration : treatmentDuration,
      dentistStatus: "Có mặt",
      bookingStatus: "Đang chờ xác nhận"
    };

    setAllBookings([...allBookings, newBooking]);
    console.log('newBooking', newBooking);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.durationControl}>
            <div className={styles.bookingType}>
              <input type="radio" id="checkup" name="bookingType" value="Khám" checked={selectedBookingType === "Khám"} onChange={() => setSelectedBookingType("Khám")} />
              <label htmlFor="checkup">Khám</label>
              <input type="radio" id="treatment" name="bookingType" value="Điều trị" checked={selectedBookingType === "Điều trị"} onChange={() => setSelectedBookingType("Điều trị")} />
              <label htmlFor="treatment">Điều trị</label>
            </div>
            <div className={styles.durationInputs}>
              <div>
                <label htmlFor="checkupDuration">Thời gian khám tổng quát:</label>
                <input
                  type="number"
                  id="checkupDuration"
                  value={checkupDuration}
                  onChange={(e) => setCheckupDuration(parseInt(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="treatmentDuration">Thời gian điều trị:</label>
                <input
                  type="number"
                  id="treatmentDuration"
                  value={treatmentDuration}
                  onChange={(e) => setTreatmentDuration(parseInt(e.target.value))}
                />
              </div>
            </div>
          </div>
          <div className={styles.rowContainer}>
            <div className={styles.fullColumn}>
              <div className="calendar-two">
                <FullCalendar
                  ref={calendarRef}
                  events={allBookings.map((booking) => ({
                    id: booking.id,
                    title: booking.customerName,
                    start: booking.start,
                    end: booking.end,
                    extendedProps: {
                      customerName: booking.customerName,
                      dentistName: booking.dentistName,
                      serviceType: booking.serviceType,
                      dentistStatus: booking.dentistStatus,
                      duration: booking.duration,
                      bookingStatus: booking.bookingStatus,
                    },
                  }))}
                  contentHeight="auto"
                  plugins={[dayGridPlugin,timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    left: "prev,next",
                    center: "title",
                    right: "today,dayGridMonth,timeGridWeek,timeGridDay"
                  }}
                  buttonText={{
                    today: "Hôm nay",
                    month: "Xem theo tháng",
                    week: "Xem theo tuần",
                    day: "Xem theo ngày",
                  }}
                  eventContent={renderEventContent}
                  initialView="timeGridWeek"
                  editable={true}
                  selectable={true}
                  nowIndicator={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  weekends={weekendsVisible}
                  dateClick={(data) => addBooking(data, selectedBookingType)}
                  eventClick={handleEventClick}
                  slotMinTime="08:00:00"
                  slotMaxTime="18:00:00"
                />
              </div>
            </div>
            <EventModal
              isOpen={modalOpen}
              toggle={toggleModal}
              booking={selectedBooking}
              onSave={handleSaveBooking}
              onDelete={handleDeleteBooking}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
