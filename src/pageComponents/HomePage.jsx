import React from "react";
import dynamic from "next/dynamic";
const FetchrComp = dynamic(() => import("./FetchrComp"));

const HomePage = () => {
  return <FetchrComp />;
};

export default HomePage;
