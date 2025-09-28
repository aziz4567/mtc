
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export default function VideoSwiper() {
  const videos = [
      "https://swiperjs.com/images/home/videos/lambo.mp4",
      "https://swiperjs.com/images/home/videos/samsung.mp4",
      "https://swiperjs.com/images/home/videos/msi.mp4",
      "https://swiperjs.com/images/home/videos/one-plus.mp4",
      
    ];

  return (
    <div className="w-full h-[900px]  flex flex-col items-center justify-center">
      <Swiper
        slidesPerView={"auto"} // auto width, videos sit next to each other
        spaceBetween={15}
        loop={true}
        speed={8000} // higher = smoother slower scroll
        autoplay={{
          delay: 0, // no pause between slides
          disableOnInteraction: false,
          reverseDirection: true, // scroll right → left
        }}
        modules={[Autoplay]}
        allowTouchMove={false} // prevent user drag
        className="w-full h-full"
      >
        {videos.map((src, idx) => (
          <SwiperSlide
            key={idx}
            className="!w-[650px] !h-[400px]" // fixed small size like in your video
          >
            <div className="w-full h-full rounded-sm overflow-hidden ">
              <video
                src={src}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={"auto"} // auto width, videos sit next to each other
        spaceBetween={15}
        loop={true}
        speed={8000} // higher = smoother slower scroll
        autoplay={{
          delay: 0, // no pause between slides
          disableOnInteraction: false,
          reverseDirection: false, // scroll right → left
        }}
        modules={[Autoplay]}
        allowTouchMove={false} // prevent user drag
        className="w-full h-full"
      >
        {videos.map((src, idx) => (
          <SwiperSlide
            key={idx}
            className="!w-[650px] !h-[400px]" // fixed small size like in your video
          >
            <div className="w-full h-full rounded-sm overflow-hidden shadow-lg">
              <video
                src={src}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
