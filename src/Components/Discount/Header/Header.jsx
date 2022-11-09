import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
            <div name='header' className='discount-header-back relative h-[80vh] md:h-[110vh] text-second-color'>
                <div className="container">
                    <div className='absolute top-1/3 md:top-1/2 right-1/2 translate-x-1/2 md:translate-x-0 md:right-[10%]'>
                        <div className='w-[10rem] h-[10rem] border-[25px] rounded-full '>
                        </div>
                    </div>
                    <div className='absolute top-[65%] md:top-[80%] right-1/2 translate-x-1/2 md:translate-x-0 md:right-[10%] text-center'>
                        <h1 className='font-bold'>A New Style Made <br /> For The Runway</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header