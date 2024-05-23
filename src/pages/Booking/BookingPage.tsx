import { Box, Container, Flex, SimpleGrid } from '@chakra-ui/react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Header from '../../components/Header/Header';
import BookingStep from '../../components/BookingStep/BookingStep';

const BookingPage = () => {
  return (
    <Box bg="#e1e8f0" minH="100vh">
      <Box mb={10}>
        <Header />
      </Box>
      <Flex direction="column" alignItems="center" mt={100}>
        <Box w={1000} mb={10}>
          <ProgressBar />
        </Box>
        <Box w={1000}>
          <BookingStep />
        </Box>
      </Flex>
    </Box>
  );
}

export default BookingPage;
