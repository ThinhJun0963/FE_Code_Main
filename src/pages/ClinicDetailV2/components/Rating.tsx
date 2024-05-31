import React from "react";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => (
  <div className="rating">
    <p>Đánh giá: {rating}/5 sao</p>
  </div>
);

export default Rating;
