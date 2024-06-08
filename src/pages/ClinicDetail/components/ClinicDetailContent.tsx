import React from 'react'
import { Avatar, Box, Button, Divider, IconButton, InputBase, Typography } from '@mui/material';
import Breadcrumbs from '../../../components/Breadcrums/Breadcrums';
import ImageList from './ImageList/ImageList';
import ClinicServices from './ClinicServices/ClinicServices';
import clinicServices from './data'

const ClinicDetailContent = () => {
    return (
        <Box sx={{ marginTop: '5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '80%', marginTop: '-3em', textAlign: 'right', color: 'black' }}>
                <Breadcrumbs />
            </Box>
            <Box sx={{
                width: '80%',
                marginTop: '2em',
                display: 'flex',
                color: 'black',
                alignItems: 'center',
                padding: '1em',
                borderRadius: '10px'
            }}>
                <Avatar
                    variant="square"
                    sx={{
                        height: '200px',
                        width: '200px',
                        marginRight: '1em',
                        backgroundColor: 'white'
                    }}
                >
                    <img src="../../../../asia-logo.png" alt="Asia Logo" style={{ width: '100%', height: 'auto' }} />
                </Avatar>
                <Typography
                    variant="h4"
                    component="div"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold'
                    }}
                >
                    Phòng khám nha khoa Asia
                </Typography>
            </Box>

            <Divider sx={{ backgroundColor: 'black', width: '100vw', margin: '1em auto' }} />

            <Box sx={{ width: '80%' }}>
                <ImageList />
            </Box>
            <Box sx={{ width: '80%', textAlign: 'right' }}>
                <Button variant='contained' sx={{ backgroundColor: '#1975dc', color: '#fff', width: '30%', borderRadius: '5px' }}>Đặt lịch ngay</Button>
            </Box>

            <Box sx={{ width: '80%', marginTop: '5em' }}>
                <Box sx={{ marginTop: '1em' }}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }} >Giới thiệu chi tiết</Typography>
                    <Typography variant='body1' sx={{ marginTop: '1em' }}>
                        Nha khoa Asia được thành lập ngày 03 tháng 01 năm 2010,
                        hiện tại đang là một trong những nha khoa quốc tế lớn hàng đầu tại khu vực TP. Hồ Chí Minh.
                        Thấu hiểu tầm quan trọng của việc chăm sóc răng miệng,
                        nha khoa Asia mang trong mình sứ mệnh NÂNG CAO CHẤT LƯỢNG NỤ CƯỜI VIỆT”,
                        trong suốt hơn 1 thập kỷ Nha khoa Asia đã không ngừng nỗ lực mang đến trên
                        2000 nụ cười hoàn hảo cho người Việt với chất lượng chuyên môn quốc tế.
                        Để hiện thực hóa tiêu chí “Nha khoa chất lượng quốc tế”, nha khoa Asia hiện đang sở hữu cở vật chất hiện đại,
                        được trang công nghệ chuẩn đoán, điều trị hàng đầu hiện nay như máy CT Cone beam, Scan Itero 5D,
                        máy nhổ răng bằng sóng siêu âm Piezotome … và đáp ứng đầy đủ các tiêu chí: Đội ngũ bác sĩ nhiều kinh nghiệm,
                        tay nghề cao - Thiết bị máy móc hiện đại - Hệ thống được thanh trùng
                    </Typography>
                </Box>
                <Box sx={{ marginTop: '1em' }}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                        Thời gian khám:
                    </Typography>
                    <Typography variant='body1' sx={{ marginTop: '1em' }}>
                        8h-20h tất cả các ngày trong tuần
                    </Typography>
                </Box>

                <Box sx={{ marginTop: '1em' }}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                        Địa chỉ:
                    </Typography>
                    <Typography variant='body1' sx={{ marginTop: '1em' }}>
                        105/10 Nguyễn Thị Tú, Phường Bình Hưng Hòa B, Quận Bình Tân, TP. Hồ Chí Minh
                    </Typography>
                </Box>

                <Box sx={{ marginTop: '1em', marginBottom: '5em' }}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                        Dịch vụ nổi bật:
                    </Typography>
                    <ClinicServices services={clinicServices} />
                </Box>

            </Box>
        </Box>
    )
}

export default ClinicDetailContent