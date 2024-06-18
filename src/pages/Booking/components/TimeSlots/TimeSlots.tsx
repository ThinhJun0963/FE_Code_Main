import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { BookingInformation, SetBookingInformation, TimeSlot } from '../../../../utils/interfaces/interfaces';

//========================== Mock data ========================
import { mockTimeSlots } from '../../../../utils/mockData';
//=============================================================


interface TimeSlotsFormProps {
    // formData: { clinic: string, typeOfBooking: string; date: string; is_repeated: number; time: TimeSlot; dentist: string, service: string },
    // setFormData: (value: SetStateAction<{ clinic: string, typeOfBooking: string; date: string; is_repeated: number; time: TimeSlot; dentist: string, service: string }>) => void
    formData: BookingInformation,
    setFormData: SetBookingInformation
}

const TimeSlots = ({ formData, setFormData }: TimeSlotsFormProps) => {


    const [slot, setSlot] = useState<TimeSlot | null>(formData.time);

    const handleSlotClick = (time: TimeSlot) => {
        // Debuging purposes
        console.log('old date:', formData.time);
        console.log('new time: ', time);

        setSlot(time);
        //useEffect(() => {})
        setFormData(prevState => ({
            ...prevState,
            time: time
        }));
    }

    /*const morningSlots = slots.filter(slot => {
        const startTime = slot.split('-')[0];
        const [hour] = startTime.split(':');
        return parseInt(hour, 10) < 12;
    });
    const afternoonSlots = slots.filter(slot => {
        const startTime = slot.split('-')[0];
        const [hour] = startTime.split(':');
        return parseInt(hour, 10) >= 12;
    });*/

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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="h6">Buổi sáng</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                    {morningSlots.map((time, index) => (
                        <Button key={index}
                            variant={slot?.id === time.id ? 'contained' : 'outlined'}
                            onClick={() => handleSlotClick(time)}
                        >
                            {time.start} - {time.end}
                        </Button>
                    ))}
                </Box>


                <Typography variant="h6">Buổi chiều</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                    {afternoonSlots.map((time, index) => (
                        <Button key={index}
                            variant={slot?.id === time.id ? 'contained' : 'outlined'}
                            onClick={() => handleSlotClick(time)}
                        >
                            {time.start} - {time.end}
                        </Button>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default TimeSlots