import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import SignUpForm from "./components/SignUpForm";
import styles from "./SignUpMUI.module.css"; 

export default function SignUp() {
  return (
    <Box className={styles.container}>
      {/* <Paper className={styles.formPaper}> */}
        <Grid container className={styles.gridContainer}>
          <Grid item lg={12} className={styles.signupGrid}>
            <Box>
              <SignUpForm />
            </Box>
          </Grid>
        </Grid>
      {/* </Paper> */}
      <Box className={styles.backgroundImageBox}></Box>

    </Box>

    
  );
}
