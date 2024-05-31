import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => (
  <img className="avatar" src={src} alt={alt} />
);

export default Avatar;
