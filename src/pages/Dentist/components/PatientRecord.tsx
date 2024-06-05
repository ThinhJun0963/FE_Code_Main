// src/components/PatientRecord.tsx

import React, { useEffect, useState } from "react";
import { getPatients } from "../Info/patientInfor";
import { Patient } from "../data";

const PatientRecord: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    getPatients().then((data) => setPatients(data));
  }, []);

  return (
    <div>
      <h2>Hồ sơ bệnh nhân</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - Birth Date: {patient.birthDate}
            <ul>
              {patient.medicalHistory.map((record, index) => (
                <li key={index}>{record}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientRecord;
