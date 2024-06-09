import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { FormPaper } from "../../data";
import { getPatients, getPatientById } from "./patient";
import { Patient } from "../../data";
import Table from "../Table";
import PatientDetail from "./PatientDetail";
import { GridColDef, GridCellParams } from "@mui/x-data-grid";

const PatientRecords: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  useEffect(() => {
    getPatients().then((data) => setPatients(data));
  }, []);

  const Main = styled(Box)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  }));

  const handleStatusClick = async (id: string) => {
    const patient = await getPatientById(id);
    setSelectedPatient(patient);
  };

  const patientColumns: GridColDef[] = [
    { field: "patientId", headerName: "Mã bệnh nhân", flex: 1 },
    { field: "patient", headerName: "Tên", flex: 1 },
    { field: "date", headerName: "Ngày khám", flex: 1 },
    { field: "slot", headerName: "Ca khám", flex: 1 },
    { field: "type", headerName: "Hình thức khám", flex: 1 },
    {
      field: "status",
      headerName: "Trạng thái",
      flex: 1,
      renderCell: (params: GridCellParams) => {
        const value = params.value?.toString();
        const id = params.id.toString();

        let color: "success" | "primary" | "warning" | "secondary";
        switch (value) {
          case "Đã khám":
            color = "success";
            break;
          case "Hủy khám":
            color = "primary";
            break;
          case "Chưa khám":
            color = "warning";
            break;
          default:
            color = "secondary";
        }

        return (
          <Button
            variant="contained"
            color={color}
            onClick={() => handleStatusClick(id)}
          >
            {value}
          </Button>
        );
      },
    },
  ];
  const renderPatientSection = (title: string, patients: Patient[]) => (
    <Grid item xs={12} md={4} paddingBottom={3}>
      <FormPaper>
        <Typography
          variant="h6"
          component="h4"
          sx={{ flexGrow: 1, paddingLeft: 7, marginTop: 4 }}
        >
          {title}
        </Typography>
        <Box sx={{ width: "100%", padding: "50px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Table rows={patients} columns={patientColumns} />
            </Grid>
          </Grid>
        </Box>
      </FormPaper>
    </Grid>
  );

  const patientsPending = patients.filter(
    (patient) => patient.status === "Chưa khám"
  );
  const patientsCompleted = patients.filter(
    (patient) => patient.status === "Đã khám"
  );
  const patientsCanceled = patients.filter(
    (patient) => patient.status === "Hủy khám"
  );

  return (
    <Main component="main">
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {selectedPatient ? (
          <PatientDetail
            patient={selectedPatient}
            onBack={() => setSelectedPatient(null)}
          />
        ) : (
          <>
            {renderPatientSection("Bệnh nhân chưa khám", patientsPending)}
            {renderPatientSection("Bệnh nhân đã khám", patientsCompleted)}
            {renderPatientSection("Bệnh nhân hủy khám", patientsCanceled)}
          </>
        )}
      </Container>
    </Main>
  );
};

export default PatientRecords;
