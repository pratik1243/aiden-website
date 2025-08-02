import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const ContentCard = ({ heading, paragraph, image, buttonText, reverse, smallHeading }) => {
  return (
    <Container>
      <Row className={`${reverse ? "flex-row-reverse" : ""}`}>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div className={`content-sec ${reverse ? "m-auto" : ""}`}>
            <h2 className={`${smallHeading ? 'small-font mb-2' : 'mb-4'}`}>{heading}</h2>
            <p className="mb-5">{paragraph}</p>
            {buttonText && <button>{buttonText}</button>}
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div className="banner-img">
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              priority
              alt="left-logo"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContentCard;
