import { Box, Typography, Link, Grid, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <Box className={styles.footerContainer} >
            <Divider sx={{ backgroundColor: 'black', width: '100%' }} />
            <Grid container spacing={2} className={styles.footerGrid}>
                <Grid item xs={12} md={3} className={styles.footerColumn}>
                    <Typography variant="h6">Kết nối với chúng tôi</Typography>
                    <Link href="https://www.facebook.com" mr={2} >
                        <FacebookIcon fontSize="large" sx={{ color: '#1976d5' }} />
                    </Link>
                    <Link href="https://www.twitter.com" mr={2}>
                        <TwitterIcon fontSize="large" sx={{ color: '#1976d5' }} />
                    </Link>
                    <Link href="https://www.linkedin.com" mr={2}>
                        <LinkedInIcon fontSize="large" sx={{ color: '#1976d5' }} />
                    </Link>
                </Grid>

                {/* Example of other columns (replicate for the remaining sections) */}
                <Grid item xs={12} md={3} className={styles.footerColumn}>
                    <Typography variant="h6">Giới thiệu</Typography>
                    <ul>
                        <li><Link href="#">Về chúng tôi</Link></li>
                        <li><Link href="#">Thông tin liên hệ</Link></li>
                        <li><Link href="#">Nhân sự & tuyển dụng</Link></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={3} className={styles.footerColumn}>
                    <Typography variant="h6">Dịch vụ</Typography>
                    <ul>
                        <li><Link href="#">Đặt khám phòng khám</Link></li>
                        <li><Link href="#">Đặt lịch thường niên</Link></li>
                        <li><Link href="#">Biểu phí dịch vụ</Link></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={3} className={styles.footerColumn}>
                    <Typography variant="h6">Hỗ trợ</Typography>
                    <ul>
                        <li><Link href="#">Điều khoản sử dụng</Link></li>
                        <li><Link href="#">Chính sách bảo mật</Link></li>
                    </ul>
                </Grid>
            </Grid>
            <Box className={styles.miscBox}>
                <Box className={styles.copyrightSection}>
                    <Typography>© SmileCare 2024 - Nhóm 4 NET1807</Typography>
                    <Typography>Email hỗ trợ: swp391.net1803@gmail.com</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;