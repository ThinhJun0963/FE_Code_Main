import AdminClinicPage from '../pages/Admin/AdminClinicOwner/AdminClinicPage';
import DentistAccounts from '../pages/Admin/AdminClinicOwner/pages/DentistAccounts';
import AppointmentSchedule from '../pages/Admin/AdminClinicOwner/pages/AppointmentSchedule';
import ClinicInformation from '../pages/Admin/AdminClinicOwner/pages/ClinicInformation';

const adminRoutes = [
    { path: '/admin/clinic-owner', element: <AdminClinicPage /> },
    { path: '/admin/clinic-owner/dentist', element: <DentistAccounts /> },
    { path: '/admin/clinic-owner/appointment', element: <AppointmentSchedule /> },
    { path: '/admin/clinic-owner/clinic', element: <ClinicInformation /> },
]