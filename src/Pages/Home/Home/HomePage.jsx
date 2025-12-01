import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks.jsx/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Brands from "./Brands/Brands";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <OurServices />
      <Brands />
    </div>
  );
};

export default HomePage;
