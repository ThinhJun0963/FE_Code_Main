import HomePage from "../pages/HomePage/HomePage";
import BookingPage from "../pages/Booking/BookingPage";
import UserScheduleMain from "../pages/User/WithWrapper/UserScheduleMain";
import UserPaymentMain from "../pages/User/WithWrapper/UserPaymentMain";
import UserAccountMain from "../pages/User/WithWrapper/UserAccountMain";
import UserProfileMain from "../pages/User/WithWrapper/UserProfileMain";
import AdminClinicPage from "../pages/Admin/AdminClinicOwner/AdminClinicPage";
import AppointmentSchedule from "../pages/Admin/AdminClinicOwner/pages/AppointmentSchedule";
import ClinicInformation from "../pages/Admin/AdminClinicOwner/pages/ClinicInformation";
import ClinicDetail from "../pages/ClinicDetail/ClinicDetail";
import ClinicRegister from "../pages/ClinicRegister/ClinicRegister";

import DentistPage from "../pages/Dentist/DentistPage/DentistPage";
import DentistSchedulePage from "../pages/Dentist/pages/DentistSchedulePage";
import Schedule from "../pages/Dentist/components/Schedule/Schedule";
import PatientListPage from "../pages/Dentist/pages/PatientListPage";
import ChatPage from "../pages/Dentist/pages/ChatPage";

import ErrorPage from "../pages/ErrorPage/ErrorPage";

import ForOwner from "../pages/ForOwner/ForOwner";
import AdminSystemPage from "../pages/Admin/AdminSystem/AdminSystemPage";
import ClinicManagement from "../pages/Admin/AdminSystem/pages/ClinicManagement";
import UserManagement from "../pages/Admin/AdminSystem/pages/UserManagement";
import ClinicSystemDetail from "../pages/Admin/AdminSystem/pages/ClinicSystemDetail";
import UserDetail from "../pages/Admin/AdminSystem/pages/UserDetail";

//------------------- User V2 -------------------
import UserProfilePage from "../pages/UserV2/UserProfilePage";
//------------------- User V2 -------------------

export const UserRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/booking", element: <BookingPage /> },
  { path: '/for-owner', element: <ForOwner /> },
  { path: '/for-owner/clinic-register', element: <ClinicRegister /> },
  { path: "/clinic", element: <ClinicDetail /> },
  { path: "/userV2", element: <UserProfilePage /> },
  { path: "/user/", element: <UserScheduleMain /> },
  { path: "/user/payment", element: <UserPaymentMain /> },
  { path: "/user/profile", element: <UserProfileMain /> },
  { path: "/user/account", element: <UserAccountMain /> },
  { path: "/admin/clinic-owner", element: <AdminClinicPage /> },
  { path: "/admin/clinic-owner/appointment", element: <AppointmentSchedule /> },
  { path: "/admin/clinic-owner/clinic", element: <ClinicInformation /> },
  { path: "/dentist", element: <DentistPage /> },
  { path: "/dentist/dentist-schedule", element: <DentistSchedulePage /> },
  { path: "/dentist/patient-list", element: <PatientListPage /> },
  { path: "/schedule", element: <Schedule /> },
  { path: "/dentist/chat", element: <ChatPage /> },
  { path: "/error", element: <ErrorPage /> },
  { path: '/system-admin', element: <AdminSystemPage /> },
  { path: '/system-admin/clinic', element: <ClinicManagement /> },
  { path: '/system-admin/clinic/:clinicId', element: <ClinicSystemDetail /> },
  { path: '/system-admin/user', element: <UserManagement /> },
  { path: "/system-admin/user/:userId", element: <UserDetail /> },
];
