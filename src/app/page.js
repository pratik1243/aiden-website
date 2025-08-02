import React from "react";
import dynamic from "next/dynamic";
import Layout from "@/pageComponents/Layout";
import Loader from "@/pageComponents/Loader";
const HomePage = dynamic(() => import("../pageComponents/HomePage"), {
  loading: () => <Loader />,
  ssr: false,
});

export default function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
