import React from "react";
import dynamic from 'next/dynamic';
const Services = dynamic(() => import("../../pageComponents/Services"));

const ServicePage = () => {
  return <Services />;
};

export default ServicePage;
