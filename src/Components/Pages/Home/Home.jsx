import React from "react";
import Banner from "./Banner";
import Slider from "./Slider";
import SponsorSlider from "./SponsorSlider";
import PopularGenre from "./PopularGenre";
import UpcomingEvents from "../../Events/UpcomingEvents";
import BannerBottom from "./BannerBottom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div style={{ fontFamily: "'Bebas Neue', cursive" }} className="mt-10">
      <Helmet>
        <title>Home | ConcertX</title>
      </Helmet>
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
