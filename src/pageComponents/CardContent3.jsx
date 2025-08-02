import React from "react";
import Image from "next/image";

const CardContent3 = ({ heading, paragraph, image }) => {
  return (
    <div className="card3-content">
      <Image src={image} height={50} width={50} alt="content-3-image" />
      <h3>{heading}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default CardContent3;
