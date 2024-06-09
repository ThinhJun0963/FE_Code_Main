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
  id: number,
  patientId: string ,
  patient: string,
  date: string,
  slot: string,
  type: string,
  status: string,
}

export const sidebarData: {
    title: string, path: string, icon: typeof MaterialIcon
}[] = [
        {
            title: "Lịch hẹn",
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
        {
          Id: 2,
          Subject: 'Khám dịch vụ',            
          StartTime: new Date(2024, 5, 10, 12, 30),
          EndTime: new Date(2024, 5, 10, 10, 0),
          IsAllDay: false,
          Description:'Mr.Giang',
          Location:"Nha Khoa Asia"
      }, 
    ];
    
     export const FormPaper = styled(Paper) ({
        width: "100%",
        height: "auto",
        margin: "0 auto",
        border: "1px solid #ddd",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)", 
      });
    