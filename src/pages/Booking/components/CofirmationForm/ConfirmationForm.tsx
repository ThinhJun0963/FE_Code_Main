import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const ConfirmationForm = () => {
    return (
        <Box component='form' sx={{marginLeft: '10px', maxWidth: '600px' }}>
            <Typography variant='h4' sx={{ marginBottom: '20px' }}>Xác nhận thông tin</Typography>
            <Box>
                <Grid container spacing={5}>
                    
                    <Grid item lg={12}>
                        <TextField
                            fullWidth
                            id="date"
                            label="Ngày khám"
                            name="date"
                            placeholder='20/08/2024'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item lg={12}>
                        <TextField
                            fullWidth
                            id="time"
                            label="Giờ khám"
                            name="time"
                            placeholder='14:00 - 14:30'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item lg={12}>
                        <TextField
                            fullWidth
                            id="service"
                            label="Dịch vu *nếu có"
                            name="service"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ConfirmationForm