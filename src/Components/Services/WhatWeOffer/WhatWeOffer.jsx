import React from 'react';
import { MdOutlineComputer } from 'react-icons/md';
import { AiOutlineCustomerService, AiOutlineShopping } from 'react-icons/ai';

const WhatWeOffer = () => {
    return (
        <>
            <div className='relative'>
                <div className="container">
                    <div className='relative -top-12'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-main-color'>
                            <div className='bg-second-color w-8/12 sm:w-[90%] mx-auto textCenter px-4 pb-16 pt-4 shadow-lg rounded-sm relative before:absolute before:w-0 before:h-1 before:transition-all before:duration-1000 before:bottom-0 before:left-0 before:bg-third-color hover:before:w-full'>
                                <i className='text-4xl text-third-color bg-third-color'><MdOutlineComputer /></i>
                                <h2 className='text-2xl my-4'>It Expertise</h2>
                                <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, consectetur quasi repellat doloribus cumque quo.</p>
                            </div>

                            <div className='bg-second-color w-8/12 sm:w-[90%] mx-auto textCenter px-4 pb-16 pt-4 shadow-lg rounded-sm relative before:absolute before:w-0 before:h-1 before:transition-all before:duration-1000 before:bottom-0 before:left-0 before:bg-third-color hover:before:w-full'>
                                <i className='text-4xl text-third-color bg-third-color'><AiOutlineCustomerService /></i>
                                <h2 className='text-2xl my-4'>24/7 Support</h2>
                                <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, consectetur quasi repellat doloribus cumque quo.</p>
                            </div>

                            <div className='bg-second-color w-8/12 sm:w-[90%] mx-auto textCenter px-4 pb-16 pt-4 shadow-lg rounded-sm relative before:absolute before:w-0 before:h-1 before:transition-all before:duration-1000 before:bottom-0 before:left-0 before:bg-third-color hover:before:w-full'>
                                <i className='text-4xl text-third-color bg-third-color'><AiOutlineShopping /></i>
                                <h2 className='text-2xl my-4'>It Expertise</h2>
                                <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, consectetur quasi repellat doloribus cumque quo.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatWeOffer