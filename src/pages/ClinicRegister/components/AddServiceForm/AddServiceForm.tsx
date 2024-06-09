import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useState } from 'react';

interface AddServiceFormProps {
  onAddService: (service: { id: string; name: string; price: string }) => void;
  open: boolean;
  handleClose: () => void;
}

const AddServiceForm = ({ onAddService, open, handleClose }: AddServiceFormProps) => {
  const [serviceName, setServiceName] = useState('');
  const [servicePrice, setServicePrice] = useState('');

  const handleAdd = () => {
    const newService = {
      id: Math.random().toString(36).substr(2, 9),
      name: serviceName,
      price: servicePrice
    };
    onAddService(newService);
    handleClose();
  };
  

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Thêm dịch vụ</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            label="Tên dịch vụ"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Giá"
            value={servicePrice}
            onChange={(e) => setServicePrice(e.target.value)}
            fullWidth
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Hủy</Button>
        <Button onClick={handleAdd} color="primary">Thêm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddServiceForm;
