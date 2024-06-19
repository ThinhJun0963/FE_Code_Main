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
import DentistSchedulePage from "../pages/Dentist/pages/DentistSchedulePage";
import Schedule from "../pages/Dentist/components/Schedule/Schedule";
import PatientListPage from "../pages/Dentist/pages/PatientListPage";
import ChatPage from "../pages/Dentist/pages/ChatPage";

import ErrorPage from "../pages/ErrorPage/ErrorPage";

import SystemAdminPage from "../pages/Admin/SystemAdmin/pages/SystemAdminPage";
import Bar from "../pages/Admin/SystemAdmin/scenes/bar/index";
import Calendar from "../pages/Admin/SystemAdmin/scenes/calendar/calendar";
import Contacts from "../pages/Admin/SystemAdmin/scenes/contacts";
import Dashboard from "../pages/Admin/SystemAdmin/scenes/dashboard";
import FAQ from "../pages/Admin/SystemAdmin/scenes/faq";
import Form from "../pages/Admin/SystemAdmin/scenes/form";
import Geography from "../pages/Admin/SystemAdmin/scenes/geography";
import Invoices from "../pages/Admin/SystemAdmin/scenes/invoices";
import Line from "../pages/Admin/SystemAdmin/scenes/line";
import Pie from "../pages/Admin/SystemAdmin/scenes/pie";
import Team from "../pages/Admin/SystemAdmin/scenes/team";
import ForOwner from "../pages/ForOwner/ForOwner";

export const UserRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/booking", element: <BookingPage /> },
  { path: '/for-owner', element: <ForOwner /> },
  { path: '/for-owner/clinic-register', element: <ClinicRegister /> },
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
  { path: "/dentist/dentist-schedule", element: <DentistSchedulePage /> },
  { path: "/dentist/patient-list", element: <PatientListPage /> },
  { path: "/schedule", element: <Schedule /> },
  { path: "/dentist/chat", element: <ChatPage /> },
  { path: "/error", element: <ErrorPage /> },
  { path: "/system-admin", element: <SystemAdminPage /> },
  { path: "/system-admin/bar", element: <Bar /> },
  { path: "/system-admin/calendar", element: <Calendar /> },
  { path: "/system-admin/contacts", element: <Contacts /> },
  { path: "/system-admin/dashboard", element: <Dashboard /> },
  { path: "/system-admin/faq", element: <FAQ /> },
  { path: "/system-admin/form", element: <Form /> },
  { path: "/system-admin/geography", element: <Geography /> },
  { path: "/system-admin/invoices", element: <Invoices /> },
  { path: "/system-admin/line", element: <Line /> },
  { path: "/system-admin/pie", element: <Pie /> },
  { path: "/system-admin/team", element: <Team /> },
];
