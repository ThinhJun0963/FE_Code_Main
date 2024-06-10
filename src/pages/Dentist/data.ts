import MaterialIcon from "@mui/icons-material/Icon";
import PeopleIcon from '@mui/icons-material/People';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';


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
    
    