import MaterialIcon from "@mui/icons-material/Icon";
import PeopleIcon from '@mui/icons-material/People';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export interface sidebarData {
    title: string, 
    path: string, 
    icon: typeof MaterialIcon
}

export const sidebarData: {
    title: string, path: string, icon: typeof MaterialIcon
}[] = [
        {
            title: "Lịch hẹn",
            path: "/dentist/dentist-schedule",
            icon: CalendarMonthIcon
        },
        {
            title: "Bệnh nhân",
            path: "/dentist/patient-list",
            icon: MedicalServicesIcon
        },
        {
            title: "Tin nhắn",
            path: "/dentist/chat",
            icon: PeopleIcon
        },
    ]
