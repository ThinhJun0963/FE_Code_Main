import MaterialIcon from "@mui/icons-material/Icon";
import PeopleIcon from '@mui/icons-material/People';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

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
            title: "Bệnh nhân",
            path: "/dentist/patient-list",
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
    

    export const appointmentRows = [
        {
          id: 1,
          customerId: "5",
          patient: "Phạm Đình Quốc Thịnh 1",
          date: "15/06/2024",
          slot: "11:30-12:00",
          type: "Khám tổng quát",
          status: "Chưa khám",
        },
        {
          id: 2,
          customerId: "3",
          patient: "Phạm Đình Quốc Thịnh 2",
          date: "30/05/2024",
          slot: "8:30-9:00",
          type: "Khám tổng quát",
          status: "Đã khám",
        },
        {
          id: 3,
          customerId: "2",
          patient: "Phạm Đình Quốc Thịnh 3",
          date: "15/06/2024",
          slot: "9:00-9:30",
          type: "Khám theo dịch vụ",
          status: "Chưa khám",
        },
        {
          id: 4,
          customerId: "6",
          patient: "Phạm Đình Quốc Thịnh 5",
          date: "26/05/2024",
          slot: "14:30-15:00",
          type: "Khám định kì",
          status: "Đã khám",
        },
        {
          id: 5,
          customerId: "4",
          patient: "Phạm Đình Quốc Thịnh 10",
          date: "07/06/2024",
          slot: "15:30-16:00",
          type: "Khám tổng quát",
          status: "Hủy khám",
        },
      ];
    
     export const FormPaper = styled(Paper) ({
        width: "100%",
        height: "auto",
        margin: "0 auto",
        border: "1px solid #ddd", // Add border
        boxShadow: "0 0 10px rgba(0,0,0,0.1)", // Add shadow
      });
    