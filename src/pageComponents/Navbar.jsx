"use client";
import React from "react";
import Image from "next/image";
import { Button, Col, Row } from "react-bootstrap";
import NavLogo from "../assets/images/fetchrr-logo.png";

const Navbar = () => {
  return (
    <div className="nav-bar-sec">
      <Row className="align-items-center">
        <Col lg={5} md={5} sm={6} xs={6}>
          <Image src={NavLogo} height={42} width={120} alt="nav-logo" />
        </Col>
        <Col lg={4} md={4} sm={6} xs={6}>
          <div className="nav-link-btn-sec">
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Pricing</a>
          </div>
        </Col>
        <Col lg={3} md={3} sm={6} xs={6}>
          <div className="sign-sec">
            <a href="#" className="sign-in-btn">Sign in</a>
            <Button variant={"dark"}>Get Started</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
