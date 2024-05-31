import Hero from "../../components/Hero/Hero";
import UserLayout from "../../components/UserLayout";
import HomePageContent from "./components/HomePageContent";
import ChatPopUp from "./components/ChatPopUp/ChatPopUp";

const HomePage = () => {
  return (
    <UserLayout>
      <Hero />
      <HomePageContent />
      <ChatPopUp />
    </UserLayout>
  );
};

export default HomePage;
