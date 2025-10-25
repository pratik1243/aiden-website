"use client";
import React from "react";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("./Footer"));
const Navbar = dynamic(() => import("./Navbar"));

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
