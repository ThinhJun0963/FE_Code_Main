import HomePage from '../pages/HomePage/HomePage';
import BookingPage from '../pages/Booking/BookingPage';
import LoginMUI from '../pages/Login/index';
import SignUpMUI from '../pages/Login/SignUpMUI';
import ClinicDetail from '../pages/ClinicDetail/ClinicDetail';
import ClinicRegister from '../pages/ClinicRegister/ClinicRegister';

export const publicRoutes = [
    { path: '/', element: <HomePage /> },
    { path: '/booking', element: <BookingPage /> },
    { path: '/for-owner', element: <ClinicRegister /> },
    { path: "/clinic", element: <ClinicDetail /> },
    { path: "/login", element: < LoginMUI /> },
    { path: "/signup", element: <SignUpMUI /> },
]