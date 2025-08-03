import React from "react";
import dynamic from "next/dynamic";
import { Col, Container, Row } from "react-bootstrap";
import ContentCard from "./ContentCard";
import CardContent2 from "./CardContent2";
import CardContent3 from "./CardContent3";
import ContentHeadSec from "./ContentHeadSec";
import homeImage1 from "../assets/images/home-image-1.avif";
import homeImage2 from "../assets/images/home-image-2.avif";
import bannerBg from "../assets/images/website-background.svg";
import timeTrackIcon from "../assets/images/time-track-icon.svg";
import logisticsIcon from "../assets/images/logistics-icon.svg";
import delieveryIcon from "../assets/images/delievery-icon.svg";
const VideoBackground = dynamic(() => import("./VideoBackground"));

const HomePage = () => {
  return (
    <>
      <Container className="video-container">
        <VideoBackground />
      </Container>
      <div className="home-section-2">
        <ContentCard
          heading={
            <>
              Your Reliable Last-Mile{" "}
              <span className="red-text">Delivery Partner</span>
            </>
          }
          paragraph={
            " At aidel, we empower businesses with fast, reliable delivery solutions tailored for India’s unique logistics landscape. Our AI-powered platform ensures seamless fulfillment and full control over your deliveries."
          }
          image={bannerBg}
          buttonText="Join Now"
        />
      </div>

      <div className="home-section-3 grey-bg">
        <Container>
          <ContentHeadSec
            heading={"Reliable Delivery Solutions"}
            paragraph={
              " Fast, scalable fulfillment with real-time tracking and automated payments for seamless logistics management."
            }
            align="center"
          />
          <Row className="mt-5">
            <Col lg={6} md={6} sm={12} xs={12}>
              <CardContent2
                heading={"Reliable Delivery Solutions"}
                image={homeImage1}
                paragraph="Fast, scalable fulfillment with real-time tracking and automated payments for seamless logistics management."
              />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <CardContent2
                heading={"Comprehensive Logistics Support"}
                image={homeImage2}
                paragraph="Aidel handles diverse delivery needs, from food to e-commerce, ensuring efficiency and reliability."
              />
            </Col>
          </Row>
          <Row className="features-sec">
            <Col lg={4} md={4} sm={12} xs={12}>
              <CardContent3
                image={timeTrackIcon}
                heading={"Real-Time Tracking"}
                paragraph="Monitor deliveries with precision and ease"
              />
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <CardContent3
                image={logisticsIcon}
                heading={"Smart Logistics"}
                paragraph="Automated Payment Solutions for Efficiency."
              />
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <CardContent3
                image={delieveryIcon}
                heading={"Flexible Delivery Options"}
                paragraph="Streamline your payment processes effortlessly."
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
