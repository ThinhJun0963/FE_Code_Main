import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import React, { SetStateAction, useEffect, useState } from 'react'
import { TimeSlot } from '../TimeSlots/data';
import VNPayFields from './VNPayField';

interface CheckoutFormProps {
    paymentData: { paymentMethod: string, amount: string, orderID: string, orderDetail: string },
    setPaymentData: (value: SetStateAction<{ paymentMethod: string, amount: string, orderID: string, orderDetail: string }>) => void;
}

const CheckoutForm = ({ paymentData, setPaymentData }: CheckoutFormProps) => {
    const [paymentMethod, setPaymentMethod] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [orderID, setOrderID] = useState<string>('');
    const [orderDetail, setOrderDetail] = useState<string>('Thanh toán dịch vụ khám bệnh');

    const handlePaymentMethodChange = (event: SelectChangeEvent<string>) => {
        const { value } = event.target;
        setPaymentMethod(value);
        if (value === 'VNPay') {
            const newOrderID = Math.floor(Math.random() * 1000000).toString();
            setOrderID(newOrderID);
            setPaymentData(prev => ({
                ...prev,
                paymentMethod: value,
                orderID: newOrderID, 
                orderDetail: 'Thanh toán dịch vụ khám bệnh'
            }));
        } else {
            setOrderID('');
            setPaymentData(prev => ({
                ...prev,
                paymentMethod: value,
                orderID: '', 
            }));
        }
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value);
        setPaymentData(prev => ({
            ...prev,
            amount: event.target.value
        }));
    };

    return (
        <Box sx={{ marginLeft: '1em', marginRight: '1em' }}>
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
                                paymentData={paymentData}
                                setPaymentData={setPaymentData}
                                amount={amount}
                                orderID={orderID}
                                orderDetail={orderDetail}
                                handleAmountChange={handleAmountChange}
                            />
                        )}
                    </Grid>
                </Grid>
            </Box>
        </Box>

    )
}
export default CheckoutForm