import React from 'react';
import Data from './PartnersData'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Partners = () => {
    return (
        <>
            <div className='bg-second-color py-12'>
                <div className="container">
                    <div>
                    <Swiper
                        name='header'
                        slidesPerView={3}
                        centeredSlides={false}
                        slidesPerGroupSkip={3}
                        grabCursor={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                            modules={[ Autoplay ]}
                            className="mySwiper">

                            {
                                Data.map(({id, img, alt}) => {
                                    return (
                                        <SwiperSlide key={id}>
                                            <div>
                                                <img src={img} className='w-1/2' alt={alt} />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }


                    </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners