import {
  Button,
  Box,
  Grid,
  Link,
  Divider,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from './SignUpForm.module.css'
import { handleRegister } from "../../../utils/api/AuthenticateUtils";
import { ArrowBack, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const SignUpForm = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      handleRegister(event, () => {
        navigate(-1);
      });
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      onSubmit={(event) => handleSubmit(event)}
      noValidate
      className={styles.form}
    >
      <Box className={styles.buttonBox}>
        <button type="button" className={styles.backButton} onClick={handleBack}>
          <ArrowBack />
        </button>
      </Box>
      <Box className={styles.centerText} >
        Đăng kí
      </Box>
      <Box className={styles.formContainer}>
        <TextField
          className={styles.input}
          required
          fullWidth
          id="username"
          label="Tên tài khoản"
          name="username"
        />
        <TextField
          className={styles.input}
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
        />
        <TextField
          required
          className={styles.input}
          fullWidth
          name="password"
          label="Mật khẩu"
          type={showPassword ? "text" : "password"}
          id="password"
          autoComplete="off"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => handleSubmit}
          sx={{ width: "100%" }}
        >
          Đăng kí
        </Button>

      </Box>
    </Box >
  );
};

export default SignUpForm;
