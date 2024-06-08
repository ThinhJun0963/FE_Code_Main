import HomePage from '../pages/HomePage/HomePage';
import BookingPage from '../pages/Booking/BookingPage';
import LoginMUI from '../pages/Login/index';
import SignUpMUI from '../pages/Login/SignUpMUI';
import ClinicDetail from '../pages/ClinicDetail/ClinicDetail';
import ClinicRegister from '../pages/ClinicRegister/ClinicRegister';
import ClinicList from '../pages/ClinicList/ClinicList';
import Chat from '../pages/ChatV1/Chat';

export const publicRoutes = [
    { path: '/', element: <HomePage /> },
    { path: '/booking', element: <BookingPage /> },
    { path: '/for-owner', element: <ClinicRegister /> },
    { path: "/clinic", element: <ClinicDetail /> },
    { path: '/clinics', element: <ClinicList /> },
    { path: "/login", element: < LoginMUI /> },
    { path: "/signup", element: <SignUpMUI /> },
    { path: "/chat", element: <Chat/>}
    //{ path: "/login-google", element: <GoogleLogin />}
]