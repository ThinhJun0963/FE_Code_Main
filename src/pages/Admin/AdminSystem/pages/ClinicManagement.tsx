import * as React from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems } from "../components/listItems";

import { ClinicInfoModel, getAllClinics } from "../../../../utils/api/SystemAdminUtils";
import styles from "./ClinicManagement.module.css";
import { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";
import { verifyClinicStatus } from "../../../../utils/api/SystemAdminUtils";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

const defaultTheme = createTheme();


const ClinicManagement = () => {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const [clinics, setClinics] = useState<ClinicInfoModel[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>('');

    const fetchClinics = async (page: number) => {
        setLoading(true);
        try {
            const data = await getAllClinics(page);
            if (typeof data === 'string') {
                setError(data);
            } else {
                setClinics(data);
            }
        } catch (error) {
            setError(error as string);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClinics(1);
    }, []);

    const handleVerifyClinic = async (clinicId: number) => {
        try {
            const updatedClinicInfo = await verifyClinicStatus(clinicId);
            // Optionally update clinics state or handle success message
            console.log('Clinic status updated:', updatedClinicInfo);
            // Example: Update the clinics state to reflect the updated status
            const updatedClinics = clinics.map(clinic => {
                if (clinic.id === clinicId) {
                    return { ...clinic, status: 'verified' }; // Update status to 'verified' after successful update
                }
                return clinic;
            });
            setClinics(updatedClinics);
        } catch (error) {
            console.error('Error updating clinic status:', error);
            // Handle error scenario (show error message, etc.)
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: "flex" }}>
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: "24px", // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: "36px",
                                ...(open && { display: "none" }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Trang tài khoản người dùng
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    pt={10}
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <Box className={styles.mainContainer}>
                        <div className={styles.tableContainer}>
                            <Box className={styles.toolbar}>
                                <Box className={styles.searchbar}>
                                    <input type="text" placeholder="Tìm kiếm phòng khám" className={styles.searchInput} />
                                    <button className={styles.searchButton}>Tìm kiếm</button>
                                </Box>
                            </Box>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tên phòng khám</th>
                                        <th>Địa chỉ</th>
                                        <th>Giờ mở cửa</th>
                                        <th>Email</th>
                                        <th>Số điện thoại</th>
                                        <th>ID chủ phòng khám</th>
                                        <th>Trạng thái</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr>
                                            <td colSpan={8}>Loading...</td>
                                        </tr>
                                    ) : error ? (
                                        <tr>
                                            <td colSpan={8}>Error: {error}</td>
                                        </tr>
                                    ) : (
                                        clinics.map((clinic) => (
                                            <tr key={clinic.id}>
                                                <td>{clinic.id}</td>
                                                <td>{clinic.name}</td>
                                                <td>{clinic.address}</td>
                                                <td>{clinic.openHour}</td>
                                                <td>{clinic.email}</td>
                                                <td>{clinic.phone}</td>
                                                <td>{clinic.ownerId}</td>
                                                <td>{clinic.status}</td>
                                                <td>
                                                    {clinic.status === 'verified' ? (
                                                        <button
                                                            className={`${styles.statusButton} ${styles.verifiedButton}`}
                                                            onClick={() => handleVerifyClinic(clinic.id)}
                                                        >
                                                            Verified
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className={styles.statusButton}
                                                            onClick={() => handleVerifyClinic(clinic.id)}
                                                        >
                                                            Verify
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default ClinicManagement