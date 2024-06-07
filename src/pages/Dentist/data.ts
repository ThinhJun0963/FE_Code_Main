import MaterialIcon from "@mui/icons-material/Icon";
import PeopleIcon from '@mui/icons-material/People';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

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
            title: "Lịch hẹn trong tuần",
            path: "/dentist/dentist-schedule",
            icon: MedicalServicesIcon
        },
        {
            title: "Hồ sơ bệnh nhân",
            path: "/dentist/patient-record",
            icon: PeopleIcon
        },
    ]

    export const defaultData: object [] = [
     {
            Id: 1,
            Subject: 'Khám tổng quát',            
            StartTime: new Date(2024, 5, 7, 7, 30),
            EndTime: new Date(2024, 5, 7, 8, 0),
            IsAllDay: false,
            Description:'Mr.Thinh',
            Location:"Nha Khoa Tại Nhà"
        }, 
    ];
    
