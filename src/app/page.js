import React from "react";
import dynamic from "next/dynamic";
import Layout from "@/pageComponents/Layout";
const HomePage = dynamic(() => import("../pageComponents/HomePage"));

export default function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
