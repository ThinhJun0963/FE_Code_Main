import React from "react";
import ClinicDetails from "./Detail";
import AdditionalInfo from "./AdditionalInfo";

interface MainContentProps {
  details: string;
  images: string[];
  rating: number;
  services: string[];
}

const MainContent: React.FC<MainContentProps> = ({
  details,
  images,
  rating,
  services,
}) => (
  <div className="main-content">
    <div className="right-column">
      <ClinicDetails details={details} />
    </div>
    <div className="left-column">
      <AdditionalInfo images={images} rating={rating} services={services} />
    </div>
  </div>
);

export default MainContent;
