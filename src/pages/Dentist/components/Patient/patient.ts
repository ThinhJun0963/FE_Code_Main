import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export interface Patient {
    id: number;
    patientId: string;
    patient: string;
    date: string;
    slot: string;
    type: string;
    status: string;
  }
  
  const patients: Patient[] = [
    {
      id: 1,
      patientId: "5",
      patient: "Phạm Đình Quốc Thịnh 1",
      date: "15/06/2024",
      slot: "11:30-12:00",
      type: "Khám tổng quát",
      status: "Chưa khám",
    },
    {
      id: 2,
      patientId: "3",
      patient: "Phạm Đình Quốc Thịnh 2",
      date: "30/05/2024",
      slot: "8:30-9:00",
      type: "Khám tổng quát",
      status: "Đã khám",
    },
    {
      id: 3,
      patientId: "2",
      patient: "Phạm Đình Quốc Thịnh 3",
      date: "15/06/2024",
      slot: "9:00-9:30",
      type: "Khám theo dịch vụ",
      status: "Chưa khám",
    },
    {
      id: 4,
      patientId: "6",
      patient: "Phạm Đình Quốc Thịnh 5",
      date: "26/05/2024",
      slot: "14:30-15:00",
      type: "Khám định kì",
      status: "Đã khám",
    },
    {
      id: 5,
      patientId: "4",
      patient: "Phạm Đình Quốc Thịnh 10",
      date: "07/06/2024",
      slot: "15:30-16:00",
      type: "Khám tổng quát",
      status: "Hủy khám",
    },
  ];
  
  export const getPatients = (): Promise<Patient[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(patients);
      }, 1000);
    });
  };
  
  export const getPatientById = async (id: string): Promise<Patient | null> => {
    const patient = patients.find((p) => p.id.toString() === id);
    return patient ? patient : null;
  };
  

  
export const FormPaper = styled(Paper) ({
  width: "100%",
  height: "auto",
  margin: "0 auto",
  border: "1px solid #ddd",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)", 
});