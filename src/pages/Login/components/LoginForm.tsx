import { Button, Box, Grid, Checkbox, Link, Divider, Typography, TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { connection_path } from '../../../constants/developments';
import { GoogleCredentialResponse, GoogleLogin } from '@react-oauth/google';
import * as React from 'react';
import { InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import { handleLogin } from '../../../utils/api/AuthenticateUtils';

const LoginForm = () => {

  const navigator = useNavigate(); 

  const handleGoogleOnSuccess = async (response: GoogleCredentialResponse) => {
    const api_url: string = connection_path.base_url + connection_path.api + connection_path.endpoints.googeAuth;

    const configuration: AxiosRequestConfig = { method: "POST", url: api_url, data: { googleToken: response.credential }, headers: { "Content-Type": "application/json" } };
    const axiosResponse: AxiosResponse<{ accessToken: string, refreshToken: string, error: string, message: string }> = await axios(configuration);

    console.log(axiosResponse);

    if (axiosResponse.data.accessToken !== undefined) {
      localStorage.setItem("accessToken", axiosResponse.data.accessToken);
      localStorage.setItem("refreshToken", axiosResponse.data.refreshToken);
      navigator('/user/profile');
    }

  }
  const handleGoogleOnFailure = () => { console.log("Error") }

  //#   Kiểm tra xem người dùng đã login hay chưa (nên có ở các trang / component yêu cầu phải login)
  useEffect(() => {
    const usertoken = localStorage.getItem("accessToken");
    if (usertoken != null) {

      //!   Chưa update server nên hiện tại chưa hỗ trợ kiểm tra login bên phía Backend.

      // Prepare for API fetching
      //const api_url: string = connection_path.base_url + connection_path.api + connection_path.endpoints.checkAuth;
      //const configuration: AxiosRequestConfig = { method: "POST",  url: api_url,  data:{token: usertoken}};

      //const response: AxiosResponse<{result: string}> = await axios(configuration);

      //#   Nếu đã login rồi thì không phải login lại nữa mà về trang chủ.
      //if (response.data.result === 'valid') {
      navigator('/user/profile');
    }
  }
  );

  return (
    <Box component="form" onSubmit={event => handleLogin(event, navigator)} noValidate >
      <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
        Đăng nhập
      </Typography>
      <Box sx={{ width: "45%", margin: "0 auto", padding: "50px" }}>
        <Grid container spacing={5}>
          <Grid item lg={12}>
            <TextField
              required
              fullWidth
              id="username"
              label="Tên tài khoản"
              name="username"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete='off'
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
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 5px 0 5px",
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="Ghi nhớ mật khẩu"
              />
              <Link href="#" variant="body2" sx={{ fontSize: "17px" }}>
                Quên mật khẩu?
              </Link>
            </Box>
          </Grid>
          <Grid item lg={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: "100%" }}
            >
              Đăng nhập
            </Button>
          </Grid>
          <Grid item lg={12}>
            <GoogleLogin onSuccess={handleGoogleOnSuccess} onError={handleGoogleOnFailure} />
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
              Bạn chưa có tài khoản?
              <Box ml={1}>
                <Link href="/signup" variant="body2" sx={{ fontSize: "17px" }}>
                  Đăng ký ngay
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default LoginForm;
