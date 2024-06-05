import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import BookingPage from "../pages/Booking/BookingPage";
import ClinicRegisterForm from "../pages/ClinicRegister/components/ClinicRegisterContent";
import UserProfile from "../pages/User/Profile/UserProfile";
import ClinicOwnerPage from "../pages/ClinicOwnerPage/ClinicOwnerPage";
import LoginPage from "../pages/Login/LoginPage";
import UserPayment from "../pages/User/Payment/UserPayment";
import UserAccount from "../pages/User/Account/UserAccount";
import AdminClinicPage from "../pages/Admin/AdminClinicOwner/AdminClinicPage";
import DentistAccounts from "../pages/Admin/AdminClinicOwner/pages/DentistAccounts";
import AppointmentSchedule from "../pages/Admin/AdminClinicOwner/pages/AppointmentSchedule";
import ClinicInformation from "../pages/Admin/AdminClinicOwner/pages/ClinicInformation";
import LoginMUI from "../pages/Login/LoginMUI";
import PopUp from "../pages/PopUpWindow/PopUpWindow";
import ServicesInformation from "../pages/Admin/AdminClinicOwner/pages/ClinicInformation";
import DentistPage from "../pages/Dentist/DentistPage/DentistPage";
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/booking", element: <BookingPage /> },
  { path: "/admin/clinic-owner", element: <AdminClinicPage /> },
  { path: "/admin/clinic-owner/dentist", element: <DentistAccounts /> },
  { path: "/admin/clinic-owner/appointment", element: <AppointmentSchedule /> },
  { path: "/admin/clinic-owner/clinic", element: <ClinicInformation /> },
  { path: "/for-owner", element: <ClinicRegisterForm /> },
  { path: "/admin/clinic-owner/service", element: <ServicesInformation /> },
  { path: "/for-owner", element: <ClinicRegisterForm /> },
  { path: "/owner", element: <ClinicOwnerPage /> },
  { path: "/user/", element: <UserProfile /> },
  { path: "/user/payment", element: <UserPayment /> },
  { path: "/user/profile", element: <UserProfile /> },
  { path: "/user/account", element: <UserAccount /> },
  { path: "/login", element: <LoginMUI /> },
  { path: "/login2", element: <LoginPage /> },
  { path: "/popup", element: <PopUp /> },
  { path: "/popup", element: <PopUp /> },
  { path: "/dentist", element: <DentistPage /> },
]);

export default router;

// { path: '/admin/users', element: <AdminUserPage /> },
// { path: '/admin', element: < AdminPage /> },
