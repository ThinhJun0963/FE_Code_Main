import React from "react";
import "./FloatingButton.css";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      <Fab variant="extended" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Tư vấn trực tiếp
      </Fab>
    </button>
  );
};

export default FloatingButton;
