import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface BookingDialogProps { 
    isOpen: boolean;
    onClose: () => void;
    booking: any;
}

const BookingDialog = ({ isOpen, onClose, booking } : BookingDialogProps) => {
  const handleSaveChanges = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{booking && `Booking ID: ${booking.bookingId}`}</DialogTitle>
      <DialogContent>
        {booking && (
          <div>
            <p>Customer: {booking.customer}</p>
            <p>Doctor: {booking.doctor}</p>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Close
        </Button>
        {/* Example Save button */}
        <Button onClick={handleSaveChanges} color="primary">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingDialog;
