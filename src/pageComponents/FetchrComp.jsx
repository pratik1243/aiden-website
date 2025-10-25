import React from "react";
import FetchComp1 from "./FetchComp1";
import FetchComp2 from "./FetchComp2";
import FetchComp3 from "./FetchComp3";
import FetchComp4 from "./FetchComp4";
import greenIcon1 from "../assets/images/green-icon.png";
import greenIcon2 from "../assets/images/green-icon2.png";
import greenIcon3 from "../assets/images/green-icon3.png";
import greenIcon4 from "../assets/images/green-icon4.png";
import greenIcon5 from "../assets/images/green-icon5.png";
import greenIcon6 from "../assets/images/green-icon6.png";
import greenIcon7 from "../assets/images/green-icon7.png";
import greenIcon8 from "../assets/images/green-icon8.png";
import greenIcon9 from "../assets/images/green-icon9.png";
import greenIcon10 from "../assets/images/green-icon10.png";
import greenIcon11 from "../assets/images/green-icon11.png";
import greenIcon12 from "../assets/images/green-icon12.png";
import greenIcon13 from "../assets/images/green-icon13.png";
import greenIcon14 from "../assets/images/green-icon14.png";
import greenIcon15 from "../assets/images/green-icon15.png";
import greenIcon16 from "../assets/images/green-icon16.png";
import greenIcon17 from "../assets/images/green-icon17.png";
import greenIcon18 from "../assets/images/green-icon18.png";

const FetchrComp = () => {
  return (
    <div className="fetchrr-sec">
      <FetchComp1 />
      <FetchComp2
        heading={"How fetchrr Works"}
        paragraph={"Seamless delivery in 3 simple steps"}
        cardData={[
          {
            icon: greenIcon1,
            heading: "Customer Orders",
            paragraph: "Customer places order from business",
          },
          {
            icon: greenIcon2,
            heading: "Business Processes",
            paragraph: "Order confirmed & prepared",
          },
          {
            icon: greenIcon3,
            heading: "Fast Delivery",
            paragraph: "Delivered to customer in 10 minutes!",
          },
        ]}
      />
      <FetchComp3
        heading={"Built For Every Business"}
        paragraph={
          "From national logistics providers to local sweet shops, fetchrr powers last-mile delivery for all"
        }
        cardData={[
          {
            icon: greenIcon4,
            heading: "Mid-Mile Logistics",
            paragraph:
              "EKart, Amazon, Delhivery, DTDC, BlueDart, DHL - seamlessly connect your hub to final delivery",
          },
          {
            icon: greenIcon5,
            heading: "Food & Beverage",
            paragraph:
              "McDonald's, Burger King, local restaurants - deliver hot meals faster",
          },
          {
            icon: greenIcon6,
            heading: "Pharmacy & Healthcare",
            paragraph:
              "Apollo, MedPlus, Pharmeasy, Tata 1mg - ensure safe, timely medicine delivery",
          },
          {
            icon: greenIcon7,
            heading: "D2C Brands",
            paragraph:
              "Connect your physical stores with on-demand delivery for customers",
          },
          {
            icon: greenIcon8,
            heading: "Local Retail",
            paragraph:
              "Grocery stores, sweet shops, laundry services - enable instant delivery",
          },
          {
            icon: greenIcon9,
            heading: "Any Businesss",
            paragraph: "If you have products to deliver, we'll make it happen",
          },
        ]}
      />
      <FetchComp3
        heading={"Everything You Need to Deliver Excellence"}
        paragraph={"Built for scale, designed for simplicity"}
        cardData={[
          {
            icon: greenIcon13,
            heading: "Real-Time Tracking",
            paragraph: "Track every delivery with live GPS updates and ETAs",
          },
          {
            icon: greenIcon14,
            heading: "Rider Management",
            paragraph:
              "Complete rider app with optimized routing and assignments",
          },
          {
            icon: greenIcon15,
            heading: "Analytics Dashboard",
            paragraph:
              "Insights on delivery performance, costs, and customer satisfaction",
          },
          {
            icon: greenIcon16,
            heading: "Easy Integration",
            paragraph:
              "REST APIs, webhooks, and ready-to-use SDKs for seamless connection",
          },
          {
            icon: greenIcon17,
            heading: "Smart Notifications",
            paragraph: "Automated updates for customers, riders, and your team",
          },
          {
            icon: greenIcon18,
            heading: "Secure & Reliable",
            paragraph: "Enterprise-grade security with 99.9% uptime guarantee",
          },
        ]}
      />
      <FetchComp2
        heading={"Get Started in 3 Simple Steps"}
        paragraph={"From signup to your first delivery in under an hour"}
        cardData={[
          {
            icon: greenIcon10,
            heading: "Sign Up & Integrate",
            paragraph:
              "Use our portal or integrate via API in minutes. No tech team required.",
          },
          {
            icon: greenIcon11,
            heading: "Place Orders",
            paragraph:
              "Create delivery orders through our dashboard or automatically via your platform.",
          },
          {
            icon: greenIcon12,
            heading: "Track & Scale",
            paragraph:
              "Real-time tracking, rider management, and analytics. Scale as you grow.",
          },
        ]}
      />
      <FetchComp4 />
    </div>
  );
};

export default FetchrComp;
