import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Data from "../HeaderData";
import "swiper/css";
import "./Swiper.css";

export default function App() {
  return (
    <>
      <div className=" h-[60vh] sm:h-[100vh] w-full">
        <Swiper
          name="header"
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Data.map(({ img, alt, description, heading }, i) => {
            return (
              <SwiperSlide key={i} className="relative">
                <img
                  className="h-[60vh] sm:h-[80vh] lg:h-[100vh]"
                  src={img}
                  alt={alt}
                />
                <div className="absolute top-1/3 px-12 sm:top-1/2">
                  <h6>{heading}</h6>
                  <h1>{description}</h1>
                  <a href="#">
                    <button className="bg-second-color text-main-color mt-4 hover:bg-main-color hover:text-second-color border-none">
                      Buy Now
                    </button>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
