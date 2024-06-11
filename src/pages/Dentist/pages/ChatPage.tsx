import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import CustomAppBar from "../components/AppBar";
import CustomDrawer from "../components/Drawer";
import Chat from "../components/ChatV1/Chat";

const defaultTheme = createTheme();

export default function ChatPage() {
  const [open, setOpen] = React.useState(true);
  const [title] = useState("Trang lịch hẹn khám");

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <CustomAppBar open={open} toggleDrawer={toggleDrawer} title={title} />
        <CustomDrawer open={open} toggleDrawer={toggleDrawer} />
        <Chat />
      </Box>
    </ThemeProvider>
  );
}
