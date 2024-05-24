import React from "react";
import Avatar from "./Avatar";
import ContactInfo from "./Contact";
import Status from "./Status1";

interface ClinicInfoProps {
  name: string;
  status: string;
  contact: {
    website: string;
    address: string;
    phone: string;
  };
  avatarSrc: string;
}

const ClinicInfo: React.FC<ClinicInfoProps> = ({
  name,
  status,
  contact,
  avatarSrc,
}) => (
  <div className="clinic-info">
    <Avatar src={avatarSrc} alt={name} />
    <div className="clinic-details">
      <h2>{name}</h2>
      <ContactInfo contact={contact} />
    </div>
    <Status status={status} />
  </div>
);
export default ClinicInfo;
