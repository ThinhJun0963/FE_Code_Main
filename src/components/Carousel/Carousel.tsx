import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import { Box, CardContent, Card, Typography, Divider, Button } from '@mui/material';
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

interface CarouselItem {
    id: number,
    image: string,
    title: string,
    description: string
}

interface CarouselProps {
    items: CarouselItem[],
}

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
};

const Carousel = ({ items }: CarouselProps) => {
    const navigate = useNavigate();

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
                            <img src={item.image} alt={item.title} style={{ width: '100%', height: '130px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                            <Divider sx={{ backgroundColor: 'black', width: '90%', margin: '1em auto' }} />
                            <Box sx={{  minHeight: '80px' }}>
                                <Typography variant="h5" component="div" sx={{ textAlign: 'left', marginBottom: '0.5em' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" component="div" sx={{ textAlign: 'left', maxHeight: '80px', overflow: 'hidden' }}>
                                    Địa chỉ : {item.description}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                            <Button variant="outlined" onClick={() => handleDetailButtonClick(item.id)} sx={{ borderRadius: '5px', width: '100%' }}>Xem chi tiết</Button>
                            <Button variant="contained" onClick={() => handleBookingButtonClick(item.id)}  sx={{ backgroundColor: '#00aeeb', color: '#fff', borderRadius: '5px', width: '100%' }}>Đặt lịch ngay</Button>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Slider>
    )
}

export default Carousel;
