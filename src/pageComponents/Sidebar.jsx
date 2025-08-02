import React from "react";
import Link from "next/link";
import closeLogo from "../assets/images/close-icon.svg";
import Image from "next/image";

const Sidebar = ({ open, openSidebar }) => {
  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      openSidebar();
    }
  };
  return (
    <>
      <div className={`side-bar ${open ? "open" : ""}`}>
        <div role={"button"} className="text-end" onClick={openSidebar}>
          <Image src={closeLogo} height={25} width={25} alt="close-logo" />
        </div>

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
      <div className="backdrop" onClick={openSidebar}></div>
    </>
  );
};

export default Sidebar;
