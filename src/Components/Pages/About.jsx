import React from "react";
import { Music, Users, Star, Calendar } from "lucide-react";

const About = () => {
  return (
    <section
      style={{ fontFamily: "'Bebas Neue', cursive" }}
      className="bg-base-100 text-base-content min-h-screen flex flex-col items-center py-16 px-6"
    >
      {/* Hero Section */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
          About <span className="text-base-content">ConcertX</span>
        </h1>
        <p className="text-base-content/70 leading-relaxed">
          ConcertX is your gateway to live music experiences — connecting
          passionate fans with their favorite artists. From intimate gigs to
          massive arena shows, we bring the rhythm of the world right to your
          city.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mb-16">
        <div className="bg-base-200 p-8 rounded-2xl shadow-md hover:shadow-lg transition text-left">
          <h2 className="text-2xl font-semibold text-accent mb-3">
            Our Mission
          </h2>
          <p className="text-base-content/70">
            To unite people through the power of music by creating unforgettable
            concert experiences and helping artists reach global audiences.
          </p>
        </div>

        <div className="bg-base-200 p-8 rounded-2xl shadow-md hover:shadow-lg transition text-left">
          <h2 className="text-2xl font-semibold text-accent mb-3">
            Our Vision
          </h2>
          <p className="text-base-content/70">
            To become the world’s most trusted platform for discovering and
            experiencing live music, where every performance feels personal.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mb-16">
        <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <Calendar size={32} className="mx-auto text-accent mb-2" />
          <h3 className="text-3xl font-bold text-accent">500+</h3>
          <p className="text-base-content/70">Events Organized</p>
        </div>

        <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <Users size={32} className="mx-auto text-accent mb-2" />
          <h3 className="text-3xl font-bold text-accent">300K+</h3>
          <p className="text-base-content/70">Happy Attendees</p>
        </div>

        <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <Music size={32} className="mx-auto text-accent mb-2" />
          <h3 className="text-3xl font-bold text-accent">150+</h3>
          <p className="text-base-content/70">Artists Supported</p>
        </div>

        <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <Star size={32} className="mx-auto text-accent mb-2" />
          <h3 className="text-3xl font-bold text-accent">4.9/5</h3>
          <p className="text-base-content/70">User Ratings</p>
        </div>
      </div>

      {/* Closing Message */}
      <div className="text-center max-w-3xl">
        <p className="text-base-content/70 italic text-lg">
          “Music is not just sound — it’s an emotion, a memory, and a
          connection. Let’s keep the world dancing together.”
        </p>
        <h3 className="mt-4 text-accent font-bold text-xl">
          — The ConcertX Team 🎵
        </h3>
      </div>
    </section>
  );
};

export default About;
