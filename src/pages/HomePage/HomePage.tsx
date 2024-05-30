import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Carousel from "../../components/Carousel/Carousel";
import styles from './HomePage.module.css'
import UserLayout from "../../components/UserLayout";
import HomePageContent from "./components/HomePageContent";

const HomePage = () => {
  return (
    <UserLayout>
      <Hero />
      <HomePageContent />
    </UserLayout>
  );
};

export default HomePage;
