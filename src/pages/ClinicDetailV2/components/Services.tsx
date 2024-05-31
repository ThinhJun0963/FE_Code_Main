import React from "react";

interface ServicesProps {
  services: string[];
}

const Services: React.FC<ServicesProps> = ({ services }) => (
  <div className="services">
    <h3>Dịch vụ nổi bật</h3>
    <ul>
      {services.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  </div>
);

export default Services;
