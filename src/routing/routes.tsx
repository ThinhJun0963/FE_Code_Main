import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage'; // Import the HomePage component
import BookingPage from '../pages/Booking/BookingPage'; // Import the BookingPage component

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/booking', element: <BookingPage /> }
])

export default router;