import { SetStateAction, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import viLocale from '@fullcalendar/core/locales/vi';
import { Box } from '@mui/material';
import './Calendar.css';

interface CalendarFormProps {
  setFormData: (value: SetStateAction<{ typeOfBooking: string; date: string; time: string; }>) => void;
}

export default function BasicDateCalendar({ setFormData }: CalendarFormProps) {
  const today = new Date();

  const handleDateClick = (dateStr: string) => {
    console.log('dateStr', dateStr);
    setFormData(prevState => ({
      ...prevState,
      date: dateStr
    }));
  };

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
        dateClick={(event) => handleDateClick(event.dateStr)}
        validRange={{
          start: today.toISOString().split('T')[0]
        }}
      />
    </Box>
  );
}
