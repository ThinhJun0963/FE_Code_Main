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
