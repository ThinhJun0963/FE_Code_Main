import { Box, Flex, Image, Button, Link, Container } from '@chakra-ui/react'
import NavBar from '../NavBar/NavBar'

const Header = () => {
  return (
    <Box bg="#ffffff" px={4}>
      <Flex justify="space-between" align="center">
        <Box>
          <img src="../../assets/logo.jpg" alt="Logo"></img>
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
              <Link href="/booking">
                Đặt lịch ngay
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header