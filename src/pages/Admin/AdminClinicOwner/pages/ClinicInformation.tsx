import * as React from "react";
import { styled } from "@mui/material/styles";
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
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styles from "./ClinicInformation.module.css";
import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import ImageUpload from "../components/ImageUpload";
import ServiceList from "../components/ServiceList";

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

export default function ClinicInformation() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [isDesDialogOpen, setIsDesDialogOpen] = useState(false);
  const [editorData, setEditorData] = useState('');
  const [textAreaContent, setTextAreaContent] = useState('');

  const [isSerDialogOpen, setIsSerDialogOpen] = useState(false);
  const [services, setServices] = useState(['Service 1', 'Service 2', 'Service 3']);
  const [selectedService, setSelectedService] = useState('');
  const [newService, setNewService] = useState('');

  const handleEditorChange = (event: any, editor: { getData: () => any; }) => {
    const data = editor.getData();
    setEditorData(data);
  };

  const handleEditClick = () => {
    setEditorData(textAreaContent);
    setIsDesDialogOpen(true);
  };

  const handleDesSave = () => {
    setTextAreaContent(editorData);
    setIsDesDialogOpen(false);
  };


  const handleAddClick = () => {
    setIsSerDialogOpen(true);
  };

  const handleServiceSave = () => {
    if (newService) {
      setServices([...services, newService]);
      setNewService('');
      setIsSerDialogOpen(false);
    }
  };
  return (
    <Box sx={{ display: "flex", height: '100%' }}>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px",
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
            Trang thông tin phòng khám
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
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          marginTop: 5.5,
          height: '100%',
          color: '#0d47a1',
          background: 'linear-gradient(to left, #e3f2fd, #f8fbff)'
        }}
      >
        <div className={styles.mainContainer}>
          <div className={styles.main}>
            <div className={styles.headerContainer}>
              <h1 className={styles.title}>Thông tin phòng khám</h1>
              <div className={styles.imgBox}>
                <label htmlFor="file-input">
                  <img src="/path/to/upload-icon.png" alt="Upload Icon" />
                  <span>Click</span>
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  hidden
                />
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.column1}>
                <div className={styles.formGroup}>
                  <label htmlFor="clinicName">Tên phòng khám</label>
                  <input type="text" id="clinicName" name="name" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="clinicAddress">Địa chỉ</label>
                  <input type="text" id="clinicAddress" name="address" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="clinicPhone">Số điện thoại</label>
                  <input type="text" id="clinicPhone" name="phone" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="clinicEmail">Email</label>
                  <input type="text" id="clinicEmail" name="email" />
                </div>
                <div className={styles.formGroupHorizontal}>
                  <div className={styles.formGroup}>
                    <label htmlFor="openHour">Giờ mở cửa</label>
                    <input type="text" id="openHour" name="open_hour" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="closeHour">Giờ đóng cửa</label>
                    <input type="text" id="closeHour" name="close_hour" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Mô tả</label>
                  <input
                    className={styles.textArea}
                    value={textAreaContent}
                    onChange={(e) => setTextAreaContent(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    className={styles.editButton}
                    onClick={handleEditClick}
                  >
                    Chỉnh sửa
                  </Button>

                  <Dialog
                    open={isDesDialogOpen}
                    onClose={() => setIsDesDialogOpen(false)}
                    maxWidth="md"
                    fullWidth
                  >
                    <DialogTitle>Edit Description</DialogTitle>
                    <DialogContent>
                      <CKEditor
                        editor={ClassicEditor}
                        data={editorData}
                        onChange={handleEditorChange}
                        config={{
                        }}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => setIsDesDialogOpen(false)} color="secondary">
                        Hủy
                      </Button>
                      <Button onClick={handleDesSave} color="primary">
                        Lưu
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
              <div className={styles.column2}>
                <div className={styles.formGroup}>
                  <ServiceList />
                </div>
                <div className={styles.formGroup}>
                  <ImageUpload />
                </div>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <Button color="primary" className={styles.editButton} variant="contained">
                Chỉnh sửa
              </Button>
            </div>
          </div>

        </div>
      </Box>
    </Box>
  );
}
