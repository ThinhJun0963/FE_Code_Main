// import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import Header from '../../components/Header/Header.1';
import ClinicInfo from "../ClinicDetailV2/components/ClinicInfo";
import MainContent from "../ClinicDetailV2/MainContent";
import "./ClinicOwnerPage.css";

const ClinicOwnerPage = () => {
  const clinic = {
    name: "NHA KHOA ASIA",
    status: "online",
    contact: {
      website: "https://s.net.vn/aMWu",
      address: "02 Man Thiện,Tăng Nhơn Phú A, Q9, TP.HCM",
      phone: "0907 125 062",
    },
    avatarSrc: "./asia-logo.png",
    details:
      "Nha khoa Asia được thành lập ngày 03 tháng 01 năm 2010, hiện tại đang là một trong những nha khoa quốc tế lớn hàng đầu tại khu vực TP. Hồ Chí Minh. Thấu hiểu tầm quan trọng của việc chăm sóc răng miệng, nha khoa Asia mang trong mình sứ mệnh NÂNG CAO CHẤT LƯỢNG NỤ CƯỜI VIỆT”, trong suốt hơn 1 thập kỷ Nha khoa Asia đã không ngừng nỗ lực mang đến trên 2000 nụ cười hoàn hảo cho người Việt với chất lượng chuyên môn quốc tế. Để hiện thực hóa tiêu chí “Nha khoa chất lượng quốc tế”, nha khoa Asia hiện đang sở hữu cở vật chất hiện đại, được trang công nghệ chuẩn đoán, điều trị hàng đầu hiện nay như máy CT Cone beam, Scan Itero 5D, Máy nhổ răng bằng sóng siêu âm Piezotome … và đáp ứng đầy đủ các tiêu chí: Đội ngũ bác sĩ nhiều kinh nghiệm, tay nghề cao - Thiết bị máy móc hiện đại - Hệ thống được thanh trùng",
    images: ["./asia-pic1.png", "./asia-pic2.png", "./asia-pic3.png"],
    rating: 4.5,
    services: ["Bộc Răng Sứ", "Trồng Răng Implant", "Niềng Răng Thẩm Mĩ"],
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
    </div>
  );
};

export default ClinicOwnerPage;
