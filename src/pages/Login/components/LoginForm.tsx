import { Button, Box, Grid, Checkbox, Link, Divider, Typography, TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const data = new FormData(event.currentTarget);

      const payload = {
        phoneNumber: data.get('phoneNumber'),
        password: data.get('password'),
      } // data sau khi điền vào form

      const request = await axios.post(`http://localhost:/user?email=${payload.phoneNumber}&password=${payload.password}`)
      if (request.status === 200 && request.data.length) {
        alert('Login success')
        navigate('/') // trở về trang chủ
      } else {
        alert('Email or password is incorrect')
      }
    } catch (error) {
      alert('Login failed')
    }
  };


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
              id="phoneNumber"
              label="Số điện thoại"
              name="phoneNumber"
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