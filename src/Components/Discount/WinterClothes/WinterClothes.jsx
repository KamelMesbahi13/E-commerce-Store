import React, { useState, useEffect } from 'react';
import { fetchData } from '../../Api/Api';

const WinterClothes = () => {

    const [WinterClothes, setWinterClothes] = useState([]);

    useEffect(() => {
        fetchData()
        .then((data) => {
            let WinterClothes = data.data.slice(1, 4)
            setWinterClothes(WinterClothes);
            console.log(WinterClothes);
        })
    }, [])

    return (
        <>
            <div className='bg-[#fefefe]'>
                <div className="container">
                    <div>
                        <div className='flex flex-col-reverse justify-between lg:flex-row items-center'>
                            <div>
                                {
                                    WinterClothes.map((prop, i) => {
                                        return (
                                            <div key={i}>
                                                <div className='p-8 md:h-[45vh] flex items-center md:w-full mt-12'>
                                                    <img className='h-[25vh] md:h-[35vh]' src={prop.image} alt="" />
                                                    <div className='pl-4'>
                                                        <h2 className='mt-6 text-xl'>{prop.title}</h2>
                                                        <p className='mt-2 text-sm'>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Perspiciatis, iure!</p>
                                                        <h2 className='text-xl font-bold mt-2'>{prop.price} $</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='w-full lg:w-5/12'>
                                <h1 className='font-bold text-6xl'>Winter</h1>
                                <h2 className='mt-2 mb-4 text-2xl'>Outfit Inspiration</h2>
                                <p className='w-full lg:w-9/12'>New season, new wardrobe. As the temperatures continue to rise, <br /> have your style follow suit and revamp your racks with fresh, elevated summer looks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WinterClothes