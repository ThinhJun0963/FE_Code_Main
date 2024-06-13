import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import { Box, CardContent, Card, Typography, Divider, Button } from '@mui/material';
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

interface CarouselItem {
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

    const handleButtonClick = () => {
        navigate('/clinic')
    }

    return (
        <Box
        >
            <Slider {...settings} >
                {items.map((item, index) => (
                    <Card key={index} sx={{ backgroundColor: '#fff', margin: '1em ', height: '550px',borderRadius: '10px', border: '.5px solid #000' }}>
                        <CardContent>
                            <Box>
                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px' }} />
                                <Divider sx={{ backgroundColor: 'black', width: '90%', margin: '1em auto' }} />
                                <Typography variant="h5" component="div" gutterBottom sx={{ marginTop: '1em', textAlign: 'left' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" component="div" gutterBottom sx={{ textAlign: 'left' }}>
                                    Địa chỉ : {item.description}
                                </Typography>
                            </Box>
                            <Box>
                                <Button variant="outlined" onClick={handleButtonClick} sx={{ borderRadius: '5px', width: '100%', marginTop: '1em' }}>Xem chi tiết</Button>
                            </Box>
                            <Box>
                                <Button variant="contained" href="/booking" sx={{ backgroundColor: '#00aeeb', color: '#fff', borderRadius: '5px', width: '100%', marginTop: '1em' }}>Đặt lịch ngay</Button>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Slider>
        </Box>
    )
}

export default Carousel