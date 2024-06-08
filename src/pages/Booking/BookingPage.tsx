import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Header from '../../components/Header/Header';
import BookingStep from '../../components/BookingStep/BookingStep';
import './BookingPage.css'
import { useState } from 'react';
import UserLayout from '../../components/UserLayout';
import BookingPageContent from './components/BookingPageContent';

const BookingPage = () => {
  const [activeStep, setActiveStep] = useState(0);


  return (
    <UserLayout>
      <BookingPageContent />
    </UserLayout>
  );
}

export default BookingPage;
