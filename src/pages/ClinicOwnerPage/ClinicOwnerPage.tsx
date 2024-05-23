import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import Header from "../../components/Header/Header";

const ClinicOwnerPage = () => {
  return (
    <Box bg="#e1e8f0" minH="100vh">
      <Box>
        <Header />
      </Box>
      <Flex justifyContent="center" alignItems="center" pt={10}>
        <Box w={1000} pt={5}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box w={10} p={10} alignItems="left"></Box>
            <Box w={10} p={20} alignItems="left"></Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default ClinicOwnerPage;
