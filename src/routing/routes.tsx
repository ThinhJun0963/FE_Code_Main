import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage'; // Import the HomePage component
import BookingPage from '../pages/Booking/BookingPage'; // Import the BookingPage component
import AdminPage from '../pages/Admin/AdminPage';
import AdminUserPage from '../pages/Admin/AdminUser/AdminUserPage';
import AdminClinic from '../pages/Admin/AdminClinic/AdminClinic';
import ClinicRegisterForm from '../pages/ClinicRegister/ClinicRegister';
import UserProfile from '../pages/UserProfile/UserProfile';
import ClinicOwnerPage from '../pages/ClinicOwnerPage/ClinicOwnerPage';
import ClinicInformation from '../pages/Admin/AdminClinic/pages/ClinicInformation/ClinicInformation';
import DentistAccount from '../pages/Admin/AdminClinic/pages/DentistAccount/DentistAccount';
import AppointmentSchedule from '../pages/Admin/AdminClinic/pages/AppointmentSchedule';
import ServicesInformation from '../pages/Admin/AdminClinic/pages/ServicesInformation';
import LoginPage from '../pages/Login/LoginPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/booking', element: <BookingPage /> },
  { path: '/detail/:id', element: <div>Detail</div> },
  { path: '/admin', element: < AdminPage /> },
  { path: '/admin/users', element: <AdminUserPage /> },
  { path: '/admin/clinic-owner', element: <AdminClinic /> },
  { path: '/admin/clinic-owner/clinic', element: <ClinicInformation /> },
  { path: '/admin/clinic-owner/dentist', element: <DentistAccount /> },
  { path: '/admin/clinic-owner/appointment', element: <AppointmentSchedule /> },
  { path: '/admin/clinic-owner/service', element: <ServicesInformation /> },
  { path: '/for-owner', element: <ClinicRegisterForm /> },
  { path: "/owner", element: <ClinicOwnerPage /> },
  { path: "/profile", element: <UserProfile /> },
  { path: "/login", element: <LoginPage /> },

]);

export default router;
