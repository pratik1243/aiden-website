import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const FetchComp3 = ({ heading, paragraph, cardData }) => {
  return (
    <Container className="fetchr-sec3">
      <div className="head-sec">
        <h1>{heading}</h1>
        <p>{paragraph}</p>
      </div>
      <div className="card-section">
        <Row>
          {cardData?.map((ele, i) => {
            return (
              <Col key={i} lg={4} md={4} xs={12} sm={12}>
                <div className="card-div">
                  <Image src={ele?.icon} height={60} width={60} alt="card-logo2" />
                  <h3>{ele?.heading}</h3>
                  <p> {ele?.paragraph}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};

export default FetchComp3;
