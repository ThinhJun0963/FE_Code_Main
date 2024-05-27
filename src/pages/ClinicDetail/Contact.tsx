import React from "react";

interface ContactProps {
  contact: {
    website: string;
    address: string;
    phone: string;
  };
}

const ContactInfo: React.FC<ContactProps> = ({ contact }) => (
  <div className="contact-info">
    <div>
      <strong>Website: </strong>
      <a href={contact.website} target="_blank" rel="noopener noreferrer">
        {contact.website}
      </a>
    </div>
    <div>
      <strong>Địa chỉ:</strong> {contact.address}
    </div>
    <div>
      <strong>Số điện thoại:</strong> {contact.phone}
    </div>
  </div>
);

export default ContactInfo;
