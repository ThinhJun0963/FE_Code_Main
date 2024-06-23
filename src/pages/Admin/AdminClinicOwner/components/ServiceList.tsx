import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import styles from './ServiceList.module.css';

const ServiceList = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [clinicServices, setClinicServices] = useState([
    { serviceName: 'Service 1' },
    { serviceName: 'Service 2' },
    { serviceName: 'Service 3' },
  ]);
  const [selectedService, setSelectedService] = useState(null);
  const [newService, setNewService] = useState('');
  const [serviceList, setServiceList] = useState([
    'Service 4',
    'Service 5',
    'Service 6',
  ]); // List of available services

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  const handleAddClick = () => {
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    if (newService) {
      setClinicServices([...clinicServices, { serviceName: newService }]);
      setNewService('');
      setIsDialogOpen(false);
    }
  };

  return (
    <>
      <Box className={styles.container}>
        <Typography variant="h6">Dịch vụ</Typography>
        <div className={styles.serviceContainer}>
          {clinicServices.map((service, index) => (
            <Button
              key={index}
              variant={selectedService === service ? 'contained' : 'outlined'}
              onClick={() => handleServiceClick(service)}
              disabled={true}
              className={styles.serviceButton}
            >
              {service.serviceName}
            </Button>
          ))}
        </div>
        <Dialog
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          maxWidth="sm"
          className={styles.dialog}
          fullWidth
        >
          <DialogTitle>Thêm dịch vụ mới</DialogTitle>
          <DialogContent>
            <FormControl fullWidth variant="outlined" sx={{marginTop: '10px'}}>
              <InputLabel id="newServiceLabel" >Chọn dịch vụ</InputLabel>
              <Select
                labelId="newServiceLabel"
                id="newService"
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
                label="Select Service"
              >
                {serviceList.map((service, index) => (
                  <MenuItem key={index} value={service}>
                    {service}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsDialogOpen(false)} color="secondary">
              Hủy bỏ
            </Button>
            <Button onClick={handleSave} color="primary">
              Lưu
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddClick}
        className={styles.addButton}
        sx={{marginTop: '1rem'}}
      >
        Thêm dịch vụ mới
      </Button>
    </>
  );
}

export default ServiceList