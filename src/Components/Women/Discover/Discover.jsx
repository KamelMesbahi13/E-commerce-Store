import React from 'react';
import ImgOne from '../../../assets/Discover1.jpg';
import ImgTwo from '../../../assets/Discover2.jpg';



const Discover = () => {
    return (
        <>
            <div className='pt-8'>
                <div className='flex flex-col sm:flex-row items-center'>

                    <div className='overflow-hidden textCenter'>
                        <img className='w-8/12 my-4 sm:h-[35vh] md:h-[45vh] lg:h-[75vh] sm:my-0 sm:w-[35rem] transition-all duration-1000 hover:scale-110' src={ImgOne} alt="Marshall Artist" />
                    </div>

                    <div className='sm:mr-8 px-12 pt-8 textCenter'>
                        <h1>Our Brand <br /> Items</h1>
                        <p className='mt-4 text-sm w-10/12 sm:w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat hic pariatur.</p>
                        <a href="#"><button className='mt-4 lg:mt-12 bg-third-color-women border-none hover:bg-[#ffa8a8]'>View More</button></a>
                    </div>

                    <div className='overflow-hidden textCenter'>
                        <img className='w-8/12 my-4 sm:h-[35vh] md:h-[45vh] lg:h-[75vh] sm:my-0 sm:w-[35rem] transition-all duration-1000 hover:scale-110' src={ImgTwo} alt="Marshall Artist" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discover