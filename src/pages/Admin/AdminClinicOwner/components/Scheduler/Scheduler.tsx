import React, { useState, useRef, useEffect } from "react";
import './CalendarTwo.css';
import styles from "./Scheduler.module.css";
import FullCalendar from "@fullcalendar/react";
import { CalendarApi, EventClickArg } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import viLocale from '@fullcalendar/core/locales/vi';
import EventModal from "./components/EventModal";
import { useTheme } from "@mui/material";
import { AppointmentViewModel } from "../../../../../utils/api/ClinicOwnerUtils";
import { getClinicAppointments } from "../../../../../utils/api/ClinicOwnerUtils";

const mockAppointments: AppointmentViewModel[] = [
  {
    BookId: "1",
    appointmentType: "Regular Checkup",
    CustomerFullName: "Nguyen Van A",
    DentistFullname: "Dr. Smith",
    AppointmentDate: "2024-07-01",
    CreationTime: "2024-06-28T10:00:00",
    AppointmentTime: "2024-07-01T08:30:00",
    ExpectedEndTime: "2024-07-01T09:00:00",
    PatientNumber: 1,
    ClinicName: "Dental Clinic",
    ClinicAddress: "123 ABC Street, City",
    ClinicPhone: "123-456-7890",
    SelectedServiceName: "Teeth Cleaning",
    FinalFee: 50,
    IsRecurring: false,
    BookingStatus: "Confirmed",
  },
  {
    BookId: "2",
    appointmentType: "Emergency",
    CustomerFullName: "Tran Thi B",
    DentistFullname: "Dr. Johnson",
    AppointmentDate: "2024-07-02",
    CreationTime: "2024-06-28T11:00:00",
    AppointmentTime: "2024-07-02T10:00:00",
    ExpectedEndTime: "2024-07-02T10:30:00",
    PatientNumber: 2,
    ClinicName: "Emergency Dental Care",
    ClinicAddress: "456 XYZ Avenue, Town",
    ClinicPhone: "987-654-3210",
    SelectedServiceName: "Tooth Extraction",
    FinalFee: 100,
    IsRecurring: false,
    BookingStatus: "Confirmed",
  },
  {
    BookId: "3",
    appointmentType: "Regular Checkup",
    CustomerFullName: "Pham Van C",
    DentistFullname: "Dr. Brown",
    AppointmentDate: "2024-07-03",
    CreationTime: "2024-06-28T12:00:00",
    AppointmentTime: "2024-07-03T13:30:00",
    ExpectedEndTime: "2024-07-03T14:00:00",
    PatientNumber: 3,
    ClinicName: "Dental Wellness Center",
    ClinicAddress: "789 Main Road, Village",
    ClinicPhone: "111-222-3333",
    SelectedServiceName: "Dental Fillings",
    FinalFee: 80,
    IsRecurring: false,
    BookingStatus: "Confirmed",
  },
];
// Render event content
function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.event.title}</b><br />
    </>
  );
}

const App: React.FC = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [allBookings, setAllBookings] = useState<AppointmentViewModel[]>(mockAppointments);
  const [selectedBooking, setSelectedBooking] = useState<AppointmentViewModel | undefined>(undefined);
  const [modalOpen, setModalOpen] = useState(false);

  // useEffect(() => {
  //   fetchAppointments(); // Fetch appointments on component mount
  // }, []);

  // const fetchAppointments = async () => {
  //   try {
  //     const appointments = await getClinicAppointments(1);
  //     setAllBookings(appointments);
  //   } catch (error) {
  //     console.error('Error fetching appointments:', error);
  //     // Handle error fetching appointments
  //   }
  // };

  const handleSaveBooking = (updatedBooking: AppointmentViewModel) => {
    const updatedBookings = allBookings.map((b) =>
      b.BookId === updatedBooking.BookId ? updatedBooking : b
    );
    setAllBookings(updatedBookings);
    setModalOpen(false);
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    const { event } = clickInfo;
    setSelectedBooking(event.extendedProps as AppointmentViewModel);
    setModalOpen(true);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const events = allBookings.map((booking) => ({
    id: booking.BookId.toString(),
    title: booking.CustomerFullName,
    start: booking.AppointmentTime, // ISO string format
    end: booking.ExpectedEndTime, // ISO string format
    extendedProps: booking,
    className: 'custom-event-class'
  }));


  const slotLabelContent = (info: any) => {
    const start = info.date;
    const end = new Date(start);
    end.setMinutes(end.getMinutes() + 30);

    const startStr = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    const endStr = end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

    return `${startStr} - ${endStr}`;
  };


  return (
    <div className={styles.mainContainer}>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.rowContainer}>
            <div className={styles.fullColumn}>
              <div className="calendar-two">
                <FullCalendar
                  ref={calendarRef}
                  locale={viLocale}
                  events={events}
                  contentHeight="auto"
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
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
                  editable={false}
                  selectable={true}
                  nowIndicator={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  weekends={weekendsVisible}
                  eventClick={handleEventClick}
                  slotLabelContent={slotLabelContent}
                  slotDuration={'00:30:00'}
                  slotLabelInterval={'00:30:00'}
                  slotMinTime={'06:00:00'}
                  slotMaxTime={'21:00:00'}
                  firstDay={0}
                />
              </div>
              <EventModal
                isOpen={modalOpen}
                toggle={toggleModal}
                appointment={selectedBooking}
                onSave={handleSaveBooking}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
