import { Box, Flex } from '@chakra-ui/react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Header from '../../components/Header/Header';
import BookingStep from '../../components/BookingStep/BookingStep';
import './BookingPage.css'
import { useState } from 'react';

const BookingPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  

  return (
    <Box bg="#e1e8f0" minH="100vh">
      <Box mb={10}>
        <Header />
      </Box>
      <Flex direction="column" alignItems="center" mt={100}>
        <Box w={1000} mb={10}>
          <ProgressBar activeStep={activeStep} />
        </Box>
        <Box w={1000}>
          <BookingStep activeStep={activeStep} setActiveStep={setActiveStep} />
        </Box>
      </Flex>
    </Box>
  );
}

export default BookingPage;
