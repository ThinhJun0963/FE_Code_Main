import { AppBar, Box, Button, Container, Link, Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb'; // Import the AdbIcon component from the appropriate package

const Header = () => {
  return (
    <AppBar position="sticky" style={{ top: 0 }}>
      <Box width='100%' sx={{ backgroundColor: 'white' }}>
        <Toolbar disableGutters>
          <Link href="/"><img src="../../../public/Logo.png" alt="Logo" style={{ height: '70px', marginLeft: '20px' }} /></Link>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '40%' }}>
            <Button href='/for-owner' variant="text" sx={{ color: ' #00aeeb', fontWeight: 'bold' }}>Dành cho chủ phòng khám</Button>
            <Button variant='text' sx={{ color: ' #00aeeb', fontWeight: 'bold' }}>Tư vấn trực tuyến</Button>
            <Button href='/login' variant='contained' sx={{ color: 'white', borderRadius: '5px' }}>Đăng nhập</Button>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;