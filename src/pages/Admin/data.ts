import MaterialIcon from "@mui/icons-material/Icon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';


export type AdminClinicData = {
    title: string;
    content: string;
}[];

export const adminClinicData = [
    { title: "Số lịch hẹn tháng này", content: "" },
    { title: "Số người truy cập tháng này", content: "" },
];

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
            title: "Lịch hẹn",
            path: "/admin/clinic-owner/appointment",
            icon: CalendarMonthIcon
        },
    ]

export const slots = [
    "7:30-8:00",
    "8:00-8:30",
    "8:30-9:00",
    "9:00-9:30",
    "9:30-10:00",
    "10:00-10:30",
    "10:30-11:00",
    "11:00-11:30",
    "13:30-14:00",
    "14:00-14:30",
    "14:30-15:00",
    "15:00-15:30",
    "15:30-16:00",
    "16:00-16:30",
    "16:30-17:00",
];

export const dentistAccounts = [
    { image: "", name: "Nguyễn Văn A", status: "active" },
    { image: "", name: "Nguyễn Văn B", status: "inactive" },
    { image: "", name: "Nguyễn Văn C", status: "inactive" },
    { image: "", name: "Nguyễn Văn D", status: "active" },
    { image: "", name: "Nguyễn Văn E", status: "active" },
    { image: "", name: "Nguyễn Văn F", status: "inactive"},
    { image: "", name: 'Nguyễn Văn G', status: 'active' },
    { image: "", name: 'Nguyễn Văn H', status: 'active' },
    { image: "", name: 'Nguyễn Văn I', status: 'active' },
]
