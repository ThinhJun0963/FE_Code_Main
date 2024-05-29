import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Carousel from "../../components/Carousel/Carousel";
import FAQ from "../../components/FAQ/Faq";
import styles from './HomePage.module.css'
import PlainFooter from "../../components/Footer/PlainFooter";

const HomePage = () => {
  return (
    <>
      {/* <Box bg="gray.200" minH="100vh">
        <Box>
          <Header />
        </Box>
        <Box>
          <Hero styles={styles} />
        </Box>
        <Box pt={10}>
          <div className={styles.headerContainer}>
            <h1 className={styles.heading}>Đặt khám với các phòng khám</h1>
            <button className={`btn btn-primary ${styles.btn}`}>Xem tất cả</button>
          </div>
          <Carousel styles={styles} />
        </Box>
        <Box pt={10}>
          <FAQ />
        </Box>
        <Box pt={10}>
          <SimpleThreeColumns />
        </Box>
        <PlainFooter />
      </Box> */}
    </>
  );
};

export default HomePage;
