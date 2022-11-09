import React, { useState, useEffect } from 'react';
import Img from '../../../assets/Women9.jpg';

const NewSeason = () => {


    const [windowValue, setWindowValue] = useState(false);
    const activeClass = window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            setWindowValue(true)
        }
    })

    useEffect(() => {
        window.addEventListener("scroll", activeClass)
        return (
            window.removeEventListener("scroll", activeClass)
        )
    },[])

    return (
        <>
            <div className='bg-[#fefefe] text-main-color overflow-hidden'>
                <div className='flex flex-col items-center md:flex-row'>
                    <div className="container">
                        <div className={windowValue ? 'w-full md:w-[100%] ActiveLeft' : 'NoneActiveLeft' }>
                            <h2 className='text-2xl md:text-3xl'>New season, new wardrobe. As the temperatures continue to rise, have your style follow suit and revamp your racks with fresh, elevated summer looks.</h2>
                        </div>
                    </div>
                    <div className={windowValue ? 'ActiveRight w-full' : 'NoneActiveRight' }>
                        <img src={Img} alt="Img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewSeason