"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import NavLogo from "../assets/images/aidel-dark-logo.png";
import menuLogo from "../assets/images/menu-side-btn.svg";

const Navbar = ({ openSidebar }) => {
  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="nav-bar-sec">
      <Row>
        <Col lg={8} md={6} sm={6} xs={6}>
          <Image
            src={NavLogo}
            height={30}
            width={90}
            alt="nav-logo"
          />
        </Col>
        <Col lg={4} md={6} sm={6} xs={6}>
          <div role="button" className="text-end side-menu-btn" onClick={openSidebar}>
            <Image src={menuLogo} height={26} width={26} alt="menu-btn" />
          </div>

          <div className="nav-sec-btns">
            <Link href="/" className="menu-btn" onClick={scrollTop}>
              Home
            </Link>
            <Link href="/services" className="menu-btn" onClick={scrollTop}>
              Services
            </Link>
            <Link href="/technology" className="menu-btn" onClick={scrollTop}>
              Technology
            </Link>
            <Link href="/contact-us" className="menu-btn" onClick={scrollTop}>
              Contact
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
