import {
  Button,
  Box,
  Grid,
  Checkbox,
  Link,
  Divider,
  Typography,
  TextField,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect } from "react";
import { connection_path } from "../../../constants/developments";
import { GoogleCredentialResponse, GoogleLogin } from "@react-oauth/google";
import * as React from "react";
import { InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { handleLogin } from "../../../utils/api/AuthenticateUtils";

const LoginForm = () => {
  const navigate = useNavigate();

  //    ===================== Nên đưa ra một thư mục khác ==========================

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //    Dữ liệu về form
    const data = new FormData(event.currentTarget);

    //    Dữ liệu sau khi điền vào form
    const payload = {
      userName: data.get("username"),
      password: data.get("password"),
    };

    //    Chuỗi kết nối tới server backend
    //!   LƯU Ý: KHÔNG THAY ĐỔI TRỰC TIẾP CHUỖI KẾT NỐI TẠI ĐÂY (Fix cứng)
    //==  Chỉ thay đổi dữ liệu của "connection_path" trong file src/constants/developments

    const api_url: string =
      connection_path.base_url + connection_path.auth.login;

    const configuration: AxiosRequestConfig = {
      method: "POST",
      url: api_url,
      data: payload,
    };

    await axios(configuration)
      .then((response) => {
        if (
          response.status === 200 &&
          response.data.accessToken !== undefined
        ) {
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          //  Thành công thì cho về trang người dùng
          navigate("/");
        } else {
          alert("Không đăng nhập thành công");
        }
      })
      .catch((error) => {
        alert("Đăng nhập thất bại, vui lòng thử lại sau.");
        console.log(error);
      });
  };

  // const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   //    Dữ liệu về form
  //   const data = new FormData(event.currentTarget);

  //   //    Dữ liệu sau khi điền vào form
  //   const payload = {
  //     userName: data.get('username'),
  //     password: data.get('password'),
  //   }

  //   //    Chuỗi kết nối tới server backend
  //   //!   LƯU Ý: KHÔNG THAY ĐỔI TRỰC TIẾP CHUỖI KẾT NỐI TẠI ĐÂY (Fix cứng)
  //   //==  Chỉ thay đổi dữ liệu của "connection_path" trong file src/constants/developments
  //   const api_url: string = connection_path.base_url + connection_path.api + connection_path.endpoints.login;

  //   const configuration: AxiosRequestConfig = { method: "POST",  url: api_url,  data:payload};

  //   await axios(configuration)
  //     .then( response => {
  //     if (response.status === 200 && response.data.accessToken !== undefined) {
  //       localStorage.setItem("accessToken", response.data.accessToken);
  //       localStorage.setItem("refreshToken", response.data.refreshToken);
  //       //  Thành công thì cho về trang người dùng
  //       navigate('/')
  //     }
  //     else {
  //       alert("Không đăng nhập thành công");
  //     }
  //   })
  //   .catch (error => {
  //     alert('Đăng nhập thất bại, vui lòng thử lại sau.')
  //     console.log(error);
  //   })
  // };

  const handleGoogleOnSuccess = async (response: GoogleCredentialResponse) => {
    const api_url: string =
      connection_path.base_url + connection_path.auth.googleAuth;
    const configuration: AxiosRequestConfig = {
      method: "POST",
      url: api_url,
      data: { googleToken: response.credential },
      headers: { "Content-Type": "application/json" },
    };
    const axiosResponse: AxiosResponse<{
      accessToken: string;
      refreshToken: string;
      error: string;
      message: string;
    }> = await axios(configuration);

    console.log(axiosResponse);

    if (axiosResponse.data.accessToken !== undefined) {
      localStorage.setItem("accessToken", axiosResponse.data.accessToken);
      localStorage.setItem("refreshToken", axiosResponse.data.refreshToken);
      navigate("/user/profile");
    }
  };
  const handleGoogleOnFailure = () => {
    console.log("Error");
  };

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

      navigate("/user/profile");
      //}
    }
  });

  //add eye icon into the password field
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  navigate("/user/profile");

  return (
    <Box
      component="form"
      onSubmit={(event) => handleLogin(event, navigate)}
      noValidate
    >
      <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
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
            <GoogleLogin
              onSuccess={handleGoogleOnSuccess}
              onError={handleGoogleOnFailure}
            />
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
  );
};


export default LoginForm;
