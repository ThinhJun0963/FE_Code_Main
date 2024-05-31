import Hero from "../../components/Hero/Hero";
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
