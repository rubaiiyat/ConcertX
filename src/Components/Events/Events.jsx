import React from "react";
import EventsBanner from "./EventBanner";

const events = [
  {
    name: "Ed Sheeran Live",
    date: "Dec 15, 2025",
    venue: "Madison Square Garden, NY",
    image:
      "https://images.unsplash.com/photo-1526378725487-1ec54e6d9a3a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "BTS World Tour",
    date: "Jan 20, 2026",
    venue: "Seoul Olympic Stadium, Seoul",
    image:
      "https://images.unsplash.com/photo-1603808033198-cbd7f5f7f7d0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Adele Live",
    date: "Feb 10, 2026",
    venue: "The O2 Arena, London",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Metallica Concert",
    date: "Mar 5, 2026",
    venue: "Wembley Stadium, London",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jazz Nights",
    date: "Apr 12, 2026",
    venue: "Blue Note Jazz Club, NYC",
    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
  },
];

const Events = () => {
  return (
    <div className="mx-auto px-4">
      <EventsBanner></EventsBanner>
      <h2 className="text-4xl font-bold text-center mb-12 mt-10">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer"
          >
            <div className="h-56 w-full overflow-hidden">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">{event.name}</h3>
              <p className="text-gray-500 dark:text-gray-400">{event.date}</p>
              <p className="text-gray-500 dark:text-gray-400">{event.venue}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
