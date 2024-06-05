import React, { useEffect, useState } from "react";
import { getAppointments } from "../Info/appointmentInfor";
import { Appointment } from "../data";

const AppointmentList: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    getAppointments().then((data) => setAppointments(data));
  }, []);

  return (
    <div>
      <h2>Các lịch hẹn của bạn</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.patientName} - {appointment.date} at {appointment.time}{" "}
            - {appointment.notes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
