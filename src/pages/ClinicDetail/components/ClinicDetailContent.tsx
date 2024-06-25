import { Avatar, Box, Breadcrumbs, Button, Divider, Link, Typography } from '@mui/material';
import ImageList from './ImageList/ImageList';
import ClinicServices from './ClinicServices/ClinicServices';
import clinicData from '../../../utils/mockData';
import { Clinic } from '../../../utils/interfaces/interfaces';
import { useParams } from 'react-router-dom';



const ClinicDetailContent = () => {
    const { id } = useParams<{ id: string }>();

    const clinicId = id;

    const clinic: Clinic | undefined = clinicId ? clinicData.find(c => c.clinic_id === parseInt(clinicId)) : undefined;

    if (!clinic) {
        return (
            <Typography variant="h4" sx={{ paddingTop: '5em', paddingBottom: '5em' }}>
                Phòng khám không tồn tại
            </Typography>
        );
    }

    const logoSrc = clinic.logo || '/placeholder.png';
    const images = clinic.images.length ? clinic.images : ['/placeholder.png'];

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
                width: '80%',
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
                <Button variant='contained' href={`/booking/${clinicId}`} sx={{ backgroundColor: '#1975dc', color: '#fff', width: '30%', borderRadius: '5px' }}>Đặt lịch ngay</Button>
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
