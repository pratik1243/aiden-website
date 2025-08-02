import React from "react";
import ContentCard from "./ContentCard";
import ContentHeadSec from "./ContentHeadSec";
import { Col, Container, Row } from "react-bootstrap";
import serviceImage1 from "../assets/images/services-image-1.avif";
import serviceImage2 from "../assets/images/services-image-2.avif";
import reviewImage1 from "../assets/images/review-image-1.avif";
import reviewImage2 from "../assets/images/review-image-2.avif";
import ReviewCard from "./ReviewCard";

const Services = () => {
  return (
    <div className="service-section">
      <Container>
        <ContentHeadSec
          heading={
            <>
              Last-Mile <span className="red-text">Delivery</span>
            </>
          }
          paragraph={
            "Aidel provides fast, reliable, scalable delivery solutions for businesses."
          }
          align="center"
        />
      </Container>
      <div className="margin-100">
        <ContentCard
          smallHeading
          heading={"Seamless Integration"}
          paragraph={
            "Our platform integrates effortlessly with your existing technology for streamlined logistics management and real-time tracking, ensuring your deliveries are efficient and reliable every time."
          }
          image={serviceImage1}
          reverse
        />
      </div>
      <div className="margin-100">
        <ContentCard
          smallHeading
          heading={
            <>
              <span className="red-text">AI-</span>Powered Logistics
            </>
          }
          paragraph={
            "Utilizing advanced AI technology, Aidel optimizes delivery routes and processes, enhancing operational efficiency and providing businesses with full control over their logistics and fulfillment needs."
          }
          image={serviceImage2}
        />
      </div>
      <div className="padding-100 grey-bg review-section">
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <h3 className="heading">What Our Clients Says</h3>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <ReviewCard
                name={"Priya Mehta"}
                image={reviewImage2}
                paragraph={
                  "With Aidel, we streamlined our logistics and improved customer satisfaction significantly. Highly recommend their services!"
                }
              />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <ReviewCard
                name={"Raj Sharma"}
                image={reviewImage1}
                paragraph={
                  "Aidel transformed our delivery process, ensuring speed and reliability for our business needs every time."
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
