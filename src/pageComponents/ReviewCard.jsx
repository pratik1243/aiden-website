import React from "react";
import Image from "next/image";

const ReviewCard = ({ name, paragraph, image }) => {
  return (
    <div className="review-card">
      <div className="review-star-sec"></div>
      <p>&#8216;&#8216; {paragraph} &#8217;&#8217;</p>
      <div className="logo">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          priority
          alt="review-logo"
        />
      </div>
      <span>{name}</span>
    </div>
  );
};

export default ReviewCard;
