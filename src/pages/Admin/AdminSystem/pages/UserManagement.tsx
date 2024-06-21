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
import styles from "./UserManagement.module.css";
import { UsersToDisplay } from "../../../../utils/api/SystemAdminUtils";
import { useEffect, useState } from "react";
import { UserRegistrationModel } from "../../../../utils/interfaces/User/UserDefinition";
//-------------------------------API Call---------------------------------
import { getUsers, registerUser, setUserStatus } from '../../../../utils/api/SystemAdminUtils';
//-------------------------------Diaglog---------------------------------
import ConfirmationDialog from "../components/ConfirmationDialog";
import UserModal from "../components/UserModal";
import { useNavigate } from "react-router-dom";


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


const UserManagement = () => {
    const navigator = useNavigate();

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    //----------------------------------------------------------------------
    //State variable
    const [users, setUsers] = useState<UsersToDisplay[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false); 
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null); 
    const [filteredUsers, setFilteredUsers] = useState<UsersToDisplay[]>([]);
    const [filterRole, setFilterRole] = useState<string>('');
    //----------------------------------------------------------------------
   
    //----------------------------------------------------------------------
    //Action handlers
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openConfirmDialog = (userId: number) => {
        setSelectedUserId(userId);
        setConfirmOpen(true);
    };

    const closeConfirmDialog = () => {
        setConfirmOpen(false);
        setSelectedUserId(null); // Reset selected user id
    };

    const onTableRowClick = (userId: number) => { 
        navigator(`/system-admin/user/${userId}`);
    }
    //----------------------------------------------------------------------

    //----------------------------------------------------------------------
    //Fetch data
    const fetchUsers = async () => {
        try {
            const usersData = await getUsers();
            setUsers(usersData);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    //----------------------------------------------------------------------


    //----------------------------------------------------------------------
    //API calls
    const handleRegisterUser = async (formData: UserRegistrationModel) => {
        try {
            await registerUser(formData);
            await fetchUsers(); 
            setIsModalOpen(false); 
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    const handleButtonClick = async (userId : number, status: boolean | null) => {
        try {
            openConfirmDialog(userId); 
        } catch (error) {
            console.error('Error updating user status:', error);
        }
    };

    const confirmAction = async () => {
        try {
            await setUserStatus(selectedUserId!, users.find(user => user.id === selectedUserId)?.status || null); 
            await fetchUsers();
            closeConfirmDialog();
        } catch (error) {
            console.error('Error confirming action:', error);
        }
    };
    //----------------------------------------------------------------------

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
                    pt={8}
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
                                    <input type="text" placeholder="Tìm kiếm người dùng" className={styles.searchInput} />
                                    <button className={styles.searchButton}>Tìm kiếm</button>
                                </Box>
                                <Box className={styles.utilities}>
                                    <select className={styles.filterSelect}>
                                        <option value="">Filter</option>
                                        <option value="role1">Role 1</option>
                                        <option value="role2">Role 2</option>
                                    </select>
                                    <button className={styles.addButton} onClick={openModal}>
                                        Thêm người dùng
                                    </button>
                                </Box>
                            </Box>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Số điện thoại</th>
                                        <th>Ngày tạo</th>
                                        <th>Role</th>
                                        <th>
                                            <Box className={styles.tooltip}>
                                                Trạng thái
                                                <span className={styles.tooltiptext}>Nhấn để cập nhật trạng thái</span>
                                                <span className={styles.tooltipicon}>!</span>
                                            </Box>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id} className={styles.tableRow} >
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.joinedDate ? user.joinedDate.toString() : ""}</td>
                                            <td>{user.gender}</td>
                                            <td>
                                                <button
                                                    className={`${styles.statusButton} ${user.status ? styles.active : styles.inactive}`}
                                                    onClick={() => handleButtonClick(user.id, user.status)}
                                                >                    
                                                    {user.status ? 'Hoạt động' : 'Ngừng hoạt động'}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <UserModal isOpen={isModalOpen} onClose={closeModal} onRegister={handleRegisterUser} />
                            <ConfirmationDialog open={confirmOpen} onClose={closeConfirmDialog} onConfirm={confirmAction} />
                        </div>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}


export default UserManagement