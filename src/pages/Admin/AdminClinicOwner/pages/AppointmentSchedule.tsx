import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from '../components/listItems';
import { GridColDef } from '@mui/x-data-grid';
import { Button, Paper } from '@mui/material';
import Table from '../components/Table';
import DateCalendar from '../components/DateCalendar';

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const appointmentColumns: GridColDef[] = [
    { field: 'customerId', headerName: 'Mã số bệnh nhân', flex: 1 },
    { field: 'dentist', headerName: 'Nha sĩ', flex: 1 },
    { field: 'date', headerName: 'Ngày khám', flex: 1 },
    { field: 'slot', headerName: 'Ca khám', flex: 1 },
    { field: 'type', headerName: 'Hình thức khám', flex: 1, },
    {
        field: 'status',
        headerName: 'Trạng thái',
        flex: 1,
        renderCell: (params) => {
            let color: 'success' | 'primary' | 'warning' | 'secondary';
            switch (params.value) {
                case 'Hoàn thành':
                    color = 'success';
                    break;
                case 'Đang diễn ra':
                    color = 'primary';
                    break;
                case 'Sắp diễn ra':
                    color = 'warning';
                    break;
                default:
                    color = 'secondary'
            }
            return (
                <Button variant="contained" color={color}>
                    {params.value}
                </Button>
            );
        },
    },
];

const appointmentRows = [
    { id: 1, customerId: '1', dentist: 'Nguyễn Văn A', date: "26/05/2024", slot: '11:30-12:00', type: 'Khám tổng quát', status: 'Hoàn thành' },
    { id: 2, customerId: '2', dentist: 'Nguyễn Văn B', date: "30/05/2024", slot: '8:30-9:00', type: 'Khám tổng quát', status: 'Đang diễn ra' },
    { id: 3, customerId: '3', dentist: 'Nguyễn Văn C', date: "15/04/2024", slot: '9:00-9:30', type: 'Khám theo dịch vụ', status: 'Hoàn thành' },
    { id: 4, customerId: '4', dentist: 'Nguyễn Văn D', date: "26/06/2024", slot: '14:30-15:00', type: 'Khám định kì', status: 'Sắp diễn ra' },
    { id: 5, customerId: '5', dentist: 'Nguyễn Văn E', date: "23/05/2024", slot: '15:30-16:00', type: 'Khám tổng quát', status: 'Hoàn thành' },
    { id: 6, customerId: '6', dentist: 'Nguyễn Văn F', date: "26/05/2024", slot: '11:30-12:00', type: 'Khám tổng quát', status: 'Hoàn thành' },
    { id: 7, customerId: '7', dentist: 'Nguyễn Văn G', date: "30/05/2024", slot: '8:30-9:00', type: 'Khám tổng quát', status: 'Đang diễn ra' },
    { id: 8, customerId: '8', dentist: 'Nguyễn Văn H', date: "15/04/2024", slot: '9:00-9:30', type: 'Khám theo dịch vụ', status: 'Hoàn thành' },
    { id: 9, customerId: '9', dentist: 'Nguyễn Văn I', date: "26/06/2024", slot: '14:30-15:00', type: 'Khám định kì', status: 'Sắp diễn ra' },
    { id: 10, customerId: '10', dentist: 'Nguyễn Văn J', date: "23/05/2024", slot: '15:30-16:00', type: 'Khám tổng quát', status: 'Hoàn thành' },
    { id: 11, customerId: '11', dentist: 'Nguyễn Văn A', date: "26/05/2024", slot: '11:30-12:00', type: 'Khám tổng quát', status: 'Hoàn thành' },
    { id: 12, customerId: '12', dentist: 'Nguyễn Văn B', date: "30/05/2024", slot: '8:30-9:00', type: 'Khám tổng quát', status: 'Đang diễn ra' },
    { id: 13, customerId: '13', dentist: 'Nguyễn Văn C', date: "15/04/2024", slot: '9:00-9:30', type: 'Khám theo dịch vụ', status: 'Hoàn thành' },
    { id: 14, customerId: '14', dentist: 'Nguyễn Văn D', date: "26/06/2024", slot: '14:30-15:00', type: 'Khám định kì', status: 'Sắp diễn ra' },
    { id: 15, customerId: '15', dentist: 'Nguyễn Văn E', date: "23/05/2024", slot: '15:30-16:00', type: 'Khám tổng quát', status: 'Hoàn thành' },
    { id: 16, customerId: '16', dentist: 'Nguyễn Văn F', date: "26/05/2024", slot: '11:30-12:00', type: 'Khám tổng quát', status: 'Hoàn thành' },
    { id: 17, customerId: '17', dentist: 'Nguyễn Văn G', date: "30/05/2024", slot: '8:30-9:00', type: 'Khám tổng quát', status: 'Đang diễn ra' },
    { id: 18, customerId: '18', dentist: 'Nguyễn Văn H', date: "15/04/2024", slot: '9:00-9:30', type: 'Khám theo dịch vụ', status: 'Hoàn thành' },
    { id: 19, customerId: '19', dentist: 'Nguyễn Văn I', date: "26/06/2024", slot: '14:30-15:00', type: 'Khám định kì', status: 'Sắp diễn ra' },
    { id: 20, customerId: '20', dentist: 'Nguyễn Văn J', date: "23/05/2024", slot: '15:30-16:00', type: 'Khám tổng quát', status: 'Hoàn thành' },
]

export default function AppointmentSchedule() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open}>
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
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
                        Trang lịch hẹn khám
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
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
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    marginTop: 8
                }}
            >
                <Box sx={{ height: '100%', backgroundColor: '#ffffff' }}>
                    <Grid container spacing={3}>
                        <Grid item lg={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    margin: '20px auto 0 auto',
                                    width: '95%',
                                    boxShadow: 3,
                                    border: '1px solid #ddd',
                                    backgroundColor: '#ffffff',
                                    borderRadius: 2,
                                    alignItems: 'flex-start'
                                }}
                            >
                                <Typography variant="h6" component="h4">
                                    Các lịch hẹn
                                </Typography>
                                <Table rows={appointmentRows} columns={appointmentColumns} />
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}
