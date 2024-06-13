import React from 'react';
import { Avatar, Box, Breadcrumbs, Button, Divider, Link, Typography } from '@mui/material';
import ImageList from './ImageList/ImageList';
import ClinicServices from './ClinicServices/ClinicServices';
import clinicServices from './data';


const clinic = {
    clinic_id: 1,
    logo: '', 
    images: [
    '../../asia-pic1.png',
    '../../asia-pic2.png',
    '../../asia-pic3.png',
    ], 
    name: 'Phòng khám nha khoa Asia',
    address: '105/10 Nguyễn Thị Tú, Phường Bình Hưng Hòa B, Quận Bình Tân, TP. Hồ Chí Minh',
    phone: '0123456789',
    email: 'example@email.com',
    open_hour: '8h00',
    close_hour: '20h00',
    description: `Nha khoa Asia được thành lập ngày 03 tháng 01 năm 2010,
        hiện tại đang là một trong những nha khoa quốc tế lớn hàng đầu tại khu vực TP. Hồ Chí Minh.
        Thấu hiểu tầm quan trọng của việc chăm sóc răng miệng,
        nha khoa Asia mang trong mình sứ mệnh NÂNG CAO CHẤT LƯỢNG NỤ CƯỜI VIỆT",
        trong suốt hơn 1 thập kỷ Nha khoa Asia đã không ngừng nỗ lực mang đến trên
        2000 nụ cười hoàn hảo cho người Việt với chất lượng chuyên môn quốc tế.
        Để hiện thực hóa tiêu chí “Nha khoa chất lượng quốc tế”, nha khoa Asia hiện đang sở hữu cở vật chất hiện đại,
        được trang công nghệ chuẩn đoán, điều trị hàng đầu hiện nay như máy CT Cone beam, Scan Itero 5D,
        máy nhổ răng bằng sóng siêu âm Piezotome … và đáp ứng đầy đủ các tiêu chí: Đội ngũ bác sĩ nhiều kinh nghiệm,
        tay nghề cao - Thiết bị máy móc hiện đại - Hệ thống được thanh trùng`,
    services: [
        { serviceId: '1', serviceName: "Răng sứ thẩm mỹ" },
        { serviceId: '2', serviceName: "Cấy ghép Implant" },
        { serviceId: '3', serviceName: "Niềng răng trong suốt" },
        { serviceId: '4', serviceName: "Tẩy trắng răng bằng laser" },
        { serviceId: '5', serviceName: "Điều trị nha chu chuyên sâu" },
        { serviceId: '6', serviceName: "Phẫu thuật nha chu" },
        { serviceId: '7', serviceName: "Phẫu thuật chỉnh nha" },
        { serviceId: '8', serviceName: "Bọc răng toàn sứ cao cấp" },
    ],

}




const ClinicDetailContent = () => {
    const logoSrc = clinic.logo || '../../../../public/placeholder.png';
    const images = clinic.images.length ? clinic.images : ['../../../../placeholder.png'];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '5em', paddingBottom: '5em' }}>
            <Box sx={{ width: '90%', textAlign: 'right', color: 'black' }}>
                <Breadcrumbs>
                    <Link underline="hover" color="inherit" href="/">
                        Trang chủ
                    </Link>
                    <Typography color="text.primary">Trang phòng khám</Typography>
                </Breadcrumbs>
            </Box>

            <Divider sx={{ backgroundColor: 'black', width: '100%', margin: '1em auto' }} />

            <Box sx={{
                marginTop: '2em',
                display: 'flex',
                alignItems: 'flex-start',
                padding: '1em',
                // border: '3px solid black',
                width: '90%',
            }}>
                <Avatar
                    variant="square"
                    sx={{
                        height: '200px',
                        width: '200px',
                        marginRight: '1em',
                        backgroundColor: 'white',
                        border: '1px solid black',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        overflow: 'hidden'
                    }}
                >
                    <img
                        src={logoSrc}
                        alt={`${clinic.name} Logo`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Avatar>
                <Typography
                    variant="h4"
                    component="div"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold'
                    }}
                >
                    {clinic.name}
                </Typography>
            </Box>

            <Divider sx={{ backgroundColor: 'black', width: '100%', margin: '1em auto' }} />

            <Box sx={{ width: '80%' }}>
                <ImageList images={images} />
            </Box>
            <Box sx={{ width: '80%', textAlign: 'right' }}>
                <Button variant='contained' sx={{ backgroundColor: '#1975dc', color: '#fff', width: '30%', borderRadius: '5px' }}>Đặt lịch ngay</Button>
            </Box>

            <Box sx={{ width: '80%', marginTop: '5em' }}>
                <Box sx={{ marginTop: '1em' }}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }} >Giới thiệu chi tiết</Typography>
                    <Typography variant='body1' sx={{ marginTop: '1em' }}>
                        {clinic.description}
                    </Typography>
                </Box>
                <Box sx={{ marginTop: '1em' }}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                        Thời gian khám:
                    </Typography>
                    <Typography variant='body1' sx={{ marginTop: '1em' }}>
                        {clinic.open_hour} - {clinic.close_hour} tất cả các ngày trong tuần
                    </Typography>
                </Box>

                <Box sx={{ marginTop: '1em' }}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                        Địa chỉ:
                    </Typography>
                    <Typography variant='body1' sx={{ marginTop: '1em' }}>
                        {clinic.address}
                    </Typography>
                </Box>

                <Box sx={{ marginTop: '1em', marginBottom: '5em' }}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                        Dịch vụ nổi bật:
                    </Typography>
                    <ClinicServices services={clinic.services} />
                </Box>
            </Box>
        </Box>
    )
}

export default ClinicDetailContent;
