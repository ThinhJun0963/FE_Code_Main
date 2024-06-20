import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import LoginForm from "./components/LoginForm";
import styles from "./LoginMUI.module.css";

export default function SignIn() {
    return (
        <Box className={styles.container}>
            <LoginForm />
            <Box className={styles.backgroundImageBox}></Box>
        </Box>
    );
}
