// Quản lý API - Fake data
export interface Appointment {
    id: number;
    patientName: string;
    date: string;
    time: string;
    notes: string;
}
const appointments: Appointment[] = [
    { id: 1, patientName: "Thinh", date: "15-06-2024", time: "10:00", notes: "Tẩy trắng răng" },
    { id: 2, patientName: "Giang", date: "20-06-2024", time: "16:00", notes: "Khám định kì" },
];

export const getAppointments = (): Promise<Appointment[]> => {
    return Promise.resolve(appointments);
};