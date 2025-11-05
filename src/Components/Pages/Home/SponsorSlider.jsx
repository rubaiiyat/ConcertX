import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FaSpotify, FaSoundcloud, FaApple, FaDeezer } from "react-icons/fa";
import { SiBandsintown, SiYoutubemusic } from "react-icons/si";

const sponsors = [
  {
    id: 1,
    icon: <FaSpotify className="text-green-500" size={50} />,
    name: "Spotify",
  },
  {
    id: 2,
    icon: <FaSoundcloud className="text-orange-500" size={50} />,
    name: "SoundCloud",
  },
  {
    id: 3,
    icon: <FaApple className="text-[#FB2A41]" size={50} />,
    name: "Apple Music",
  },
  {
    id: 4,
    icon: <FaDeezer className="text-purple-500" size={50} />,
    name: "Deezer",
  },
  {
    id: 5,
    icon: <SiBandsintown className="text-accent" size={50} />,
    name: "Bandsintown",
  },
  {
    id: 6,
    icon: <SiYoutubemusic className="text-red-500" size={50} />,
    name: "Youtube Music",
  },
];

const SponsorSlider = () => {
  return (
    <div
      style={{ fontFamily: "'Bebas Neue', cursive" }}
      className="w-full py-10 bg-base-200 shadow mt-10"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        modules={[Autoplay]}
      >
        {sponsors.map((sponsor) => (
          <SwiperSlide key={sponsor.id}>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="">{sponsor.icon}</div>
              <p className="font-medium">{sponsor.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SponsorSlider;
