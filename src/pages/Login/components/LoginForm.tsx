import { Button, Box, Grid, Checkbox, Link, Divider, Typography, TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import { useEffect } from 'react';
import { connection_path } from '../../../constants/developments';

const LoginForm = () => {

  const navigate = useNavigate();

  //    ===================== Nên đưa ra một thư mục khác ==========================
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    //    Dữ liệu về form
    const data = new FormData(event.currentTarget);
    
    //    Dữ liệu sau khi điền vào form
    const payload = {
      username: data.get('phoneNumber'),
      password: data.get('password'),
    } 

    //    Chuỗi kết nối tới server backend
    //!   LƯU Ý: KHÔNG THAY ĐỔI TRỰC TIẾP CHUỖI KẾT NỐI TẠI ĐÂY (Fix cứng)
    //==  Chỉ thay đổi dữ liệu của "connection_path" trong file src/constants/developments
    const api_url: string = connection_path.base_url + connection_path.api + connection_path.endpoints.login;

    const configuration: AxiosRequestConfig = { method: "POST",  url: api_url,  data:payload};

    try {
      const response: AxiosResponse<{jwt: string, error: string, message: string}> = await axios(configuration)
      
      if (response.status === 200 && Object.prototype.hasOwnProperty.call(Object.prototype, 'jwt')) {
        localStorage.setItem("Token", response.data.jwt)
        //    Thành công thì cho về trang người dùng
        navigate('/user/profile') 
      } 
      else {
        alert(response.data.message);
      }
    } 
    catch (error) {
      alert('Đăng nhập thất bại, vui lòng thử lại sau.')
    }

  };

  //#   Kiểm tra xem người dùng đã login hay chưa (nên có ở các trang / component yêu cầu phải login)
  useEffect(() => {
    async() => {
      const usertoken = localStorage.getItem('Token');
      if (usertoken != null) {
        
        //!   Chưa update server nên hiện tại chưa hỗ trợ kiểm tra login bên phía Backend.

        // Prepare for API fetching
        //const api_url: string = connection_path.base_url + connection_path.api + connection_path.endpoints.checkAuth;
        //const configuration: AxiosRequestConfig = { method: "POST",  url: api_url,  data:{token: usertoken}};
        
        //const response: AxiosResponse<{result: string}> = await axios(configuration);

        //#   Nếu đã login rồi thì không phải login lại nữa mà về trang chủ.
        //if (response.data.result === 'valid') {
          navigate('/user/profile');
        //}
      }
    }
  }
); 

  return (
    <Box component="form" onSubmit={handleSubmit} >
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
              id="password"
              label="Mật khẩu"
              name="password"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item lg={12}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: "space-between", alignItems: 'center', padding: '0 5px 0 5px' }}>
              <FormControlLabel control={<Checkbox />} label="Ghi nhớ mật khẩu" />
              <Link href="#" variant="body2" sx={{ fontSize: '17px' }}>
                Quên mật khẩu?
              </Link>
            </Box>
          </Grid>
          <Grid item lg={12}>
            <Button type="submit" variant="contained" color="primary" sx={{ width: '100%' }}>Đăng nhập</Button>
          </Grid>
          <Grid item lg={12}>
            <Divider sx={{ backgroundColor: 'black' }} />
          </Grid>
          <Grid item lg={12}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Bạn chưa có tài khoản?
              <Box ml={1}>
                <Link href="/signup" variant="body2" sx={{ fontSize: '17px' }}>
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