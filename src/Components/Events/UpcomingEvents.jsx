import React from "react";
import { FaDrum, FaGuitar, FaHeadphones, FaMicrophone } from "react-icons/fa";

const events = [
  {
    type: "CONCERT",
    name: "Ed Sheeran Live",
    subtitle: "Divide Tour 2025",
    date: "Dec 15, 2025",
    time: "7:00 PM",
    image:
      "https://i.pinimg.com/1200x/09/e2/15/09e21509546128bba870a727b03cae72.jpg",
  },
  {
    type: "CONCERT",
    name: "Adele: Night of Soul",
    subtitle: "World Tour 2025",
    date: "Jan 20, 2026",
    time: "8:30 PM",
    image:
      "https://i.pinimg.com/1200x/aa/a0/0f/aaa00f531af1400f71c831fadbdb79c9.jpg",
  },
  {
    type: "CONCERT",
    name: "Billie Eilish Show",
    subtitle: "Happier Than Ever Tour",
    date: "Mar 5, 2026",
    time: "9:00 PM",
    image:
      "https://i.pinimg.com/736x/1e/d4/b3/1ed4b37b43105e154d5d70b755cd916c.jpg",
  },
];

const formatDate = (dateString) => {
  const [month, day, year] = dateString.split(/[\s,]+/);
  return { day, month, year };
};

const UpcomingEvents = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-4xl font-bold text-center flex items-center gap-4">
          Out Upcoming Popular Events
          <FaGuitar className="text-yellow-500" size={30} />
          <FaDrum className="text-red-500" size={30} />
          <FaMicrophone className="text-blue-500" size={30} />
          <FaHeadphones className="text-purple-500" size={30} />
        </h2>
        <p className=" mt-2">
          Experience live music from your favorite artists
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {events.map((event, idx) => {
          const { day, month, year } = formatDate(event.date);

          return (
            <div
              key={idx}
              className="flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden transition transform hover:scale-[1.01]  bg-base-200"
            >
              {/* Left Side: Date + Info */}
              <div className="flex flex-col justify-between p-4 md:flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-accent  px-3 py-1 rounded-full text-xs font-semibold">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold  mb-1">{event.name}</h3>
                  <p className="  mb-2">{event.subtitle}</p>
                  <div className=" text-sm">
                    {month} {day}, {year} • {event.time}
                  </div>
                </div>
              </div>

              {/* Right Side: Fixed Image */}
              <div className=" w-full md:w-48 h-48 md:h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingEvents;
