import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import Stepper from './Stepper/Stepper'
import BookingAccordion from './Accordion/BookingAccordion'

const BookingPageContent = () => {
    return (
        <Box sx={{ marginTop: '5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '80%', marginTop: '-3em', textAlign: 'right', color: 'black' }}>
                <Breadcrumbs>
                    <Link underline="hover" color="inherit" href="/">
                        Trang chủ
                    </Link>
                    <Typography color="text.primary">Trang đặt khám</Typography>
                </Breadcrumbs>
            </Box>

            <Box sx={{ width: '80%', marginTop: '3em' }}>
                <Stepper />
            </Box>

            <Box sx={{ width: '80%', marginTop: '3em', marginBottom: '5em' }}>
                <BookingAccordion />
            </Box>


        </Box>
    )
}

export default BookingPageContent