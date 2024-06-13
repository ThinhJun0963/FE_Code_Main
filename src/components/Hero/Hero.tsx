import { Box, Typography, TextField, InputAdornment, styled, InputBase, alpha } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';




export default function Hero() {
  const [inputValue, setInputValue] = useState("");

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
        position: 'absolute', // Add this
        top: 0, // Add this
        left: 0, // Add this
        width: '100%', // Add this
        height: '100%', // Add this
      }}>
      <img src="../../../public/hero-banner.png" alt="hero-banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </Box>
  </Box>
  );
}