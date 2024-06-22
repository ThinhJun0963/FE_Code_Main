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
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connection_path } from "../../../constants/developments";
import styles from "./LoginForm.module.css";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";


const SignUpForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const data = new FormData(event.currentTarget);

      const payload = {
        username: data.get("username"),
        password: data.get("password"),
        email: data.get("email"),
      };

      const url = connection_path.base_url + connection_path.user.register;
      const request = await axios.post(url, payload);
      console.log(request.data); // Log the response data
      console.log(request.status); // Log the response status

      if (request.status === 200) {
        alert("Signup success");
        navigate("/login"); // Redirect to login page
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      console.error(error); // Log any error that occurred
      alert("Signup failed");
    }
  };
//add eye-icon to password
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box component="form"
     onSubmit={handleSubmit}
     noValidate

    >
      <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
        Tạo tài khoản
      </Typography>
      <Box sx={{ width: "90%", margin: "0 auto", padding: "50px" }}>
        <Grid container spacing={5}>
          <Grid item lg={12}>
            <TextField
             className={styles.input}
              required
              fullWidth
              id="username"
              label="Tên tài khoản"
              name="username"
              
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
             className={styles.input}
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
             className={styles.input}
              required
              fullWidth
              id="password"
              label="Mật khẩu"
              name="password"
              type={showPassword ? "text" : "password"}
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
          </Grid>
          <Grid item lg={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: "100%" }}
            >
              Đăng kí
            </Button>
          </Grid>
          <Grid item lg={12}>
            <Divider sx={{ backgroundColor: "black" }} />
          </Grid>
          <Grid item lg={12}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Đã có tài khoản?
              <Box ml={1}>
                <Link href="/login" variant="body2" sx={{ fontSize: "17px" }}>
                  Đăng nhập
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUpForm;
