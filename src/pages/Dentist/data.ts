import MaterialIcon from "@mui/icons-material/Icon";
import PeopleIcon from '@mui/icons-material/People';
// import DashboardIcon from "@mui/icons-material/Dashboard";


import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

// Để quản lí dữ liệu
export interface Appointment {
    id: number;
    patientName: string;
    date: string;
    time: string;
    notes: string;
}

export interface Patient {
    id: number;
    name: string;
    birthDate: string;
    medicalHistory: string[];
}

export const sidebarData: {
    title: string, path: string, icon: typeof MaterialIcon
}[] = [
        {
            title: "Các lịch hẹn",
            path: "/dentist/appointmentInfor",
            icon: MedicalServicesIcon
        },
        {
            title: "Thông tin bệnh nhân",
            path: "/dentist/patientRecord",
            icon: PeopleIcon
        },
    ]
