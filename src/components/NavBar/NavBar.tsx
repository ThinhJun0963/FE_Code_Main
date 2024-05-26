import { Box, Flex, Link } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex px={8} py={4} color="#181b26" align="center" justify="space-between">
      <Box>
        <Link href="/" p={2} fontSize="md" fontWeight="bold">
          Trang chủ
        </Link>
      </Box>
      <Box>
        <Link href="/online-consultation" p={2} fontSize="md" fontWeight="bold">
          Tư vấn trực tuyến
        </Link>
      </Box>
      <Box>
        <Link href="/for-owner" p={2} fontSize="md" fontWeight="bold">
          Dành cho chủ phòng khám
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
