import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const initialBookings = [
  {
    id: 1,
    event: "Rock Night Festival 2025",
    date: "Nov 10, 2025",
    time: "7:00 PM",
    price: "$120",
    image:
      "https://i.pinimg.com/1200x/d3/ef/ce/d3efcef6e3aadf055dec62b50ac34f60.jpg",
  },
  {
    id: 2,
    event: "Jazz & Blues Evening",
    date: "Nov 12, 2025",
    time: "6:30 PM",
    price: "$80",
    image:
      "https://i.pinimg.com/736x/64/4c/c4/644cc46b1456435a9cd79de0141ab304.jpg",
  },
  {
    id: 3,
    event: "Electronic Music Carnival",
    date: "Nov 15, 2025",
    time: "8:00 PM",
    price: "$150",
    image:
      "https://i.pinimg.com/1200x/c2/0a/c2/c20ac2aec259641629bdd2e1722af158.jpg",
  },
];

const MyBookings = () => {
  const [bookings, setBookings] = useState(initialBookings);

  const handleDelete = (id) => {
    const filtered = bookings.filter((b) => b.id !== id);
    setBookings(filtered);
  };

  return (
    <div className="px-4 md:px-20 lg:px-32 py-10 bg-base-100 min-h-screen font-sans">
      <Helmet>
        <title>My Bookings | Music Events</title>
      </Helmet>

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        My Bookings
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Event</th>
              <th>Date</th>
              <th>Time</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking.id}>
                <th>{index + 1}</th>
                <td className="flex items-center gap-3">
                  <img
                    src={booking.image}
                    alt={booking.event}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <span className="">{booking.event}</span>
                </td>
                <td className="">{booking.date}</td>
                <td className="">{booking.time}</td>
                <td className="">{booking.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(booking.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {bookings.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center text-gray-500 py-4">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
