import React from "react";
import EventsBanner from "./EventBanner";
import Event from "./Event";

const events = [
  {
    name: "Ed Sheeran Live",
    date: "Dec 15, 2025",
    venue: "Madison Square Garden, NY",
    description: "Join Ed Sheeran for an unforgettable night of music.",
    image:
      "https://i.pinimg.com/1200x/b9/45/42/b94542cef2e059c008fd971d17416be0.jpg",
  },
  {
    name: "BTS World Tour",
    date: "Jan 20, 2026",
    venue: "Seoul Olympic Stadium, Seoul",
    description: "The ultimate K-pop experience with BTS.",
    image:
      "https://i.pinimg.com/736x/ee/93/21/ee9321c9611296fd29fb7e56ece78a02.jpg",
  },
  {
    name: "Adele Live",
    date: "Feb 10, 2026",
    venue: "The O2 Arena, London",
    description: "Experience the soulful voice of Adele live in concert.",
    image:
      "https://i.pinimg.com/1200x/b4/91/6b/b4916b3929e2583237eacf2d5a055139.jpg",
  },
  {
    name: "Metallica Concert",
    date: "Mar 5, 2026",
    venue: "Wembley Stadium, London",
    description: "Get ready to rock with Metallica's electrifying performance.",

    image:
      "https://i.pinimg.com/1200x/11/af/88/11af88a8650a21f860778b4a2b6475ed.jpg",
  },
  {
    name: "Jazz Nights",
    date: "Apr 12, 2026",
    venue: "Blue Note Jazz Club, NYC",
    description: "An evening of smooth jazz with top artists.",
    image:
      "https://i.pinimg.com/1200x/21/0f/0e/210f0ef72578c091278659c49e46cd66.jpg",
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
          <Event key={idx} event={event}></Event>
        ))}
      </div>
    </div>
  );
};

export default Events;
