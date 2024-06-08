// import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { appointmentRows } from "../data";
import { FormPaper } from "../data";
// import { getPatients } from "../InfoData/patientInfor";
// import { Patient } from "../data";
import Table from "./Table";

const PatientRecords: React.FC = () => {
  // const [patients, setPatients] = useState<Patient[]>([]);

  // useEffect(() => {
  //   getPatients().then((data) => setPatients(data));
  // }, []);

  const Main = styled(Box)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  }));

  const appointmentColumns: GridColDef[] = [
    { field: "customerId", headerName: "Mã bệnh nhân", flex: 1 },
    { field: "patient", headerName: "Tên", flex: 1 },
    { field: "date", headerName: "Ngày khám", flex: 1 },
    { field: "slot", headerName: "Ca khám", flex: 1 },
    { field: "type", headerName: "Hình thức khám", flex: 1 },
    {
      field: "status",
      headerName: "Trạng thái",
      flex: 1,
      renderCell: (params) => {
        let color: "success" | "primary" | "warning" | "secondary";
        switch (params.value) {
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
          <Button variant="contained" color={color}>
            {params.value}
          </Button>
        );
      },
    },
  ];

  return (
    <Main component="main">
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <FormPaper>
              <Typography
                variant="h6"
                component="h4"
                sx={{ flexGrow: 1, paddingLeft: 7, marginTop: 4 }}
              >
                Danh sách bệnh nhân
              </Typography>
              <Box sx={{ width: "100%", padding: "50px" }}>
                <Grid container spacing={3}>
                  <Grid item lg={12}>
                    <Table
                      rows={appointmentRows}
                      columns={appointmentColumns}
                    />
                  </Grid>
                </Grid>
              </Box>
            </FormPaper>
          </Grid>
        </Grid>
      </Container>
    </Main>
  );
};
export default PatientRecords;
