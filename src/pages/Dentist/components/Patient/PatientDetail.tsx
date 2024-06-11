import React, { useState } from "react";
import { Typography, Button, Box, Modal, TextField } from "@mui/material";
import { Patient } from "./patient";

interface PatientDetailProps {
  patient: Patient;
  onBack: () => void;
}

const PatientDetail: React.FC<PatientDetailProps> = ({ patient, onBack }) => {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    console.log("Note:", note);
    handleClose();
  };

  // Kiểm tra trạng thái của bệnh nhân để xác định liệu nút "Gửi kết quả" có nên được hiển thị hay không
  const showSendResultButton = patient.status === "Đã khám";

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
        Hồ sơ bệnh nhân
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

      <Box sx={{ ml: "auto", display: "flex", gap: 1 }}>
        {showSendResultButton && (
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{
              backgroundColor: "#4caf50",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#66bb6a",
              },
            }}
          >
            Gửi kết quả
          </Button>
        )}

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
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Xác nhận thông tin
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">
              Mã bệnh nhân: {patient.patientId}
            </Typography>
            <Typography variant="body1">Tên: {patient.patient}</Typography>
            <Typography variant="body1">Ngày khám: {patient.date}</Typography>
            <Typography variant="body1">Ca khám: {patient.slot}</Typography>
            <Typography variant="body1">
              Hình thức khám: {patient.type}
            </Typography>
            <Typography variant="body1">
              Trạng thái: {patient.status}
            </Typography>
            <TextField
              label="Ghi chú"
              multiline
              rows={4}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              sx={{ mt: 2, width: "100%" }}
            />
          </Box>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#4caf50",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#66bb6a",
                },
              }}
            >
              Gửi
            </Button>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{
                backgroundColor: "#ff4d4f",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#ff7875",
                },
              }}
            >
              Hủy
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default PatientDetail;
