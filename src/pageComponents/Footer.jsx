import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import fetchrrLogo from "../assets/images/fetchrr-logo.png";

const Footer = () => {
  return (
    <div className="footer-sec">
      <Container>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className="footer-text-sec">
              <Image
                src={fetchrrLogo}
                alt="footer-icon"
                height={39}
                width={122}
              />
              <p className="mt-3">
                Enabling last-mile delivery for businesses across India
              </p>
            </div>
          </Col>
          <Col lg={3} md={3} sm={3} xs={6}>
            <div className="link-sec">
              <h5>Product</h5>
              <a href="">Features</a>
              <a href="">Pricing</a>
              <a href="">API Docs</a>
            </div>
          </Col>
          <Col lg={3} md={3} sm={3} xs={6}>
            <div className="link-sec">
              <h5>Company</h5>
              <a href="">About</a>
              <a href="">Careers</a>
              <a href="">Contact</a>
            </div>
          </Col>
          <Col lg={2} md={2} sm={3} xs={6}>
            <div className="link-sec">
              <h5>Support</h5>
              <a href="">Help Center</a>
              <a href="">Terms</a>
              <a href="">Privacy</a>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="copyright-sec">
          © 2024 fetchrr. All rights reserved.
        </div>
      </Container>
    </div>
  );
};

export default Footer;
