import React from 'react';
import { TextField } from '@mui/material';

interface VNPayFieldsProps {
    paymentData: {
        paymentMethod: string;
        amount: string;
        orderID: string;
        orderDetail: string;
    };

    setPaymentData: (value: React.SetStateAction<{
        paymentMethod: string;
        amount: string;
        orderID: string;
        orderDetail: string;
    }>) => void;

    handleAmountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    amount: string;
    orderID: string;
    orderDetail: string;
}

const VNPayFields: React.FC<VNPayFieldsProps> = ({ paymentData, setPaymentData, amount, orderID, orderDetail, handleAmountChange }) => (
    <>
        <TextField
            fullWidth
            id="amount"
            label="Giá trị"
            value={amount}
            onChange={handleAmountChange}
            InputLabelProps={{
                shrink: true,
            }}
            sx={{ marginBottom: '20px', marginTop: '20px' }}
        />
        <TextField
            fullWidth
            id="orderID"
            label="Mã đơn hàng"
            value={orderID}
            InputProps={{
                readOnly: true,
            }}
            InputLabelProps={{
                shrink: true,
            }}
            sx={{ marginBottom: '20px' }}
        />
        <TextField
            fullWidth
            id="orderInfo"
            label="Thông tin đơn hàng"
            value={orderDetail}
            InputProps={{
                readOnly: true,
            }}
            InputLabelProps={{
                shrink: true,
            }}
        />
    </>
);

export default VNPayFields;