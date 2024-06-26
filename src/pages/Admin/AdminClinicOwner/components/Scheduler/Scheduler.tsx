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

interface Booking {
  id: string;
  start: string;
  end: string;
  date: string;
  customerName: string;
  dentistName: string;
  serviceType: string;
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
    dentistStatus: "Bận",
    bookingStatus: "Đang chờ xác nhận",
  },
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

const App: React.FC = (open) => {
  const calendarRef = useRef<FullCalendar>(null);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [allBookings, setAllBookings] = useState<Booking[]>(predefinedBookings);
  const [selectedBooking, setSelectedBooking] = useState<Booking | undefined>(undefined);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    console.log('allBookings', allBookings)
    calendarRef.current?.getApi().refetchEvents()
  }, [allBookings])

  useEffect(() => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      const updateTitle = (dateInfo: { start: Date }) => {
        const titleElement = document.querySelector('.fc-toolbar-title');
        if (titleElement) {
          titleElement.textContent = formatDateTitle(dateInfo);
        }
      };

      calendarApi.on('datesSet', updateTitle);

      updateTitle({ start: calendarApi.view.activeStart });

      return () => {
        calendarApi.off('datesSet', updateTitle);
      };
    }
  }, []);

  // const handleSaveBooking = (updatedBooking: Booking) => {
  //   const updatedBookings = allBookings.map((b) =>
  //     b.id === updatedBooking.id ? updatedBooking : b
  //   );
  //   setAllBookings(updatedBookings);
  //   setModalOpen(false);
  // };


  function formatDateTitle(dateInfo: { start: Date }): string {
    const startDate = dateInfo.start;
    const weekRange = getWeekRange(startDate, 'vi-VN');

    const formatter = new Intl.DateTimeFormat("vi-VN", {
      month: "long",
      year: "numeric",
    });

    if (weekRange[0].getMonth() === weekRange[1].getMonth()) {
      // Same month
      const monthYear = formatter.format(startDate).replace("tháng", "Tháng");
      return `${weekRange[0].getDate()} – ${weekRange[1].getDate()} ${monthYear}`;
    } else {
      // Different months
      const startMonthYear = formatter.format(weekRange[0]).replace("tháng", "Tháng");
      console.log('startMonthYear', startMonthYear)
      const endMonthYear = formatter.format(weekRange[1]).replace("tháng", "Tháng");
      console.log('endMonthYear', endMonthYear)

      // Only include the year in the first part if it's different from the current year
      const currentYear = new Date().getFullYear();
      console.log('currentYear', currentYear)
      const includeYearInStart = weekRange[0].getFullYear() !== currentYear;
      console.log('includeYearInStart', includeYearInStart)

      return `${weekRange[0].getDate()} ${includeYearInStart ? startMonthYear : startMonthYear.split(' ')[0]} ${startMonthYear.split(' ')[1]} - ${weekRange[1].getDate()} ${endMonthYear}`;
    }
  }

  function getWeekRange(date: Date, locale: string): [Date, Date] {
    const day = date.getDay();
    const diff = date.getDate() - day;

    const startOfWeek = new Date(date.setDate(diff));
    const endOfWeek = new Date(date.setDate(diff + 6));

    return [startOfWeek, endOfWeek];
  }




  // const handleEventClick = (clickInfo: EventClickArg) => {
  //   const { event } = clickInfo;
  //   const isoStart = event.startStr;
  //   const datePart = isoStart.slice(0, 10);
  //   const startTime = `${datePart}T${event.startStr.slice(11, 16)}:00+07:00`;
  //   const endTime = `${datePart}T${event.endStr.slice(11, 16)}:00+07:00`;

  //   setSelectedBooking({
  //     id: event.id,
  //     start: startTime,
  //     end: endTime,
  //     date: datePart,
  //     customerName: event.extendedProps.customerName,
  //     dentistName: event.extendedProps.dentistName,
  //     serviceType: event.extendedProps.serviceType,
  //     dentistStatus: event.extendedProps.dentistStatus,
  //     bookingStatus: event.extendedProps.bookingStatus,
  //   });

  //   setModalOpen(true);
  // };

  // const toggleModal = () => {
  //   setModalOpen(!modalOpen);
  // };

  return (
    // <div className={styles.mainContainer} style={{ width: open ? "calc(100% - 240px)" : "100%" }}>
    <div className={styles.mainContainer} >
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.rowContainer}>
            <div className={styles.fullColumn}>
              <div className="calendar-two">
                <FullCalendar
                  ref={calendarRef}
                  locale={viLocale}
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
                      bookingStatus: booking.bookingStatus,
                    },
                    className: 'custom-event-class'
                  }))}
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
                  selectable={false}
                  nowIndicator={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  weekends={weekendsVisible}
                  // eventClick={handleEventClick}
                  slotMinTime="07:00:00"
                  slotMaxTime="18:00:00"
                  firstDay={0}
                />
              </div>
              {/* <EventModal
                isOpen={modalOpen}
                toggle={toggleModal}
                booking={selectedBooking}
                onSave={handleSaveBooking}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
