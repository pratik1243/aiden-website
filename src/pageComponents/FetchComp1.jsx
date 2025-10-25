import Image from "next/image";
import React from "react";
import arrowIcon from "../assets/images/arrow-icon.svg";
import { Col, Container, Row } from "react-bootstrap";

const FetchComp1 = () => {
  return (
    <div className="fetchr-sec1">
      <Container fluid>
        <div className="head-sec">
          <h1>
            Last-Mile Delivery, <span> Made Simple </span>
          </h1>
          <p>
            Enable seamless last-mile delivery for your business. No tech team
            required. Integrate in minutes.
          </p>
          <button>
            Get Started <Image src={arrowIcon} alt="arrow" height={25} width={30} />
          </button>
        </div>
        <div className="counter-sec">
          <Row>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="count-sec">
                <h2>500+</h2>
                <span>Businesses</span>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="count-sec">
                <h2>50K+</h2>
                <span>Daily Deliveries</span>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <div className="count-sec">
                <h2>99.5%</h2>
                <span>On-Time Rate</span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default FetchComp1;
