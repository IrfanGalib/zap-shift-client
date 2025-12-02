import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks.jsx/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Brands from "./Brands/Brands";
import Reviews from "./Reviews/Reviews";
import CustomerSatisfaction from "../CustomerSatisfaction/CustomerSatisfaction";
import FAQ from "./FAQ/FAQ";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const HomePage = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <OurServices />
      <Brands />
      <CustomerSatisfaction />
      <Reviews reviewsPromise={reviewsPromise} />
      <FAQ />
    </div>
  );
};

export default HomePage;
