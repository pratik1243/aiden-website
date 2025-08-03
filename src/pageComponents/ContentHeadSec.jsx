import React from "react";
import { Col, Row } from "react-bootstrap";

const ContentHeadSec = ({ heading, paragraph, align }) => {
  return (
    <Row>
      <Col lg={align == "center" ? 12 : 4} md={align == "center" ? 12 : 4} sm={12} xs={12}>
        <div
          className={`content-head-sec text-${align || "left"} ${
            align ? "m-auto" : ""
          }`}
        >
          <h2 className="mb-3">{heading}</h2>
          <p>{paragraph}</p>
        </div>
      </Col>
    </Row>
  );
};

export default ContentHeadSec;
