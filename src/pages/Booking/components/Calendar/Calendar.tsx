import { SetStateAction, useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import viLocale from '@fullcalendar/core/locales/vi';
import { Box } from '@mui/material';
import './Calendar.css';
import { connection_path } from '../../../../constants/developments';
import axios from 'axios';
import { TimeSlot } from '../TimeSlots/data';

interface CalendarFormProps 
{
  formData: { clinic: string, typeOfBooking: string; date: string; time: TimeSlot; dentist: string, service: string},
  setFormData: (value: SetStateAction<{ clinic: string, typeOfBooking: string; date: string; time: TimeSlot; dentist: string}>) => void
}

export default function BasicDateCalendar({ formData, setFormData }: CalendarFormProps) {
  
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
      start: '2024-06-11',
      end: '2024-06-11',
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

    events.forEach((value, ) => {if (value.start == event.dateStr) {is_available = false}});
    
    // Actual Form data setting.
    if (is_available) {
      setFormData(prevState => ({ ...prevState, date: event.dateStr}));
    }
    
  };

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
        fixedWeekCount={false}
        showNonCurrentDates={false}
        dateClick={(event) => handleDateClick(event)}
        validRange={{
          start: today.toISOString().split('T')[0]
        }}
        events={events}
      />
    </Box>
  );
}
