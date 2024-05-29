import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import BookingPage from '../pages/Booking/BookingPage';

import ClinicRegisterForm from '../pages/ClinicRegister/ClinicRegister';
import UserProfile from '../pages/User/Profile/UserProfile';
import ClinicOwnerPage from '../pages/ClinicOwnerPage/ClinicOwnerPage';
import LoginPage from '../pages/Login/LoginPage';
import UserPayment from '../pages/User/Payment/UserPayment';
import UserAccount from '../pages/User/Account/UserAccount';
import ClinicDetail from '../pages/ClinicDetail/ClinicDetail';
import AdminClinicPage from '../pages/Admin/MainPage/AdminClinicPage';
import DentistAccounts from '../pages/Admin/MainPage/pages/DentistAccounts';
import AppointmentSchedule from '../pages/Admin/MainPage/pages/AppointmentSchedule';
import ClinicInformation from '../pages/Admin/MainPage/pages/ClinicInformation';


const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/booking', element: <BookingPage /> },
  { path: '/detail/:id', element: <div>Detail</div> },
  {path: '/admin/clinic-owner', element: <AdminClinicPage/>},
  { path: '/admin/clinic-owner/dentist', element: <DentistAccounts /> },
  { path: '/admin/clinic-owner/appointment', element: <AppointmentSchedule /> },
  { path: '/admin/clinic-owner/clinic', element: <ClinicInformation/>},
  { path: '/for-owner', element: <ClinicRegisterForm /> },
  { path: "/owner", element: <ClinicOwnerPage /> },
  { path: "/user/", element: <UserProfile /> },
  { path: "/user/payment", element: <UserPayment /> },
  { path: "/user/profile", element: <UserProfile /> },
  { path: "/user/account", element: <UserAccount /> },
  { path: "/login", element: <LoginPage /> },
  { path: '/clinic', element: <ClinicDetail details={''} images={[]} rating={0} services={[]} /> }

]);

export default router;


// { path: '/admin/users', element: <AdminUserPage /> },
// { path: '/admin', element: < AdminPage /> },
