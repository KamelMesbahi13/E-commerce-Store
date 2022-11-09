import React from 'react';
import './MenClothes.css'

const MenClothes = () => {
    return (
        <>
            <div className='men-clothes-back h-[80vh] md:h-[110vh]'>
                <div className="container relative">
                    <div>
                        <div className='pt-20 text-end text-second-color'>
                            <h1 className='text-4xl md:text-7xl mb-2'>Men's Style & Fashion</h1>
                            <h6 className='text-2xl md:text-4xl'>News, Tips, Trends & <br /> Celebrity Style </h6>
                            <a href="/men"><button>See More</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenClothes