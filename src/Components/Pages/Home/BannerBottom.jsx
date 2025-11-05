import React from "react";
import { FaGuitar, FaHeadphones, FaMicrophone } from "react-icons/fa";
import { Link } from "react-router";

const BannerBottom = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-accent via-[#1fb6e0] to-[#4588f4] text-white py-16 px-6 rounded-xl relative overflow-hidden">
        <FaGuitar className="absolute top-4 left-4 text-yellow-300 opacity-30 w-12 h-12 animate-bounce" />
        <FaMicrophone className="absolute bottom-6 right-6 text-blue-300 opacity-30 w-12 h-12 animate-bounce" />
        <FaHeadphones className="absolute top-10 right-20 text-green-300 opacity-30 w-12 h-12 animate-bounce" />

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Don’t Miss Your Favorite Artist Live!
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Book your tickets now and experience the magic of live music.
          </p>
          <Link to={"/events"}>
            <button className="bg-white text-accent font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition hover:cursor-pointer">
              Get Your Tickets
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
