import { Patient } from '../data';

const patients: Patient[] = [
    { id: 1, name: "Thinh", birthDate: "1990", medicalHistory: ["15-05-2023: Khám răng"] },
    { id: 2, name: "Giang", birthDate: "1990", medicalHistory: ["20-05-2024: Khám định kì"] },

];

export const getPatients = (): Promise<Patient[]> => {
    return Promise.resolve(patients);
};
