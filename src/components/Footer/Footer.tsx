import { Box, Typography, Link, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: ' #ffffff', p: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6">Kết nối với chúng tôi</Typography>
                    <Link href="https://www.facebook.com"><FacebookIcon fontSize="large"/></Link>
                    <Link href="https://www.twitter.com"><TwitterIcon fontSize="large"/></Link>
                    <Link href="https://www.linkedin.com"><LinkedInIcon fontSize="large"/></Link>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6">Giới thiệu</Typography>
                    <ul style={{ listStyle: 'none', padding: 0}}>
                        <li>Về chúng tôi</li>
                        <li><Typography>Thông tin liên hệ</Typography></li>
                        <li><Typography>Nhân sự & tuyển dụng</Typography></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6">Dịch vụ</Typography>
                    <ul style={{ listStyle: 'none', padding: 0}}>
                        <li><Typography>Đặt khám phòng khám</Typography></li>
                        <li><Typography>Đặt lịch thường niên</Typography></li>
                        <li><Typography>Biểu phí dịch vụ</Typography></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6">Hỗ trợ</Typography>
                    <ul style={{ listStyle: 'none', padding: 0}}>
                        <li><Typography>Điều khoản sử dụng</Typography></li>
                        <li><Typography>Chính sách bảo mật</Typography></li>
                    </ul>
                </Grid>
            </Grid>
            <Box sx={{ mt: 3, color: 'gray' }}>
                <Typography>© SmileCare 2024 - Nhóm 4 NET1807</Typography>
                <Typography>Email hỗ trợ: swp391.net1803@gmail.com</Typography>
            </Box>
        </Box>
    );
};

export default Footer;