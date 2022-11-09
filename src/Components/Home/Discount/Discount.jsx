import React, { useState, useEffect } from 'react';
import Img from '../../../assets/Back1.jpg'

const Discount = () => {

    const [windowValue, setWindowValue] = useState(false);
    const activeClass = window.addEventListener('scroll', () => {
        if (window.scrollY > 780) {
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
            <div className='overflow-hidden mt-16'>
                <div className='flex flex-col items-center sm:flex-row-reverse'>
                    <div className="container">
                        <div className={windowValue ? 'sm:mx-28 sm:w-[60%] mb-8 sm:mb-0 ActiveRight' : 'NoneActiveRight' }>
                            <h6>Don't Miss The Chance..</h6>
                            <h1 className='my-4'>Discount On Your Dream Clothes</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus suscipit aperiam voluptates ab assumenda, officiis, est nihil rerum inventore atque aspernatur iusto mollitia vel! Modi quidem adipisci architecto id.</p>
                            <a href="/discount"><button>See More</button></a>
                        </div>
                    </div>
                    <div className={windowValue ? 'mt-4 md:mt-0 md:w-1/2 ActiveLeft' : 'NoneActiveLeft' }>
                        <img className='mt-4 md:mt-0 h-[55vh] sm:h-full' src={Img} alt="Img" />
                    </div>
                </div>
            </div>
        </>
    )


}

export default Discount