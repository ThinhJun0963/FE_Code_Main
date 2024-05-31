import React from "react";
import "./FloatingButton.css";

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      Tư vấn trực tiếp
    </button>
  );
};

export default FloatingButton;
