import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";


import { mainListItems } from "../components/listItems";
import styles from "./ServicesInformation.module.css";

import {
    Box,
    Typography,
} from "@mui/material";

import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
import ServiceList from "../components/ServiceList";
import { useState } from "react";

const drawerWidth: number = 240;


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

interface Service {
    serviceId: string;
    serviceName: string;
    price: number;
    description: string;
    duration?: number;
}


const serviceList: Service[] = [
    { serviceId: '1', serviceName: 'Khám tổng quát', price: 500000, description: 'Kiểm tra sức khỏe tổng thể' },
    { serviceId: '2', serviceName: 'Trám răng', price: 300000, description: 'Trám răng sâu, răng vỡ' },
    { serviceId: '3', serviceName: 'Nhổ răng', price: 200000, description: 'Nhổ răng sữa, răng khôn' },
    { serviceId: '4', serviceName: 'Lấy cao răng', price: 150000, description: 'Vệ sinh răng miệng, loại bỏ cao răng' },
    { serviceId: '5', serviceName: 'Chỉnh nha', price: 5000000, description: 'Niềng răng, chỉnh sửa khớp cắn' },
];



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

const ServicesInformation = () => {
    const [open, setOpen] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        serviceId: '',
        serviceName: '',
        price: 0,
        description: '',
    });

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            serviceId: '',
            serviceName: '',
            price: 0,
            description: '',
        });
        toggleModal();
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
                        Trang dịch vụ
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
                    color: '#0d47a1',
                    background: 'linear-gradient(to left, #e3f2fd, #f8fbff)',
                    height: '100vh'
                }}
            >
                <div className={styles.mainContainer} >
                    <div className={styles.tableContainer}>
                        {/* Table component */}
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên dịch vụ</th>
                                    <th>Giá</th>
                                    <th>Mô tả</th>
                                    <th>
                                        <Box className={styles.tooltip}>
                                            Hành động
                                            <span className={styles.tooltiptext}>Chỉnh sửa hoặc xóa</span>
                                            <span className={styles.tooltipicon}>i</span>
                                        </Box>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {serviceList.map((service: Service) => (
                                    <tr key={service.serviceId} className={styles.tableRow}>
                                        <td>{service.serviceId}</td>
                                        <td>{service.serviceName}</td>
                                        <td>{service.price}</td>
                                        <td>{service.description}</td>
                                        <td>
                                            <div className={styles.actionsContainer}>
                                                <button className={styles.editButton}>Sửa</button>
                                                <button className={styles.deleteButton}>Xóa</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Button to trigger modal */}
                    <Button color="primary" onClick={toggleModal}>Thêm dịch vụ</Button>
                </div>
                <Modal isOpen={modalOpen} toggle={toggleModal} centered>
                    <ModalHeader toggle={toggleModal}>Thêm dịch vụ</ModalHeader>
                    <ModalBody>
                        <form onSubmit={handleFormSubmit}>
                            <FormGroup>
                                <Label for="serviceName">Tên dịch vụ</Label>
                                <Input
                                    type="text"
                                    name="serviceName"
                                    id="serviceName"
                                    value={formData.serviceName}
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="price">Giá</Label>
                                <Input
                                    type="number"
                                    name="price"
                                    id="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Mô tả</Label>
                                <Input
                                    type="textarea"
                                    name="description"
                                    id="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                            <Button type="submit" color="primary">Lưu</Button>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggleModal}>Hủy</Button>
                    </ModalFooter>
                </Modal>
            </Box>
        </Box>
    );
};

export default ServicesInformation
