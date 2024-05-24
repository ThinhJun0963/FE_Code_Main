// import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ClinicInfo from "../../components/ClinicOwnerInfo/Status";
import MainContent from "../../components/ClinicOwnerInfo/MainContent";
import "./ClinicOwnerPage.css";

const ClinicOwnerPage = () => {
  const clinic = {
    name: "Phòng Khám XYZ",
    status: "online",
    contact: {
      website: "https://clinicxyz.com",
      address: "123 Đường ABC, Quận 1, TP. HCM",
      phone: "0123456789",
    },
    avatarSrc: "https://via.placeholder.com/150",
    details: "Phòng khám XYZ chuyên cung cấp dịch vụ y tế chất lượng cao...",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
    rating: 4.5,
    services: ["Dịch vụ 1", "Dịch vụ 2", "Dịch vụ 3"],
  };
  return (
    <div className="app">
      <Header />
      <div className="clinic-info-wrapper">
        <ClinicInfo
          name={clinic.name}
          status={clinic.status}
          contact={clinic.contact}
          avatarSrc={clinic.avatarSrc}
        />
      </div>
      <MainContent
        details={clinic.details}
        images={clinic.images}
        rating={clinic.rating}
        services={clinic.services}
      />
      <Footer />
    </div>
  );
};

export default ClinicOwnerPage;
