import React from "react";
import {
  FaGuitar,
  FaMusic,
  FaHeadphones,
  FaDrum,
  FaMicrophone,
  FaMicrochip,
} from "react-icons/fa";

const genres = [
  { name: "Rock", icon: <FaGuitar size={30} /> },
  { name: "Metal", icon: <FaDrum size={30} /> },
  { name: "Pop", icon: <FaMicrophone size={30} /> },
  { name: "Jazz", icon: <FaMusic size={30} /> },
  { name: "EDM", icon: <FaHeadphones size={30} /> },
  { name: "HipHop", icon: <FaMicrochip size={30} /> },
];

const PopularGenreRow = () => {
  return (
    <div
      style={{ fontFamily: "'Bebas Neue', cursive" }}
      className="mx-auto py-16 px-4"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Popular Genres</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {genres.map((genre, idx) => {
          const rotate = idx % 2 === 0 ? "-3deg" : "3deg";
          const translateY = idx % 2 === 0 ? "-5px" : "5px";

          return (
            <div
              key={idx}
              className="w-32 h-32 flex flex-col items-center justify-center rounded-lg shadow-lg bg-base-200 cursor-pointer transform transition duration-500 hover:scale-110"
              style={{
                transform: `rotate(${rotate}) translateY(${translateY})`,
              }}
            >
              <div className="text-accent mb-2">{genre.icon}</div>
              <p className="font-bold text-center">{genre.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularGenreRow;
