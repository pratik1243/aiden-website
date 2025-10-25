import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FetchComp2 = ({ heading, paragraph, cardData }) => {
  return (
    <Container className="fetchr-sec2">
      <div className="head-sec">
        <h1>{heading}</h1>
        <p>{paragraph}</p>
      </div>
      <div className="card-section">
        <Row>
          {cardData?.map((ele, i) => {
            return (
              <Col key={i} lg={4} md={4} xs={12} sm={6}>
                <div className="card-div">
                  <Image src={ele?.icon} height={120} width={120} alt="card-logo" />
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

export default FetchComp2;
