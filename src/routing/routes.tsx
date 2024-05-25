import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage'; // Import the HomePage component
import BookingPage from '../pages/Booking/BookingPage'; // Import the BookingPage component
import AdminPage from '../pages/Admin/AdminPage';
import AdminUserPage from '../pages/Admin/AdminUser/AdminUserPage';
import AdminClinicPage from '../pages/Admin/AdminClinic/AdminClinicPage';

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/booking', element: <BookingPage /> },
    { path: '/detail/:id', element: <div>Detail</div> },
    { path: '/admin', element: < AdminPage /> },
    { path: '/admin/users', element: <AdminUserPage/> },
    { path: '/admin/clinic', element: <AdminClinicPage/> },
])

export default router;
