import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Paper, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import typeOfBooking from './data'
import Calendar from '../Calendar/BasicDateCalendar'
import TimeSlots from '../TimeSlots/TimeSlots';
import ConfirmationForm from '../CofirmationForm/ConfirmationForm';
import CheckoutForm from '../CheckoutForm/CheckoutForm';


const BookingAccordion = () => {
    return (
        <Box>

            <Accordion sx={{ margin: '1em 0', borderRadius: '3px', backgroundColor: '#ffffff' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography variant='h6' >Chọn hình thức khám</Typography>
                </AccordionSummary>
                <Divider sx={{ backgroundColor: 'black', width: '100%', margin: '1em auto' }} />
                <AccordionDetails>

                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '50px', paddingTop: '10px' }}>
                        {typeOfBooking.map((type, index) => (
                            <Button key={index} variant='contained' sx={{ width: '90%', justifyContent: 'flex-start', margin: '5px 0 5px 0' }}>
                                {type}
                            </Button>
                        ))}
                    </Box>

                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ margin: '1em 0' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography variant='h6'>Chọn ngày khám</Typography>
                </AccordionSummary>
                <Divider sx={{ backgroundColor: 'black', width: '100%', margin: '1em auto' }} />
                <AccordionDetails>
                    <Paper>
                        <Calendar />
                    </Paper>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ margin: '1em 0', borderRadius: '3px', backgroundColor: ' #ffffff' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography variant='h6'>Chọn giờ khám</Typography>
                </AccordionSummary>
                <Divider sx={{ backgroundColor: 'black', width: '100%', margin: '1em auto' }} />
                <AccordionDetails>
                    <Paper sx={{ padding: '10px' }}>
                        <TimeSlots />
                    </Paper>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ margin: '1em 0', backgroundColor: ' #ffffff' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography variant='h6'>Xác nhận thông tin</Typography>
                </AccordionSummary>
                <Divider sx={{ backgroundColor: 'black', width: '100%', margin: '1em auto' }} />
                <AccordionDetails>
                    <Paper sx={{ padding: '10px' }}>
                        <ConfirmationForm />
                    </Paper>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ margin: '1em 0', backgroundColor: ' #ffffff' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography variant='h6'>Thanh toán</Typography>
                </AccordionSummary>
                <Divider sx={{ backgroundColor: 'black', width: '100%', margin: '1em auto' }} />
                <AccordionDetails>
                    <Paper sx={{ padding: '10px' }}>
                        <CheckoutForm />
                    </Paper>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default BookingAccordion