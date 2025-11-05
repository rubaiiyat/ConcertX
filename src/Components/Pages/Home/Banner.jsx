import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="space-y-7" style={{ fontFamily: "'Bebas Neue', cursive" }}>
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">
        <span className="bg-gradient-to-r from-[#25e26a] via-[#1fb6e0] to-[#4588f4] text-transparent bg-clip-text">
          Enjoy
        </span>{" "}
        Your Favorite Music at <br /> The Best{" "}
        <span className="bg-gradient-to-r from-[#25e26a] via-[#1fb6e0] to-[#4588f4] text-transparent bg-clip-text">
          Concerts
        </span>{" "}
      </h1>
      <p className="text-base md:text-xl lg:text-2xl text-center">
        ConcertX is a platform that provides concert tickets from world famous
        artists for you. Come on, get your tickets now before they run out.
      </p>
      <div className="flex justify-center ">
        <Link
          to={"/events"}
          className="btn btn-dash btn-accent text-base md:text-xl p-5 rounded-full"
        >
          Get Tickets
        </Link>
      </div>
    </div>
  );
};

export default Banner;
