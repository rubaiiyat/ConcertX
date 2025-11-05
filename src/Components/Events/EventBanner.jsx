import React from "react";
import { FaMusic, FaGuitar, FaHeadphones } from "react-icons/fa";

const EventsBanner = () => {
  return (
    <div className="relative w-full p-20 flex items-center justify-center text-center overflow-hidden rounded-b-2xl">
      {/* Background image */}
      <img
        src="https://images.pexels.com/photos/20532118/pexels-photo-20532118.jpeg"
        alt="Concert crowd"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 text-white px-6">
        <div className="flex justify-center gap-4 text-4xl mb-4 opacity-80">
          <FaMusic className="text-pink-400 animate-pulse" />
          <FaGuitar className="text-yellow-400 animate-bounce" />
          <FaHeadphones className="text-blue-400 animate-pulse" />
        </div>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-4">
          Experience the Sound of Live Music
        </h1>
        <p className="text-sm md:text-base lg:text-xl text-gray-200 mb-6 ">
          Explore upcoming concerts, music fests, and exclusive live shows near
          you.
        </p>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
  );
};

export default EventsBanner;
