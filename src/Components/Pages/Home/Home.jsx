import React from "react";
import Banner from "./Banner";
import Slider from "./Slider";
import SponsorSlider from "./SponsorSlider";
import PopularGenre from "./PopularGenre";
import UpcomingEvents from "../../Events/UpcomingEvents";
import BannerBottom from "./BannerBottom";

const Home = () => {
  return (
    <div style={{ fontFamily: "'Bebas Neue', cursive" }} className="mt-10">
      <Banner></Banner>
      <Slider></Slider>
      <SponsorSlider></SponsorSlider>
      <PopularGenre></PopularGenre>
      <UpcomingEvents></UpcomingEvents>
      <BannerBottom></BannerBottom>
    </div>
  );
};

export default Home;
