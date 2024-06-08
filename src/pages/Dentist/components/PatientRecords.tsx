import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";

import { getPatients } from "../InfoData/patientInfor";
import { Patient } from "../data";

const PatientRecords: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

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

  return (
    <Main component="main">
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <div>
                <h2>Danh sách các bệnh nhân</h2>
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
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Main>
  );
};
export default PatientRecords;
