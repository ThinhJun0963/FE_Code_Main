import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
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
import Table from '../components/Table';
import { GridColDef, GridFilterModel, GridLogicOperator } from '@mui/x-data-grid';
import { Button, Paper } from '@mui/material';

// function Copyright(props: any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         SmileCare
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

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


const dentistColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'img', headerName: 'Ảnh đại diện', flex: 1 },
  { field: 'name', headerName: 'Họ tên', flex: 1 },
  {
    field: 'status',
    headerName: 'Trạng thái',
    flex: 1,
    renderCell: (params) => (
      <Button variant="contained" color={params.value === 'Hoạt động' ? 'success' : 'error'}>
        {params.value}
      </Button>
    ),
  },]

const dentistRows = [
  { id: 1, img: '', name: 'Nguyễn Văn A', status: 'Hoạt động' },
  { id: 2, img: '', name: 'Nguyễn Văn B', status: 'Hoạt động' },
  { id: 3, img: '', name: 'Nguyễn Văn C', status: 'Hoạt động' },
  { id: 4, img: '', name: 'Nguyễn Văn D', status: 'Ngừng hoạt động' },
  { id: 5, img: '', name: 'Nguyễn Văn E', status: 'Hoạt động' },
  { id: 6, img: '', name: 'Nguyễn Văn F', status: 'Hoạt động' },
  { id: 7, img: '', name: 'Nguyễn Văn G', status: 'Hoạt động' },
  { id: 8, img: '', name: 'Nguyễn Văn H', status: 'Ngừng hoạt động' },
]

// const filterModel: GridFilterModel = {
//   items: [
//     { field: 'Tên', operator: 'contains', value: 'Nguyễn Văn A' }
//   ],
// };

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function DentistAccounts() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
              Trang tài khoản nha sĩ
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
            {/* <Divider sx={{ my: 1 }} />
            {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            height: '100vh',
            flexGrow: 1,
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
            <Paper>
              <Box sx={{ width: "100%", padding: "50px" }}>
                <Grid container spacing={3}>
                  <Grid item lg={12}>
                    <Typography variant="h6" component="h4">
                      Danh sách nha sĩ
                    </Typography>
                  </Grid>
                  <Grid item lg={12}>
                    <Table rows={dentistRows} columns={dentistColumns} />
                  </Grid>
                  <Grid item lg={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="contained" color="primary">Thêm nha sĩ</Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}