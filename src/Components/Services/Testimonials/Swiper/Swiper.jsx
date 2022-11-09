import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.css";
import { Pagination } from "swiper";
import { RiStarSLine } from 'react-icons/ri';
import Data from "../../../Services/Testimonials/SwiperData";

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper">
                    {
                        Data.map(({ img, alt, time, heading, description }, i) => {
                            return (
                                <SwiperSlide key={i} className='cursor-grab'>
                                    <div className="flex flex-col lg:flex-row">
                                        <div className="w-[60vh]">
                                            <img className="h-[20vh] lg:h-[50vh]" src={img} alt={alt} />
                                        </div>

                                        <div className="w-full p-8 lg:ml-8">
                                            <h6>{time}</h6>
                                            <h2 className="italic mt-2">{heading}</h2>
                                            <p className="text-sm mt-4">{description}</p>
                                            <div className="flex mt-4">
                                                <RiStarSLine className="text-[#E6B325] text-2xl" />
                                                <RiStarSLine className="text-[#E6B325] text-2xl" />
                                                <RiStarSLine className="text-[#E6B325] text-2xl" />
                                                <RiStarSLine className="text-[#E6B325] text-2xl" />
                                                <RiStarSLine className="text-[#E6B325] text-2xl" />
                                            </div>
                                        </div>




                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
            </Swiper>
        </>
    );
}