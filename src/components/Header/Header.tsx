import { Box, Flex, Image, Button, Link } from '@chakra-ui/react'
import NavBar from '../NavBar/NavBar'

const Header = () => {
  return (
    <Box bg=" #ffffff" px={4}>
      <Flex justify="space-between" align="center">
        <Box>
          <Image src="/path/to/logo.png" alt="Logo" /> {/* Replace with your logo path */}
        </Box>
        <Flex justify="space-between" align="center" width="auto">
          <NavBar />
          <Flex ml={8}>
            <Button variant="outline" color="#181b26" borderColor="#181b26" mr={4}>
              <Link href="/">
                Đăng kí
              </Link>
            </Button>
            <Button variant="outline" color="#181b26" borderColor="#181b26">
              Đặt lịch ngay
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header