import React from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import Card from '../Card/Card';
import { Center } from '@chakra-ui/react';

const Carousel = () => {

  const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();

  const items = [
    <Card image='../../assets/banner1.png' description='Khám ở phòng khám 1' title='Phòng khám 1' />,
    <Card image='../../assets/banner2.png' description='Khám ở phòng khám 2' title='Phòng khám 2' />
  ];

  const Gallery = () => <AliceCarousel mouseTracking items={items} />;

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "black"}}>Đặt lịch khám trực tuyến</h1>
      <Gallery />
    </div>
  )
}

export default Carousel