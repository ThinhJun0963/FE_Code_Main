import { Box, Button } from "@mui/material";
import Carousel from "../../../components/Carousel/Carousel";
import clinics from "../../../utils/mockData";
import Accordion from "./Accordion/Accordion";
import FeaturesAndBenefits from "./FeatureAndBenefits/FeatureAndBenefits";
import { useNavigate } from 'react-router-dom';
import Hero from "../../../components/Hero/Hero";
import styles from './HomePageContent.module.css';

const HomePageContent = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/clinics');
  };

  const transformedClinics = clinics.map(clinic => ({
    id: clinic.clinic_id,
    image: clinic.imageToShow,
    title: clinic.name,
    description: clinic.address
  }));

  return (
    <>
      <Hero />
      <Box className={styles.container}>
        <Button
          variant="contained"
          onClick={handleBookingClick}
          className={styles.bookingButtonHero}
        >
          Đặt lịch ngay
        </Button>
        <Box className={styles.clinicHeader}>
          <Box sx={{ fontSize: '38px', fontWeight: 700 }}>
            Các phòng khám nổi bật
          </Box>
          <Button
            variant="contained"
            href="/clinics"
            className={styles.viewAllButton}
          >
            Xem tất cả &gt;&gt;
          </Button>
        </Box>
        <Box className={styles.carousel}>
          <Carousel items={transformedClinics} />
        </Box>

        <Box className={styles.faqContent}>
          <Box sx={{ textAlign: 'left', fontSize: '38px', fontWeight: 700 }}>
            Câu hỏi thường gặp
          </Box>
        </Box>

        <Box className={styles.faqContainer}>
          <Box className={styles.faqContent}>
            <Accordion />
          </Box>
        </Box>

        <Box className={styles.featuresAndBenefitsContainer}>
          <FeaturesAndBenefits />
        </Box>
      </Box>
    </>
  );
};

export default HomePageContent;
