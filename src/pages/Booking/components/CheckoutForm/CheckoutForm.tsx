import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import React, { SetStateAction, useEffect, useState } from 'react'
import styles from './CheckoutForm.module.css'
import VNPayField from './VNPayField';

interface CheckoutFormProps {
    paymentData: { paymentMethod: string, amount: string, orderID: string, orderDetail: string },
    setPaymentData: (value: SetStateAction<{ paymentMethod: string, amount: string, orderID: string, orderDetail: string }>) => void;
}

const CheckoutForm = ({ paymentData, setPaymentData }: CheckoutFormProps) => {
    const [paymentMethod, setPaymentMethod] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [orderID, setOrderID] = useState<string>('');
    const [orderDetail, setOrderDetail] = useState<string>('Thanh toán dịch vụ khám bệnh');
    const [showVNPayFields, setShowVNPayFields] = useState(false);
    const [totalAmount, setTotalAmount] = useState(1200000);


    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    const handlePaymentMethodChange = (event: SelectChangeEvent<string>) => {
        const { value } = event.target;
        setPaymentMethod(value);
        setShowVNPayFields(value === 'VNPay');

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
        <Box className={styles.checkoutContainer}>
            <Box className={styles.heading}>
                Chọn hình thức thanh toán
            </Box>

            <Box sx={{ width: '100%' }} className={styles.content}>
                <Box className={styles.checkoutContent}>
                    <FormControl className={styles.paymentMethod}>
                        <FormLabel sx={{ fontSize: '25px' }}>Hình thức thanh toán</FormLabel>
                        <FormControlLabel
                            sx={{
                                fontSize: '1.2rem',
                                '& .MuiSvgIcon-root': {
                                    fontSize: 32,
                                },
                            }}
                            control={<Checkbox
                                sx={{
                                    '&.Mui-checked': {
                                        color: '#249dec',
                                    },
                                    '& svg': {
                                        fontSize: 24,
                                    }
                                }}
                                checked={paymentMethod === 'VNPay'}
                                onChange={handlePaymentMethodChange}
                                value="VNPay" />}
                            label="VN Pay"
                        />
                        <FormControlLabel
                            sx={{
                                fontSize: '1.2rem',
                                '& .MuiSvgIcon-root': {
                                    fontSize: 32,
                                },
                            }}
                            control={<Checkbox
                                sx={{
                                    '&.Mui-checked': {
                                        color: '#249dec',
                                    },
                                    '& svg': {
                                        fontSize: 24,
                                    }
                                }}
                                checked={paymentMethod === 'Other'} onChange={handlePaymentMethodChange} value="Other" />}
                            label="Hình thức khác"
                        />
                        {!setPaymentMethod && <FormHelperText error>Vui lòng chọn phương thức thanh toán</FormHelperText>}
                    </FormControl>

                    <Box className={styles.paymentInfoBox}>
                        <Box className={styles.paymentInfoItem}>
                            <span className={styles.paymentInfoLabel}>Tổng tiền dịch vụ:</span>
                        </Box>
                        <Box className={styles.paymentInfoItem}>
                            <span className={styles.paymentInfoLabel}>Tổng tiền khám:</span>
                        </Box>
                        {/* <Box className={styles.paymentInfoItem}>
                            <span className={styles.paymentInfoLabel}>Phí tiện ích + Phí TGTT:</span>
                            <span>13.200 VNĐ</span>
                        </Box> */}
                        <Box className={styles.paymentInfoItem}>
                            <span className={styles.paymentInfoLabel}>TỔNG CỘNG:</span>
                            <span>{formatCurrency(totalAmount)}</span>
                        </Box>
                    </Box>
                    {showVNPayFields && (
                        <div className={styles.vnpayFields}>
                            <VNPayField
                                paymentData={paymentData}
                                setPaymentData={setPaymentData}
                                amount={formatCurrency(totalAmount)}
                                orderID={orderID}
                                orderDetail={orderDetail}
                                handleAmountChange={handleAmountChange}
                            />
                        </div>
                    )}
                </Box>
            </Box>
        </Box>

    )
}
export default CheckoutForm