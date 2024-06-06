import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const CheckoutForm = () => {
    return (
        <Box component='form' sx={{ marginLeft: '1em', marginRight: '1em' }}>
            <Typography variant='h4' sx={{ marginBottom: '20px' }}>Thanh toán</Typography>

            <Box sx={{ width: '100%' }}>
                <Grid container spacing={5}>
                    <Grid item lg={12} >
                        <Accordion sx={{ width: '100%', backgroundColor: '' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{ width: '100%' }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <FolderSharedIcon sx={{ height: 'auto', fontSize: '4.5em', color: ' #1976d3' }} />
                                    <Box >
                                        <Typography variant='h6'>Nguyễn Văn A</Typography>
                                    </Box>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box sx={{ }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant='body1'>Mã bênh nhân</Typography>
                                        <Typography variant='body2'>BN123456</Typography>
                                    </Box>

                                    <Divider sx={{ backgroundColor: 'black', width: '100%', margin: '1em auto' }} />

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant='body1'>Họ và tên</Typography>
                                        <Typography variant='body2'>Nguyễn Văn A</Typography>
                                    </Box>

                                    <Divider sx={{ backgroundColor: 'black', width: '100%', margin: '1em auto' }} />

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant='body1'>Ngày sinh</Typography>
                                        <Typography variant='body2'>25/01/2003</Typography>
                                    </Box>

                                    <Divider sx={{ backgroundColor: 'black', width: '100%', margin: '1em auto' }} />

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant='body1'>Số điện thoại</Typography>
                                        <Typography variant='body2'>0948290964</Typography>
                                    </Box>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default CheckoutForm