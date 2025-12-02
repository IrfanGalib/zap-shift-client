import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks.jsx/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Brands from "./Brands/Brands";
import Reviews from "./Reviews/Reviews";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const HomePage = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <OurServices />
      <Brands />
      <Reviews reviewsPromise={reviewsPromise} />
    </div>
  );
};

export default HomePage;
