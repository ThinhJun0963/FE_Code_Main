import { SetStateAction, useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import viLocale from '@fullcalendar/core/locales/vi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Accordion, Box, Typography } from '@mui/material';
import './Calendar.css';
import { TimeSlot } from '../TimeSlots/data';
import { BookingInformation, SetBookingInformation } from '../../../../utils/interfaces/interfaces';

interface CalendarFormProps {
  // formData: { clinic: string, typeOfBooking: string; date: string; time: TimeSlot; is_repeated: number; dentist: string, service: string },
  // setFormData: (value: SetStateAction<{ clinic: string, typeOfBooking: string; date: string; time: TimeSlot; is_repeated: number; dentist: string, service: string }>) => void

  formData: BookingInformation,
  setFormData: SetBookingInformation,
  openRepeatDialog: () => void;
}

export default function BasicDateCalendar({ formData, setFormData, openRepeatDialog }: CalendarFormProps) {

  const today = new Date();

  const events = [
    {
      allDay: true,
      start: formData.date,
      end: formData.date,
      backgroundColor: "#1BF045",
      display: "background",
      opacity: 0,
      type: "1",
    },

    {
      allDay: true,
      start: '2024-06-14',
      end: '2024-06-14',
      backgroundColor: "#EA1700",
      display: "background",
      opacity: 0,
      type: "2",
    },

  ];

  const handleDateClick = (event: DateClickArg) => {

    // Debuging purposes
    console.log('old date:', formData.date);
    console.log('new date: ', event.dateStr);

    let is_available = true;
    //useEffect fetch data
    events.forEach((value,) => { if (value.start == event.dateStr) { is_available = false } });

    // Actual Form data setting.
    if (is_available) {
      setFormData(prevState => ({ ...prevState, date: event.dateStr }));
      openRepeatDialog();
    }

  };


  //Custom title for the calendar
  //-----------------------------------------------------------------------------------
  const formatDateTitle = (dateInfo: { start: Date }) => {
    const monthNames = [
      "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
      "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
    ];
    const monthName = monthNames[dateInfo.start.getMonth()];
    return `${monthName} năm ${dateInfo.start.getFullYear()}`;
  };

  const updateTitle = (dateInfo: { start: Date }) => {
    const titleElement = document.querySelector('.fc-toolbar-title');
    if (titleElement) {
      titleElement.textContent = formatDateTitle(dateInfo);
    }
  };

  useEffect(() => {
    const calendarApi = (document.querySelector('.fc') as any)?.__fullCalendar;
    if (calendarApi) {
      const currentDate = calendarApi.getCurrentData().viewTitle;
      updateTitle({ start: new Date(currentDate) });
    }
  }, []);

  const handleDatesSet = (dateInfo: { start: Date }) => {
    updateTitle(dateInfo);
  };
  //-----------------------------------------------------------------------------------

  // =============================== fetching available dates  ===============================
  // useEffect( () => {
  //   // Get data about available dates.
  //   const params = {clinic: formData.clinic, size: 31, start: today};
  //   const url = connection_path.base_url + connection_path.api + connection_path.booking.available_date
  //   axios.get(url, {params})
  //   .then(response => {
  //     response.data.map((days, index) => {
  //       events.push({allDay: true, start: days.date, end: days.date, backgroundColor: "#EA1700", display: "background", opacity: 0, type: "2"})
  //     });
  //   })
  //   .catch((error) => {
  //     // Do some error catching here
  //   })
  // });
  // =========================================================================================



  return (
    <Box sx={{ margin: 'auto' }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        viewClassNames="custom-calendar"
        locale={viLocale}
        headerToolbar={{
          left: 'title',
          center: '',
          right: 'prev next'
        }}
        datesSet={handleDatesSet}
        fixedWeekCount={false}
        showNonCurrentDates={false}
        dateClick={(event) => handleDateClick(event)}
        validRange={{
          start: today.toISOString().split('T')[0]
        }}
        events={events}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: '15px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FontAwesomeIcon icon={faCircle} style={{ color: "#dbeaff", fontSize: "18px" }} />
          <Typography variant="body2" sx={{ color: "#000000", fontSize: '18px' }}>Hôm nay</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FontAwesomeIcon icon={faCircle} style={{ color: "#bbfbc7", fontSize: "18px", padding: 0 }} />
          <Typography variant="body2" sx={{ color: "#000000", fontSize: '18px' }}>Ngày đang chọn</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FontAwesomeIcon icon={faCircle} style={{ color: "#EA1700", fontSize: "18px", padding: 0 }} />
          <Typography variant='body2' sx={{ color: "#000000", fontSize: '18px' }}>Ngày đã đầy lịch</Typography>
        </Box>
      </Box>
    </Box>
  );
}

