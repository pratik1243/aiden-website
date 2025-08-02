import React from "react";
import dynamic from "next/dynamic";
import Loader from "@/pageComponents/Loader";
const Layout = dynamic(() => import("../../pageComponents/Layout"), {
  loading: () => <Loader />,
  ssr: false,
});
const Services = dynamic(() => import("../../pageComponents/Services"), {
  loading: () => <Loader />,
  ssr: false,
});

const ServicePage = () => {
  return (
    <Layout>
      <Services />
    </Layout>
  );
};

export default ServicePage;
