import { useState } from 'react';
import BookingPageContent from './components/BookingPageContent';
import UserLayout from '../../components/UserLayout';

const BookingPage = () => {


  return (
    <UserLayout>
      <BookingPageContent />
    </UserLayout>
  );
}

export default BookingPage;
