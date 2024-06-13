import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import Slider from 'react-slick';


interface ImageListProps {
    images: string[];
    // gridImages: string[];
}

export default function StandardImageList({ images }: ImageListProps) {
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

    const placeholder = '../../../../placeholder.png';

    return (
        <Box style={{ display: 'flex' }}>
            <Box style={{ width: "50%", height: '40%' }}>
                <Slider {...settings}>
                    {(images.length ? images : [placeholder]).map((img, index) => (
                        <Box key={index}>
                            <img
                                src={img}
                                alt='carousel pic'
                                style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '10px' }}
                            />
                        </Box>
                    ))}
                </Slider>
            </Box>
            <Box style={{ width: '60%', height: "60%", marginLeft: '1em' }}>
                <ImageList sx={{ width: "100%", height: "100%", overflow: 'hidden', paddingTop: '1em' }} cols={3} rowHeight={164}>
                    {(images.length ? images : [placeholder, placeholder, placeholder]).map((img, index) => (
                        <ImageListItem key={index} sx={{ borderRadius: '10px' }}>
                            <img
                                src={img}
                                alt='grid pic'
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

// const carouselImages = [
//     '../../asia-pic1.png',
//     '../../asia-pic2.png',
//     '../../asia-pic3.png',
// ];

// const gridImages = [
//     '../../../asia-dental-clinic.jpg',
//     '../../asia-pic1.png',
//     '../../asia-pic2.png',
//     '../../asia-pic3.png',
// ];
