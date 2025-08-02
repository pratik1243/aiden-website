import React from "react";
import dynamic from "next/dynamic";
import Loader from "@/pageComponents/Loader";
const Layout = dynamic(() => import("../../pageComponents/Layout"), {
  loading: () => <Loader />,
  ssr: false,
});
const Contact = dynamic(() => import("../../pageComponents/Contact"), {
  loading: () => <Loader />,
  ssr: false,
});

const ContactPage = () => {
  return (
    <Layout>
      <Contact />
    </Layout>
  );
};

export default ContactPage;
