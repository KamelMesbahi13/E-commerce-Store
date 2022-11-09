import React from 'react';
import Swiper from './Swiper/Swiper';

const Testimonials = () => {
    return (
        <>
            <div className='bg-second-color text-main-color pb-40'>
                <div className="container">
                    <div className='textCenter pt-8'>
                        <h6>Testimonial</h6>
                        <h1>What Our Clients Say About Us</h1>
                    </div>
                    <div className='bg-[#fefe] mt-16'>
                        <Swiper />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials;