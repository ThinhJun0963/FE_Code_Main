import { Box, Button, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import { BookingInformation, SetBookingInformation, TimeSlot } from '../../../../utils/interfaces/interfaces';

//========================== Mock data ========================
import { mockTimeSlots } from '../../../../utils/mockData';
//=============================================================


interface TimeSlotsFormProps {
    formData: BookingInformation;
    setFormData: SetBookingInformation;
    onSlotSelect: (time: TimeSlot) => void; // Callback for slot selection
    onClose: () => void;
}

const TimeSlots = ({ formData, setFormData, onClose, onSlotSelect }: TimeSlotsFormProps) => {


    const handleSlotClick = (time: TimeSlot) => {
        // Debuging purposes
        console.log('old date:', formData.time);
        console.log('new time: ', time);
        setFormData(prevState => ({ ...prevState, time }));
        onSlotSelect(time); 
        onClose();
    }

    // =============================== Proposed solution ======================================
    const morningSlots: Array<TimeSlot> = mockTimeSlots.filter(slot => {
        const startTime = slot.start;
        const [hour] = startTime.split(':');
        return parseInt(hour, 10) < 12;
    })

    const afternoonSlots: Array<TimeSlot> = mockTimeSlots.filter(slot => {
        const startTime = slot.start;
        const [hour] = startTime.split(':');
        return parseInt(hour, 10) > 12;
    })


    // =============================== fetching available time ================================
    //   useEffect( () => {
    //     // Get data about available time slot.
    //     const params = {clinic: formData.clinic, date: formData.date};
    //     const url = connection_path.base_url + connection_path.api + connection_path.booking.available_slot
    //
    //     axios.get(url, {params})
    //     .then(response => {
    //       response.data.map((slot, index) => {
    //         slots.push({id: slot.id, start: slot.startTime, end: slot.endTime})
    //       }); 
    //     })
    //     .catch((error) => {
    //       // Do some error catching here
    //     })
    //   });
    // =========================================================================================

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6">Buổi sáng</Typography>
            <Divider sx={{ backgroundColor: 'black', width: '95%', margin: '2px auto' }} />
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                {morningSlots.map((time, index) => (
                    <Button key={index}
                        variant={formData.time.id === time.id ? 'contained' : 'outlined'}
                        onClick={() => handleSlotClick(time)}
                    >
                        {time.start} - {time.end}
                    </Button>
                ))}
            </Box>


            <Typography variant="h6">Buổi chiều</Typography>
            <Divider sx={{ backgroundColor: 'black', width: '95%', margin: '2px auto' }} />
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                {afternoonSlots.map((time, index) => (
                    <Button key={index}
                        variant={formData.time.id === time.id ? 'contained' : 'outlined'}
                        onClick={() => handleSlotClick(time)}
                    >
                        {time.start} - {time.end}
                    </Button>
                ))}
            </Box>
        </Box>
    )
}

export default TimeSlots