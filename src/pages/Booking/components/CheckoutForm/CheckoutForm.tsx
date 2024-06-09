import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const VNPayFields = ({ amount, handleAmountChange, orderID }: { amount: string, handleAmountChange: (event: React.ChangeEvent<HTMLInputElement>) => void, orderID: string }) => (
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
            value={`Thanh toán ${orderID}`}
            InputProps={{
                readOnly: true,
            }}
            InputLabelProps={{
                shrink: true,
            }}
        />
    </>
);

const CheckoutForm = () => {
    const [paymentMethod, setPaymentMethod] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [orderID, setOrderID] = useState<string>('');

    const handlePaymentMethodChange = (event: SelectChangeEvent<string>) => {
        const { value } = event.target;
        setPaymentMethod(value);
        if (value === 'VNPay') {
            const newOrderID = Math.floor(Math.random() * 1000000).toString();
            setOrderID(newOrderID);
        } else {
            setOrderID('');
        }
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Perform validation and submission logic here
        console.log('Form submitted', { paymentMethod, amount, orderID });
    };

    return (
        <Box component='form' sx={{ marginLeft: '1em', marginRight: '1em' }} onSubmit={handleSubmit}>
            <Typography variant='h4' sx={{ marginBottom: '20px' }}>Chọn hình thức thanh toán</Typography>
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={5}>
                    <Grid item lg={12}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel id="payment-method-label">Hình thức thanh toán</InputLabel>
                            <Select
                                labelId="payment-method-label"
                                id="paymentMethod"
                                value={paymentMethod}
                                onChange={handlePaymentMethodChange}
                                label="Hình thức thanh toán"
                            >
                                <MenuItem value={'VNPay'}>VN Pay</MenuItem>
                                <MenuItem value={'Other'}>Hình thức khác</MenuItem>
                            </Select>
                        </FormControl>
                        {paymentMethod === 'VNPay' && (
                            <VNPayFields
                                amount={amount}
                                handleAmountChange={handleAmountChange}
                                orderID={orderID}
                            />
                        )}
                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}
export default CheckoutForm