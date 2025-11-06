import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
const newsData = [
  {
    id: 1,
    title: "Rock Night Festival 2025 Announced",
    date: "Nov 10, 2025",
    category: "Concert",
    description:
      "Get ready for the ultimate rock experience! The Rock Night Festival 2025 is coming with top bands from around the world. Don't miss electrifying performances and an unforgettable night of music and energy.",
    image:
      "https://i.pinimg.com/1200x/d3/ef/ce/d3efcef6e3aadf055dec62b50ac34f60.jpg",
  },
  {
    id: 2,
    title: "Jazz & Blues Evening in NYC",
    date: "Nov 12, 2025",
    category: "Event",
    description:
      "Experience smooth jazz and soulful blues at this exclusive evening in New York City. Featuring world-renowned musicians and a cozy ambiance perfect for music lovers.",
    image:
      "https://i.pinimg.com/736x/64/4c/c4/644cc46b1456435a9cd79de0141ab304.jpg",
  },
  {
    id: 3,
    title: "Electronic Music Carnival",
    date: "Nov 15, 2025",
    category: "Festival",
    description:
      "Join the biggest electronic music festival of the year with DJs from around the globe. Dance all night to the latest electronic hits, stunning light shows, and an energetic crowd.",
    image:
      "https://i.pinimg.com/1200x/c2/0a/c2/c20ac2aec259641629bdd2e1722af158.jpg",
  },
  {
    id: 4,
    title: "Indie Band Live Performance",
    date: "Nov 18, 2025",
    category: "Concert",
    description:
      "Enjoy an intimate night of live performances from popular indie bands. Discover fresh talent, unique sounds, and an authentic music experience in a cozy venue.",
    image:
      "https://i.pinimg.com/1200x/68/60/47/686047682190d536adc6099672f1f062.jpg",
  },
  {
    id: 5,
    title: "Summer Music Fest 2025",
    date: "Dec 1, 2025",
    category: "Festival",
    description:
      "Celebrate summer with the biggest outdoor music festival featuring multiple genres, food stalls, and activities for all ages. Bring your friends and enjoy unforgettable performances.",
    image:
      "https://i.pinimg.com/1200x/e0/0a/c8/e00ac85b6de9e5b35d4086106f75ed61.jpg",
  },
];

const News = () => {
  return (
    <div
      style={{ fontFamily: "'Bebas Neue', cursive" }}
      className="px-4 md:px-20 lg:px-32 py-10 bg-base-200 font-sans"
    >
      <Helmet>
        <title>News | My Website</title>
      </Helmet>

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 ">
        Latest News
      </h1>

      <div className="flex flex-col gap-12">
        {newsData.map((news, index) => (
          <motion.div
            key={news.id}
            className={`flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-shadow duration-300 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full md:w-1/2 h-64 object-cover"
            />
            <div className="p-6 md:w-1/2">
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span className="font-semibold">{news.category}</span>
                <span>{news.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {news.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {news.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default News;
