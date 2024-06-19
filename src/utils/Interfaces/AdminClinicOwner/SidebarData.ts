import MaterialIcon from "@mui/icons-material/Icon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

export interface sidebarData {
    title: string, 
    path: string, 
    icon: typeof MaterialIcon
}
export const sidebarData: {
    title: string, path: string, icon: typeof MaterialIcon
}[] = [
        {
            title: "Trang chủ",
            path: "/admin/clinic-owner",
            icon: DashboardIcon
        },
        {
            title: "Phòng khám",
            path: "/admin/clinic-owner/clinic",
            icon: MedicalServicesIcon
        },
        {
            title: "Nha sĩ",
            path: "/admin/clinic-owner/dentist",
            icon: PeopleIcon
        },
        {
            title: "Lịch hẹn",
            path: "/admin/clinic-owner/appointment",
            icon: CalendarMonthIcon
        },
    ]
