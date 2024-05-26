import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import clinics from './data';
import CardGenerator from '../Card/CardGenerator';
import './Carousel.css';

interface CarouselProps {
    styles: { [key: string]: string };
}


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "50px",

};


const Carousel = ({ styles }: CarouselProps) => {
    return (
        <div className={styles['slider-container']}>
            {/* <div className={styles['slider-title']}></div> */}
            <Slider {...settings}>
                {clinics.map((clinic, index) => (
                    <div key={index} className={styles["slider-card"]}>
                        <CardGenerator card={clinic} styles={styles} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel