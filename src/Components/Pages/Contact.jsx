import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <section
      style={{ fontFamily: "'Bebas Neue', cursive" }}
      className="bg-base-100 text-base-content min-h-screen flex flex-col items-center justify-center py-16 px-6"
    >
      <Helmet>
        <title>Contact | ConcertX</title>
      </Helmet>
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-3">
          Get in Touch
        </h1>
        <p className="text-base-content/70 max-w-lg mx-auto">
          We’d love to hear from you! Whether it’s about an event, partnership,
          or just a hello — we’re always listening.
        </p>
      </div>

      {/* Info Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        {/* Address */}
        <div className="bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left">
          <MapPin className="text-accent mb-3" size={28} />
          <h2 className="text-lg font-semibold mb-2 text-accent">
            Our Location
          </h2>
          <p className="text-base-content/70">
            123 Harmony Street, Bogura, Bangladesh
          </p>
        </div>

        {/* Email */}
        <div className="bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left">
          <Mail className="text-accent mb-3" size={28} />
          <h2 className="text-lg font-semibold mb-2 text-accent">Email Us</h2>
          <p className="text-base-content/70">support@concertx.com</p>
          <p className="text-base-content/70">press@concertx.com</p>
        </div>

        {/* Phone */}
        <div className="bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left">
          <Phone className="text-accent mb-3" size={28} />
          <h2 className="text-lg font-semibold mb-2 text-accent">Call Us</h2>
          <p className="text-base-content/70">+8801785320110</p>
          <p className="text-base-content/70">+881861108989</p>
        </div>

        {/* Working Hours */}
        <div className="bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left">
          <Clock className="text-accent mb-3" size={28} />
          <h2 className="text-lg font-semibold mb-2 text-accent">
            Working Hours
          </h2>
          <p className="text-base-content/70">Monday – Friday: 9 AM – 6 PM</p>
          <p className="text-base-content/70">Saturday: 10 AM – 4 PM</p>
        </div>

        {/* Social Media */}
        <div className="bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left md:col-span-2 lg:col-span-1 flex flex-col items-start">
          <h2 className="text-lg font-semibold mb-4 text-accent">Follow Us</h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/"
              className="p-2 bg-base-300 rounded-full hover:bg-accent hover:text-white transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://www.instagram.com/"
              className="p-2 bg-base-300 rounded-full hover:bg-accent hover:text-white transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.x.com/"
              className="p-2 bg-base-300 rounded-full hover:bg-accent hover:text-white transition"
            >
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="mt-16 text-center max-w-xl">
        <p className="text-base-content/70">
          📩 Have a question or feedback? Drop us a message anytime — we’ll get
          back to you faster than your favorite band’s encore!
        </p>
      </div>
    </section>
  );
};

export default Contact;
