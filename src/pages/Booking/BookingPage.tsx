import { Box, Container, Flex, SimpleGrid } from '@chakra-ui/react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Header from '../../components/Header/Header';
import Step from '../../components/Accordion/Accordion';

const BookingPage = () => {
  return (
    <Box bg="#c5c6c8" minH="100vh">
      <Box mb={10}>
        <Header />
      </Box>
      <Flex direction="column" justifyContent="center" alignItems="center" mt={100}>
        <Box w={1000} mb={10}>
          <ProgressBar />
        </Box>
        <Box w={1000}>
          <Step />
        </Box>
      </Flex>
    </Box>
  );
}

export default BookingPage;
