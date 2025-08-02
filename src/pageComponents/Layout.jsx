"use client";
import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("./Footer"), { ssr: false });
const Navbar = dynamic(() => import("./Navbar"), { ssr: false });
const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false });

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openSidebar = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Navbar openSidebar={openSidebar} />
      <Sidebar open={open} openSidebar={openSidebar} />
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
