import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import CustomAppBar from "../components/AppBar";
import CustomDrawer from "../components/Drawer";
import PatientRecords from "../components/PatientRecords";

const defaultTheme = createTheme();

export default function PatientRecordPage() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <CustomAppBar open={open} toggleDrawer={toggleDrawer} />
        <CustomDrawer open={open} toggleDrawer={toggleDrawer} />
        <PatientRecords />
      </Box>
    </ThemeProvider>
  );
}
