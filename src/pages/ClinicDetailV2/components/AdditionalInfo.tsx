import React from "react";

interface AdditionalInfoProps {
  images: string[];
  rating: number;
  services: string[];
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({
  images,
  rating,
  services,
}) => (
  <div className="additional-info">
    <div className="images">
      <h3>Hình ảnh</h3>
      <div className="image-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Hình ảnh ${index + 1}`} />
        ))}
      </div>
    </div>
    <div className="rating">
      <h3>Đánh giá</h3>
      <p>{rating} / 5 sao</p>
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
);

export default AdditionalInfo;
