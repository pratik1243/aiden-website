import React from "react";
import dynamic from "next/dynamic";
import Loader from "@/pageComponents/Loader";
const Layout = dynamic(() => import("../../pageComponents/Layout"), {
  loading: () => <Loader />,
  ssr: false,
});
const Technology = dynamic(() => import("../../pageComponents/Technology"), {
  loading: () => <Loader />,
  ssr: false,
});

const TechnologyPage = () => {
  return (
    <Layout>
      <Technology />
    </Layout>
  );
};

export default TechnologyPage;
