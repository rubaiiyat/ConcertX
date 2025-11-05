import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay } from "swiper/modules";
import { EffectCoverflow, Pagination } from "swiper/modules";
const Slider = () => {
  const images = [
    "https://i.pinimg.com/1200x/7a/c6/d3/7ac6d3765bf9db5aea6ee43d481ceb9d.jpg",
    "https://i.pinimg.com/1200x/8b/d0/ff/8bd0ff498ede6b22968dd5fca8cb3237.jpg",
    "https://i.pinimg.com/736x/26/45/e2/2645e27469c83e9f284314b53954dcd7.jpg",
    "https://i.pinimg.com/1200x/71/6c/ee/716ceefeb193e730638081d0399d2fbf.jpg",
    "https://i.pinimg.com/736x/85/c7/7d/85c77db7d9c1ab0191fb6338c1e1845c.jpg",
    "https://i.pinimg.com/1200x/23/e2/ce/23e2ce8f530d5cb648178949fc0ce690.jpg",
    "https://i.pinimg.com/736x/4a/fc/6b/4afc6b0abe5de1260f5e8b7a37c1f6b4.jpg",
    "https://i.pinimg.com/736x/3f/85/bd/3f85bd8b21307f03f37477a274b7cad5.jpg",
    "https://i.pinimg.com/1200x/d3/fa/e1/d3fae1124a4e86dd0fddddaa110131c0.jpg",
    "https://i.pinimg.com/736x/89/c4/96/89c496b613ab6f72200e9867b3589434.jpg",
    "https://i.pinimg.com/1200x/43/e5/d5/43e5d54c196ad5f870baeda1e8efa966.jpg",
  ];

  return (
    <div className="w-full py-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Scrollbar, Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`img-${i}`}
              className="rounded-lg w-full h-96 object-cover hover:scale-105 transition duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
