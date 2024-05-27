import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface MainContentProps {
  details: string;
  images: string[];
  rating: number;
  services: string[];
}

const ClinicDetail: React.FC<MainContentProps> = ({
  details,
  images,
  rating,
  services,
}) => (
  <div className="main-content">
    <div className="left-column">
      <h3>Giới thiệu chi tiết</h3>  
      <div
        className="clinic-details"
        dangerouslySetInnerHTML={{ __html: details }}
      ></div>
    </div>
    <div className="right-column">
      <div className="additional-info">
        <div className="images">
          <h3>Hình ảnh phòng khám</h3>
          <div className="image-grid">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Clinic image ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="rating">
          <h3>
            Đánh giá: {rating} / 5 <FontAwesomeIcon icon={faStar} />
          </h3>
        </div>
        <div className="services">
          <h3>Dịch vụ nổi bật</h3>
          <ul>
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ClinicDetail;
