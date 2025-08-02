import React from "react";
import { Container } from "react-bootstrap";
import ContentCard from "./ContentCard";
import ContentHeadSec from "./ContentHeadSec";
import techImage1 from "../assets/images/tech-image-1.avif";
import techImage2 from "../assets/images/tech-image-2.avif";
import techImage3 from "../assets/images/tech-image-3.avif";
import techImage4 from "../assets/images/tech-image-4.avif";

const Technology = () => {
  return (
    <div className="technology-sec">
      <div className="margin-100">
        <ContentCard
          heading={"Empowering Your Delivery Experience"}
          paragraph={
            "Aidel is your reliable last-mile B2B delivery partner, offering fast, scalable fulfillment with real-time tracking and seamless tech integration for businesses."
          }
          image={techImage1}
          buttonText="Join Us"
        />
      </div>
      <div className="margin-100">
        <ContentCard
          smallHeading
          heading={"Innovative Delivery Solutions"}
          paragraph={
            "With our trained fleet and AI-powered system, Aidel ensures smarter logistics management, helping businesses thrive in India's complex delivery landscape."
          }
          image={techImage2}
          reverse
        />
      </div>
      <Container>
        <ContentHeadSec
          heading={<>Last-Mile <span className="red-text">Delivery</span></>}
          paragraph={
            "Aidel provides fast, reliable, and scalable B2B delivery solutions."
          }
        />
      </Container>
      <div className="margin-100">
        <ContentCard
          heading={"Smart Logistics"}
          smallHeading
          paragraph={
            "Our platform integrates seamlessly with your tech for efficient logistics management and real-time tracking, ensuring your business can deliver faster and smarter without third-party reliance."
          }
          image={techImage4}
          
        />
      </div>
      <div className="margin-100">
        <ContentCard
          heading={"AI Integration"}
          smallHeading
          paragraph={
            "Utilizing AI technology, Aidel automates payments and logistics, offering businesses full control over their delivery processes, enhancing efficiency and customer satisfaction across various sectors."
          }
          image={techImage3}
          reverse
        />
      </div>
    </div>
  );
};

export default Technology;
