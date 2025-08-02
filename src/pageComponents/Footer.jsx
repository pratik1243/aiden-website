import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import instagramIcon from "../assets/images/instagram-icon.svg";
import facebookIcon from "../assets/images/facebook-icon.svg";
import twitterIcon from "../assets/images/twitter-icon.svg";
import linkedIcon from "../assets/images/linkedin-icon.svg";
import darkBrandLogo from "../assets/images/aidel-dark-logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="footer-sec">
        <Container>
          <Row>
            <Col lg={7} md={7} sm={12} xs={12}>
              <div>
                <div className="footer-logo-sec mb-3">
                  <Image
                    src={darkBrandLogo}
                    height={25}
                    width={80}
                    alt="footer-logo"
                  />
                </div>

                <p className="mb-4">
                  Fast, reliable delivery solutions for your business.
                </p>

                <div className="mb-2">
                  <span> +91-98765-43210</span>
                </div>

                <div>
                  <span>
                    <a href="mailto:contact@aidelix.com">contact@aidelix.com</a>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={5} md={5} sm={12} xs={12}>
              <div className="contact-right-sec">
                <h3 className="mb-4">Get In Touch</h3>

                <div className="mt-2">
                  <a href="" className="contact-icons">
                    <Image
                      src={instagramIcon}
                      alt="footer-icon1"
                      height={35}
                      width={35}
                    />
                  </a>

                  <a href="" className="contact-icons">
                    <Image
                      src={facebookIcon}
                      alt="footer-icon2"
                      height={35}
                      width={35}
                    />
                  </a>

                  <a href="" className="contact-icons">
                    <Image
                      src={twitterIcon}
                      alt="footer-icon3"
                      height={35}
                      width={35}
                    />
                  </a>

                  <a href="" className="contact-icons">
                    <Image
                      src={linkedIcon}
                      alt="footer-icon3"
                      height={35}
                      width={35}
                    />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copy-right-sec">
        <p>Aidel © 2025. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
