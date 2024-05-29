import { Button, Box, Grid, Link, Divider, Typography, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();

            const data = new FormData(event.currentTarget);

            const payload = {
                phoneNumber: data.get('phoneNumber'),
                name: data.get('name'),
                password: data.get('password'),
            } // data sau khi điền vào form

            const request = await axios.post(`http://localhost:/user`, payload)
            if (request.status === 200 && request.data.length) {
                alert('Signup success')
                navigate('/login') // trở về trang đăng nhập
            } else {
                alert('Signup failed')
            }
        } catch (error) {
            alert('Signup failed')
        }
    };


    return (
        <Box component="form" onSubmit={handleSubmit} noValidate>
            <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
                Tạo tài khoản
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
                            id="name"
                            label="Họ và tên"
                            name="name"
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
                        <Button type="submit" variant="contained" color="primary" sx={{ width: '100%' }}>Đăng kí</Button>
                    </Grid>
                    <Grid item lg={12}>
                        <Divider sx={{ backgroundColor: 'black' }} />
                    </Grid>
                    <Grid item lg={12}>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            Đã có tài khoản?
                            <Box ml={1}>
                                <Link href="/login" variant="body2" sx={{ fontSize: '17px' }}>
                                    Đăng nhập
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