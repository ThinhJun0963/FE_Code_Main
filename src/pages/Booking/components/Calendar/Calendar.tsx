import { SetStateAction, useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import viLocale from '@fullcalendar/core/locales/vi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Accordion, Box, Checkbox, Dialog, DialogContent, FormControlLabel, Typography } from '@mui/material';
import styles from './Calendar.module.css';
import './CalendarOne.css'
import TimeSlots from '../TimeSlots/TimeSlots';
import { BookingInformation, SetBookingInformation, TimeSlot } from '../../../../utils/interfaces/interfaces';

interface CalendarFormProps {
  formData: BookingInformation,
  setFormData: SetBookingInformation,
  onStepComplete: () => void
}

export default function BasicDateCalendar({ formData, setFormData, onStepComplete }: CalendarFormProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);

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
      setSelectedDate(event.dateStr);
      setIsDialogOpen(true);
    }
    console.log('new date:', formData.date);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSlotSelected = (selectedSlot: TimeSlot) => {
    setFormData(prevState => ({ ...prevState, time: selectedSlot }));
    onStepComplete();
  };

  const handleIsRecurringChange = () => {
    setIsRecurring(!isRecurring);
    setFormData(prevState => ({ ...prevState, is_repeated: isRecurring ? 0 : 1 }));
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

  // =============================== fetching available dates  ===============================
  // useEffect( () => {
  //   // Get data about available dates.
  //   const params = {clinic: formData.clinic, size: 31, start: today};
  //   const url = connection_path.base_url + connection_path.api + connection_path.booking.available_date
  //   axios.get(url, {params})
  //   .then(response => {
  //     response.data.map((days, index) => {
  //       events.push({allDay: true, start: days.date, end: days.date, backgroundColor: "#EA1700", display: "background", opacity: 0, type: "2"})
  //     });
  //   })
  //   .catch((error) => {
  //     // Do some error catching here
  //   })
  // });
  // =========================================================================================


  return (
    <Box className={styles.container}>
      <Box className={styles.headerBox}>
        <Box className={styles.header}>Chọn ngày khám</Box>
      </Box>
      <Box className={styles.calendarContainer}>
        <div className="calendar-one">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            contentHeight="auto"
            initialView="dayGridMonth"
            viewClassNames="custom-calendar"
            locale={viLocale}
            datesSet={handleDatesSet}
            headerToolbar={{
              left: 'prev',
              center: 'title',
              right: 'next'
            }}
            fixedWeekCount={false}
            showNonCurrentDates={false}
            dateClick={(event) => handleDateClick(event)}
            validRange={{
              start: today.toISOString().split('T')[0]
            }}
            events={events}
          />
        </div>
      </Box>
      <Box className={styles.legendContainer}>
        <Box className={styles.legendItem}>
          <FontAwesomeIcon icon={faCircle} className={styles.legendIcon} style={{ color: "#dbeaff" }} />
          <Typography variant="body2" className={styles.legendText}>Hôm nay</Typography>
        </Box>

        <Box className={styles.legendItem}>
          <FontAwesomeIcon icon={faCircle} className={styles.legendIcon} style={{ color: "#bbfbc7" }} />
          <Typography variant="body2" className={styles.legendText}>Ngày đang chọn</Typography>
        </Box>

        <Box className={styles.legendItem}>
          <FontAwesomeIcon icon={faCircle} className={styles.legendIcon} style={{ color: "#EA1700" }} />
          <Typography variant="body2" className={styles.legendText}>Ngày đã đầy lịch</Typography>
        </Box>
      </Box>

      <Box className={styles.checkboxContainer}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isRecurring}
              onChange={handleIsRecurringChange}
            />
          }
          label="Định kì"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={!isRecurring}
              onChange={handleIsRecurringChange}
            />
          }
          label="Không định kì"
        />
      </Box>

      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        className={styles.timeSlotContainer}
        PaperProps={{
          sx: {
            border: '2px solid #e0e4e5',
            borderRadius: '30px',
            width: '550px',
            height: 'auto',
            padding: '2px',
          },
        }}
      >
        {selectedDate && (
          <DialogContent className={styles.timeSlot}>
            <TimeSlots
              formData={formData}
              setFormData={setFormData}
              onClose={handleCloseDialog}
              onSlotSelect={handleSlotSelected}
            />
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
}



