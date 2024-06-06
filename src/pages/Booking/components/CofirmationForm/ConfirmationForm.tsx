import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

interface FormData {
  typeOfBooking: string;
  date: string;
  time: string;
}

interface ConfirmationFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const ConfirmationForm = ({ formData, setFormData }: ConfirmationFormProps) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Box component='form' sx={{ marginLeft: '10px', marginRight: '10px', padding: '10px' }}>
      <Typography variant='h4' sx={{ marginBottom: '20px' }}>Xác nhận thông tin</Typography>
      <Grid container spacing={5}>

        <Grid item lg={12}>
          <TextField
            fullWidth
            id="date"
            label="Ngày khám"
            name="date"
            placeholder='20/08/2024'
            value={formData.date}
            onChange={handleChange}
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
            value={formData.time}
            onChange={handleChange}
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
            name="typeOfBooking"
            value={formData.typeOfBooking}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ConfirmationForm