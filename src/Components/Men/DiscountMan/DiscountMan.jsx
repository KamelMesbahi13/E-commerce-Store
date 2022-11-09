import React from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import Img from '../../../assets/Man9.jpg';
import { Discount } from '../../INDEX';

const DiscountMan = () => {
    return (
        <>
            <div className='mt-16'>
                <div className='flex flex-col items-center sm:flex-row'>
                    <div className="container">
                        <div className= 'sm:mx-28 sm:w-[60%] textCenter mb-8 sm:mb-0'>
                            <i><AiFillThunderbolt className='mb-4 text-2xl sm:text-5xl' /></i>
                            <h6>Sale Is On !!</h6>
                            <h1 className='my-4 text-8xl font-bold'>30% OFF</h1>
                            <a href="/discount"><button>See More</button></a>
                        </div>
                    </div>
                    <div className='mt-4 md:mt-0 md:w-1/2'>
                        <img className='mt-4 md:mt-0 h-[55vh] sm:h-full' src={Img} alt="Img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscountMan