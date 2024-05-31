import HomePage from '../pages/HomePage/HomePage';
import BookingPage from '../pages/Booking/BookingPage';
import UserPayment from '../pages/User/Payment/UserPayment';
import UserAccount from '../pages/User/Account/UserAccount';
import UserProfileMain from '../pages/User/UserProfileMain';
import AdminClinicPage from '../pages/Admin/AdminClinicOwner/AdminClinicPage';
import DentistAccounts from '../pages/Admin/AdminClinicOwner/pages/DentistAccounts';
import AppointmentSchedule from '../pages/Admin/AdminClinicOwner/pages/AppointmentSchedule';
import ClinicInformation from '../pages/Admin/AdminClinicOwner/pages/ClinicInformation';
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
    { path: "/user/", element: <UserProfileMain /> },
    { path: "/user/payment", element: <UserPayment /> },
    { path: "/user/profile", element: <UserProfileMain /> },
    { path: "/user/account", element: <UserAccount /> },
    { path: '/admin/clinic-owner', element: <AdminClinicPage /> },
    { path: '/admin/clinic-owner/dentist', element: <DentistAccounts /> },
    { path: '/admin/clinic-owner/appointment', element: <AppointmentSchedule /> },
    { path: '/admin/clinic-owner/clinic', element: <ClinicInformation /> },

]