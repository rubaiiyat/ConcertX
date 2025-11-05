import React from "react";
import Banner from "./Banner";
import Slider from "./Slider";
import SponsorSlider from "./SponsorSlider";

const Home = () => {
  return (
    <div className="mt-10">
      <Banner></Banner>
      <Slider></Slider>
      <SponsorSlider></SponsorSlider>
    </div>
  );
};

export default Home;
