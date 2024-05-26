import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage'; // Import the HomePage component
import BookingPage from '../pages/Booking/BookingPage'; // Import the BookingPage component
import AdminPage from '../pages/Admin/AdminPage';
import AdminUserPage from '../pages/Admin/AdminUser/AdminUserPage';
<<<<<<< HEAD
import AdminClinicPage from '../pages/Admin/AdminClinic/AdminClinicPage';
import LoginPage from '../pages/Login/LoginPage';

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/booking', element: <BookingPage /> },
    { path: '/detail/:id', element: <div>Detail</div> },
    { path: '/admin', element: < AdminPage /> },
    { path: '/admin/users', element: <AdminUserPage/> },
    { path: '/admin/clinic', element: <AdminClinicPage/> },
    { path: '/login', element: <LoginPage/> },

])
=======
import AdminClinic from '../pages/Admin/AdminClinic/AdminClinic';
import ClinicRegisterForm from '../pages/ClinicRegister/ClinicRegister';
import UserProfile from '../pages/UserProfile/UserProfile';
import ClinicOwnerPage from '../pages/ClinicOwnerPage/ClinicOwnerPage';

const router = createBrowserRouter([
  { path: '', element: <HomePage /> },
  { path: '/booking', element: <BookingPage /> },
  { path: '/detail/:id', element: <div>Detail</div> },
  { path: '/admin', element: < AdminPage /> },
  { path: '/admin/users', element: <AdminUserPage /> },
  { path: '/admin/clinic', element: <AdminClinic /> },
  { path: '/for-owner', element: <ClinicRegisterForm /> },
  { path: "/owner", element: <ClinicOwnerPage /> },
  { path: "/profile", element: <UserProfile /> },
]);
>>>>>>> 4bc63eab8a81db1432fb88a3fd752002f95144b6

export default router;
