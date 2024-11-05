import React from "react";

const Rating = ({ rate }) => {
  const currentRate = rate.toFixed(0);

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < currentRate) {
      stars.push("★");
    } else {
      stars.push("☆");
    }
  }
  return <div className="text-2xl ">{stars}</div>;
};

export default Rating;
