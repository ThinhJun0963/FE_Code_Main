import "react-alice-carousel/lib/alice-carousel.css";
import Card from '../Card/Card';
import './Carousel.css';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";

const ClinicCarousel = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const items = [
    <Link to="/detail/1"><div><Card image='' description='Đặt lịch khám' title='Phòng khám 1' /></div></Link>,
    <Link to="/detail/2"><div><Card image='' description='Đặt lịch khám' title='Phòng khám 2' /></div></Link>,
    <Link to="/detail/3"><div><Card image='' description='Đặt lịch khám' title='Phòng khám 3' /></div></Link>,
    <Link to="detail/4"><div><Card image='' description='Đặt lịch khám' title='Phòng khám 4' /></div></Link>,
    <Link to="/detail/5"><div><Card image='' description='Đặt lịch khám' title='Phòng khám 5' /></div></Link>,
  ];

  return (
    <div className="container">
      <div className="header-container">
        <h1>Đặt lịch khám trực tuyến</h1>
        <span><button>Xem thêm</button></span>
      </div>
      <div className="carousel-container">
        <Carousel responsive={responsive}>
          {items.map((item, index) => <div style={{ margin: '10px' }} key={index}>{item}</div>)}
        </Carousel>;
      </div>
    </div>
  )
}
export default ClinicCarousel