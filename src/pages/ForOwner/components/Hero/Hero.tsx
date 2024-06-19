import { Box } from '@mui/material';

export default function Hero() {

  return (
    <Box
    sx={{
      height: '85vh',
      backgroundColor: "#7cc9ff",
      position: 'relative'
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
      }}>
      <img src="../../../../public/clinic-register.png" alt="hero-banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </Box>
  </Box>
  );
}