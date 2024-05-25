import React from "react";

interface ClinicDetailsProps {
  details: string;
}

const ClinicDetails: React.FC<ClinicDetailsProps> = ({ details }) => (
  <div className="clinic-details">
    <h3>Giới thiệu chi tiết</h3>
    <p>{details}</p>
  </div>
);

export default ClinicDetails;
