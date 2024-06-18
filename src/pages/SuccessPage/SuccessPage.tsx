import React from 'react';
import UserLayout from '../../components/UserLayout';
import { Box, Typography, Button, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate, useLocation } from 'react-router-dom';
import { BookingInformationToSend } from '../../utils/interfaces/interfaces';
import { handleBookingSuccess } from '../../utils/api/BookingRegister';

const SuccessPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const bookingInfo = location.state.bookingInfo;
    const userInfo = handleBookingSuccess();

    console.log(userInfo);
    return (
        <UserLayout>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    padding: '20px',
                    textAlign: 'center'
                }}
            >
                <CheckCircleIcon color="success" sx={{ fontSize: 80, mb: 2 }} />
                <Typography variant="h4" component="h1" gutterBottom>
                    Đặt khám thành công!
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi. Lịch hẹn của bạn đã được xác nhận.
                </Typography>

                <Paper elevation={3} sx={{ padding: 2, marginTop: 3, width: '100%', maxWidth: 700, textAlign: 'left' }}>
                    <Typography variant="h6" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
                        Chi tiết lịch hẹn của bạn:
                    </Typography>
                    <Typography>
                        <strong>Ngày:</strong> {bookingInfo.AppointmentDate}
                    </Typography>
                    <Typography>
                        <strong>Slot:</strong> {bookingInfo.TimeSlotId}
                    </Typography>
                    <Typography >
                        <strong>Phòng khám:</strong> {bookingInfo.ClinicId}
                    </Typography>
                    {/* <Typography variant="body1">
                        <strong>Nha sĩ:</strong> {bookingInfo.DentistId}
                    </Typography> */}
                    <Typography>
                        <strong>Hình thức khám:</strong> {bookingInfo.ServiceId}
                    </Typography>

                    <Typography>
                        <strong>Tái khám: (Nếu đặt định kì)</strong> {bookingInfo.IsRecurring ? 'Có' : 'Không'}
                    </Typography>

                    <Typography>
                        <strong>Dịch vụ:</strong> {bookingInfo.ServiceId}
                    </Typography>

                </Paper>

                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 4 }}
                    onClick={() => navigate('/')}
                >
                    Trở về trang chủ
                </Button>
            </Box>
        </UserLayout>
    );
};

export default SuccessPage;
