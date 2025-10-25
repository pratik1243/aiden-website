import React from "react";
import arrowIcon from "../assets/images/arrow-icon2.svg";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

const FetchComp4 = () => {
  return (
    <div className="fetchr-sec4">
      <h1>Ready to Transform Your Delivery?</h1>
      <p>Join 500+ businesses already delivering smarter with fetchrr</p>
      <div className="button-sec">
        <Row>
          <Col lg={6} md={6} sm={6} xs={6}>
            <button>Start Free Trial</button>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <button className="contact-btn">Contact Sales <Image src={arrowIcon} alt="arrow" height={25} width={30} /></button>
          </Col>
        </Row>
      </div>
      <p className="credit-txt">No credit card required • Free 14-day trial • Cancel anytime</p>
    </div>
  );
};

export default FetchComp4;
