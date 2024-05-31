import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import Slider from 'react-slick';



export default function StandardImageList() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Box style={{ display: 'flex' }}>
            <Box style={{ width: "50%", height: '40%'}}>
                <Slider {...settings}>
                    {itemCarousel.map((item) => (
                        <Box key={item.img}>
                            <img
                                src={`${item.img}`}
                                alt={item.title}
                                style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '10px'}}
                            />
                        </Box>
                    ))}
                </Slider>
            </Box>
            <Box style={{ width: '60%', height: "60%",  marginLeft: '1em' }}>
                <ImageList sx={{ width: "100%", height: "100%", overflow: 'hidden', paddingTop: '1em'}} cols={3} rowHeight={164}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} sx={{ borderRadius: '10px' }}>
                            <img
                                src={`${item.img}`}
                                alt={item.title}
                                loading="lazy"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );
}

const itemCarousel = [
    {
        img: '../../asia-pic1.png',
        title: 'asia-pic1',
    },
    {
        img: '../../asia-pic2.png',
        title: 'asia-pic2',
    },
    {
        img: '../../asia-pic3.png',
        title: 'asia-pic3',
    },

];

const itemData = [
    {
        img: '../../../asia-dental-clinic.jpg',
        title: 'asia-dental-clinic',
    },
    {
        img: '../../asia-pic1.png',
        title: 'asia-pic1',
    },
    {
        img: '../../asia-pic2.png',
        title: 'asia-pic2',
    },
    {
        img: '../../asia-pic3.png',
        title: 'asia-pic3',
    },

];