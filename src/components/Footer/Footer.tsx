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
                    <Link href="https://www.facebook.com" mr={2}><FacebookIcon fontSize="large" /></Link>
                    <Link href="https://www.twitter.com" mr={2}><TwitterIcon fontSize="large" /></Link>
                    <Link href="https://www.linkedin.com" mr={2}><LinkedInIcon fontSize="large" /></Link>

                    <Box sx={{ mt: 3, color: 'gray' }}>
                        <Typography>© SmileCare 2024 - Nhóm 4 NET1807</Typography>
                        <Typography>Email hỗ trợ: swp391.net1803@gmail.com</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6">Giới thiệu</Typography>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                        <li><Link style={{textDecoration: 'none'}} href = "#">Về chúng tôi</Link></li>
                        <li><Link style={{textDecoration: 'none'}} href = "#">Thông tin liên hệ</Link></li>
                        <li><Link style={{textDecoration: 'none'}} href = "#">Nhân sự & tuyển dụng</Link></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6">Dịch vụ</Typography>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                        <li><Link style={{textDecoration: 'none'}} href = "#">Đặt khám phòng khám</Link></li>
                        <li><Link style={{textDecoration: 'none'}} href = "#">Đặt lịch thường niên</Link></li>
                        <li><Link style={{textDecoration: 'none'}} href = "#">Biểu phí dịch vụ</Link></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6">Hỗ trợ</Typography>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                        <li><Link style={{textDecoration: 'none'}} href = "#">Điều khoản sử dụng</Link></li>
                        <li><Link style={{textDecoration: 'none'}} href = "#">Chính sách bảo mật</Link></li>
                    </ul>
                </Grid>
            </Grid>

        </Box>
    );
};

export default Footer;