import Image from "next/image";
import React from "react";

const CardContent2 = ({ heading, paragraph, image }) => {
  return (
    <div className="card2-content">
      <div className="image-sec">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          priority
          alt="left-logo"
        />
      </div>
      <div className="card-text-sec">
        <h3>{heading}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default CardContent2;
