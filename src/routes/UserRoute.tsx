import HomePage from "../pages/HomePage/HomePage";
import BookingPage from "../pages/Booking/BookingPage";
import UserScheduleMain from "../pages/User/WithWrapper/UserScheduleMain";
import UserPaymentMain from "../pages/User/WithWrapper/UserPaymentMain";
import UserAccountMain from "../pages/User/WithWrapper/UserAccountMain";
import UserProfileMain from "../pages/User/WithWrapper/UserProfileMain";
import AdminClinicPage from "../pages/Admin/AdminClinicOwner/AdminClinicPage";
import DentistAccounts from "../pages/Admin/AdminClinicOwner/pages/DentistAccounts";
import AppointmentSchedule from "../pages/Admin/AdminClinicOwner/pages/AppointmentSchedule";
import ClinicInformation from "../pages/Admin/AdminClinicOwner/pages/ClinicInformation";
import ClinicDetail from "../pages/ClinicDetail/ClinicDetail";
import ClinicRegister from "../pages/ClinicRegister/ClinicRegister";
import DentistPage from "../pages/Dentist/DentistPage/DentistPage";
import AppointmentInfor from "../pages/Dentist/components/AppointmentList";
import PatientRecord from "../pages/Dentist/components/PatientRecord";

export const UserRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/booking", element: <BookingPage /> },
  { path: "/for-owner", element: <ClinicRegister /> },
  { path: "/clinic", element: <ClinicDetail /> },
  { path: "/user/", element: <UserScheduleMain /> },
  { path: "/user/payment", element: <UserPaymentMain /> },
  { path: "/user/profile", element: <UserProfileMain /> },
  { path: "/user/account", element: <UserAccountMain /> },
  { path: "/admin/clinic-owner", element: <AdminClinicPage /> },
  { path: "/admin/clinic-owner/dentist", element: <DentistAccounts /> },
  { path: "/admin/clinic-owner/appointment", element: <AppointmentSchedule /> },
  { path: "/admin/clinic-owner/clinic", element: <ClinicInformation /> },
  { path: "/dentist", element: <DentistPage /> },
  { path: "/dentist/appointmentInfor", element: <AppointmentInfor /> },
  { path: "/dentist/patientRecord", element: <PatientRecord /> },
];
