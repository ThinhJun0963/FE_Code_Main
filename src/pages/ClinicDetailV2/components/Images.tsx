import React from 'react';

interface ClinicImagesProps {
  images: string[];
}

const ClinicImages: React.FC<ClinicImagesProps> = ({ images }) => (
  <div className="clinic-images">
    {images.map((src, index) => (
      <img key={index} src={src} alt={`Clinic Image ${index + 1}`} />
    ))}
  </div>
);

export default ClinicImages;
