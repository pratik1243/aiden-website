import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact-sec">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="d-flex align-items-center h-100">
            <div className="contact-content-sec">
              <h1>Our Location</h1>
              <p>
                Aidel is strategically positioned to serve businesses across
                India with efficient last-mile delivery solutions tailored to
                your needs.
              </p>
              <div className="mt-5">
                <div className="mb-4">
                  <h6>Address</h6>
                  <span>123 Delievery Lane, India</span>
                </div>

                <div>
                  <h6>Hours</h6>
                  <span>9 AM - 6 PM</span>
                </div>
              </div>
            </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="contact-map-sec">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160998678!2d72.7411018803535!3d19.082522320332996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce558c1d88fb%3A0x1d7e57b3e7fc8c8e!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1622788412345!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
