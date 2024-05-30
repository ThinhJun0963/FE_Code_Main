import { Box, Button, Divider, Typography } from '@mui/material';
import slots from './data';

const TimeSlots = () => {
    const morningSlots = slots.filter(slot => {
        const startTime = slot.split('-')[0];
        const [hour] = startTime.split(':');
        return parseInt(hour, 10) < 12;
    });

    const afternoonSlots = slots.filter(slot => {
        const startTime = slot.split('-')[0];
        const [hour] = startTime.split(':');
        return parseInt(hour, 10) >= 12;
    });

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="h6">Buổi sáng</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                    {morningSlots.map((time, index) => (
                        <Button key={index} variant="contained">
                            {time}
                        </Button>
                    ))}
                </Box>
            </Box>
            <Divider sx={{ backgroundColor: 'black', width: '100%', margin: '1em auto' }} />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="h6">Buổi chiều</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                    {afternoonSlots.map((time, index) => (
                        <Button key={index} variant="contained">
                            {time}
                        </Button>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}


export default TimeSlots