import React from "react";
import { Heart, Share2, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router";

const Event = ({ event }) => {
  const { image, name, date, venue, description } = event;

  return (
    <div className="bg-base-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transform transition duration-500 hover:scale-[1.02] cursor-pointer flex flex-col justify-between">
      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />

        {/* Icons */}
        <div className="absolute top-3 left-3 flex gap-2">
          <button className="bg-base-100/80 p-2 rounded-full hover:bg-accent hover:text-white transition hover:cursor-pointer">
            <Heart size={18} />
          </button>
          <button className="bg-base-100/80 p-2 rounded-full hover:bg-accent hover:text-white transition hover:cursor-pointer">
            <Share2 size={18} />
          </button>
        </div>

        {/* Price */}
        <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
          $20
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between flex-1">
        {/* Category */}
        <p className="text-sm text-accent font-semibold tracking-wider mb-1">
          CONCERT
        </p>

        {/* Title */}
        <h3 className="text-lg font-bold  mb-2">{name}</h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {description.length > 60 ? description.slice(0, 60) : description}
          ....
        </p>

        {/* View Details Button */}
        <Link>
          <button className="w-full bg-accent hover:brightness-110 text-white font-semibold py-2 rounded-lg transition hover:cursor-pointer">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Event;
