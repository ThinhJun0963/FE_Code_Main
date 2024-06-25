import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import { Box, CardContent, Card, Typography, Divider, Button } from '@mui/material';
import Slider from "react-slick";
import { getAllClinics } from "../../utils/api/MiscUtils";
import { ClinicToDisplay } from "../../utils/interfaces/ClinicRegister/Clinic";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
};


const Carousel = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState<ClinicToDisplay[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const backUp: ClinicToDisplay = {
        id: 1,
        name: 'Phòng khám nha khoa Asia',
        address: '105/10 Nguyễn Thị Tú, Phường Bình Hưng Hòa B, Quận Bình Tân, TP. Hồ Chí Minh',
        phone: '0123456789',
        email: 'info@asia',
        openHour: '8:00',
        closeHour: '20:00',
        description: 'Nha khoa Asia được thành lập ngày 03 tháng 01 năm 2010.... ',
        status: 'active',
        ownerId: 1
    }

    useEffect(() => {
        const fetchClinics = async () => {
            try {
                const clinics = (await getAllClinics('',100, 0)).content;
                console.log(clinics + "Hi");
                setItems(clinics);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err);
                } else {
                    console.error("An unexpected error occurred:", err);
                    setError(new Error("Failed to fetch clinic data"));
                }
            } finally {
                setLoading(false);
            }
        };

        fetchClinics();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleDetailButtonClick = (id: number) => {
        navigate(`/clinic/${id}`)
    }

    const handleBookingButtonClick = (id: number) => {
        navigate(`/booking/${id}`)
    }

    return (
        <Slider {...settings} >
            {items.map((item, index) => (
                <Card key={index} sx={{ backgroundColor: '#fff', margin: '1em', borderRadius: '10px', border: '.5px solid #000', height: '450px' }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                        <Box>
                            <img src={''} alt={item.name} style={{ width: '100%', height: '130px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                            <Divider sx={{ backgroundColor: 'black', width: '90%', margin: '1em auto' }} />
                            <Box sx={{ minHeight: '80px' }}>
                                <Typography variant="h5" component="div" sx={{ textAlign: 'left', marginBottom: '0.5em' }}>
                                    {item.name}
                                </Typography>
                                <Typography variant="body1" component="div" sx={{ textAlign: 'left', maxHeight: '80px', overflow: 'hidden' }}>
                                    Địa chỉ : {item.address}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                            <Button variant="outlined" onClick={() => handleDetailButtonClick(item.id)} sx={{ borderRadius: '5px', width: '100%' }}>Xem chi tiết</Button>
                            <Button variant="contained" onClick={() => handleBookingButtonClick(item.id)} sx={{ backgroundColor: '#00aeeb', color: '#fff', borderRadius: '5px', width: '100%' }}>Đặt lịch ngay</Button>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Slider>
    )
}

export default Carousel;
