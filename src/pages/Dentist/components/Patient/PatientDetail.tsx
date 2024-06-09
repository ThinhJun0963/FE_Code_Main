import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Patient } from "../../data";

interface PatientDetailProps {
  patient: Patient;
  onBack: () => void;
}

const PatientDetail: React.FC<PatientDetailProps> = ({ patient, onBack }) => {
  return (
    <Box
      sx={{
        mt: 4,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 8,
        maxWidth: 600,
        mx: "auto",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, color: "#333" }}>
        Hồ sơ khám
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>
          Mã bệnh nhân: {patient.patientId}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>
          Tên: {patient.patient}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>
          Ngày khám: {patient.date}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>
          Ca khám: {patient.slot}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>
          Hình thức khám: {patient.type}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>
          Trạng thái: {patient.status}
        </Typography>
      </Box>
      <Box sx={{ ml: "auto" }}>
        <Button
          variant="contained"
          onClick={onBack}
          sx={{
            backgroundColor: "#ff4d4f",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#ff7875",
            },
          }}
        >
          Quay lại
        </Button>
      </Box>
    </Box>
  );
};

export default PatientDetail;
